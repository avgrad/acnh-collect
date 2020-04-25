import React from "react";
import "./styles.css";
import { useCollection } from "./useCollection";
import useCurrentTime from "./helpers/useCurrentTime";
import FilterSortCtrl from "./FilterSortCtrl";
import StatsCtrl from "./StatsCtrl";
import EntryCtrl from "./EntryCtrl";

export default function App() {
  const collection = useCollection();
  const currentTime = useCurrentTime();
  return (
    <React.Fragment>
      <h1>Animal Crossing: New Horizons</h1>
      <h2>{currentTime.toLocaleString()}</h2>
      <FilterSortCtrl />
      <hr />
      <StatsCtrl />
      <hr />
      <div className="collection-list">
        {collection.displayedCollection.map(entry => (
          <EntryCtrl entry={entry} />
        ))}
      </div>
      <footer>
        Source on <a href="https://github.com/sydeslyde/acnh-collect" target="_blank" rel="noopener noreferrer">GitHub</a> &mdash; Hosting via GitHub Pages &mdash; Version {process.env.REACT_APP_VERSION}
      </footer>
    </React.Fragment>
  );
}
