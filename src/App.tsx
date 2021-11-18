import React, { useState, useEffect } from "react";
import "./styles.css";
import * as serviceWorker from "./serviceWorkerRegistration";
import { Provider as CollectionProvider } from "./useCollection";
import {
    Layouts,
    Provider as CollectionLayoutProvider,
    useCollectionLayout,
} from "./useCollectionLayout";
import lang from "./resources";
import useCurrentTime from "./helpers/useCurrentTime";
import FilterSortCtrl from "./components/FilterSortCtrl";
import StatsCtrl from "./components/StatsCtrl";
import CollectionDisplayCtrl from "./components/CollectionDisplayCtrl";
import RadioSelect from "./components/RadioSelect";

function useServiceWorkerInstalled() {
    const [hasUpdateInstalled, setUpdated] = useState(false);

    // Learn more about service workers: https://bit.ly/CRA-PWA
    useEffect(() => {
        serviceWorker.register({
            onUpdate: (reg: ServiceWorkerRegistration) => {
                if (reg.waiting) {
                    reg.waiting.postMessage({ type: "SKIP_WAITING" });
                    setUpdated(true);
                }
            },
        });
    }, []);

    return hasUpdateInstalled;
}

const Settings = () => {
    const { currentLayout, setLayout } = useCollectionLayout();
    return (
        <RadioSelect
            name="layout-setting"
            values={[Layouts.GRID, Layouts.LIST]}
            selectedValue={currentLayout}
            onChange={(l) => setLayout(l)}
            labelSource={{
                [Layouts.GRID]: "Grid",
                [Layouts.LIST]: "List",
            }}
        />
    );
};

export default function App() {
    const currentTime = useCurrentTime();
    const hasUpdated = useServiceWorkerInstalled();
    return (
        <CollectionLayoutProvider>
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
                <CollectionDisplayCtrl />
                <footer>
                    Source on{" "}
                    <a
                        href="https://github.com/avgrad/acnh-collect"
                        target="_blank"
                        rel="noopener noreferrer">
                        GitHub
                    </a>{" "}
                    &mdash; Hosting via GitHub Pages &mdash; Version{" "}
                    {process.env.REACT_APP_VERSION}
                    <br />
                    <small>
                        DISCLAIMER: This is a fan made site that claims no
                        ownership of any intellectual property that is
                        displayed. Entry images are property of Nintendo, and
                        are used only for non-commercial and educational
                        purpose.
                    </small>
                    <br />
                    <small>
                        Image Hosting and Data Source:{" "}
                        <a
                            href="https://acnhapi.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            ACNH API
                        </a>{" "}
                        and{" "}
                        <a
                            href="https://acnhcdn.com/"
                            target="_blank"
                            rel="noopener noreferrer">
                            ACNH CDN
                        </a>
                    </small>
                    <hr />
                    <Settings />
                </footer>
            </CollectionProvider>
        </CollectionLayoutProvider>
    );
}
