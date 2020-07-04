import React, { useState, useEffect } from "react";
import "./styles.css";
import * as serviceWorker from "./serviceWorker";
import { Provider as CollectionProvider } from "./useCollection";
import lang from "./resources";
import useCurrentTime from "./helpers/useCurrentTime";
import FilterSortCtrl from "./FilterSortCtrl";
import StatsCtrl from "./StatsCtrl";
import ListDisplayCtrl from "./ListDisplayCtrl";

function useServiceWorkerInstalled() {
    const [hasUpdateInstalled, setUpdated] = useState(false);

    // Learn more about service workers: https://bit.ly/CRA-PWA
    useEffect(() => {
        serviceWorker.register({
            onUpdate: (reg) => {
                reg.waiting.postMessage({ type: "SKIP_WAITING" });
                setUpdated(true);
            },
        });
    }, []);

    return hasUpdateInstalled;
}

export default function App() {
    const currentTime = useCurrentTime();
    const hasUpdated = useServiceWorkerInstalled();
    return (
        <CollectionProvider>
            <h1>Animal Crossing: New Horizons</h1>
            <h2>{currentTime.toLocaleString()}</h2>
            {hasUpdated && (
                <div
                    className="alert-update"
                    onClick={() => window.location.reload()}>
                    {lang.general.applicationUpdatedMessage}
                </div>
            )}
            <FilterSortCtrl />
            <hr />
            <StatsCtrl />
            <hr />
            <ListDisplayCtrl />
            <footer>
                Source on{" "}
                <a
                    href="https://github.com/sydeslyde/acnh-collect"
                    target="_blank"
                    rel="noopener noreferrer">
                    GitHub
                </a>{" "}
                &mdash; Hosting via GitHub Pages &mdash; Version{" "}
                {process.env.REACT_APP_VERSION}
            </footer>
        </CollectionProvider>
    );
}
