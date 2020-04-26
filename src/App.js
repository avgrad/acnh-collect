import React from "react";
import "./styles.css";
import { Provider as CollectionProvider } from "./useCollection";
import useCurrentTime from "./helpers/useCurrentTime";
import FilterSortCtrl from "./FilterSortCtrl";
import StatsCtrl from "./StatsCtrl";
import ListDisplayCtrl from "./ListDisplayCtrl";

export default function App() {
  const currentTime = useCurrentTime();
  return (
    <CollectionProvider>
      <h1>Animal Crossing: New Horizons</h1>
      <h2>{currentTime.toLocaleString()}</h2>
      <FilterSortCtrl />
      <hr />
      <StatsCtrl />
      <hr />
      <ListDisplayCtrl />
      <footer>
        Source on <a href="https://github.com/sydeslyde/acnh-collect" target="_blank" rel="noopener noreferrer">GitHub</a> &mdash; Hosting via GitHub Pages &mdash; Version {process.env.REACT_APP_VERSION}
      </footer>
    </CollectionProvider>
  );
}
