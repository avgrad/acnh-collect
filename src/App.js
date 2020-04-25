import React from "react";
import "./styles.css";
import { useCollection } from "./useCollection";
import useCurrentTime from "./helpers/useCurrentTime";
import lang from "./resources";
import FilterSortCtrl from "./FilterSortCtrl";
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
      <div className="stats">
        <span>
          {lang.entryType.BUG} {collection.stats.bugs.donated} /{" "}
          {collection.stats.bugs.all}
        </span>
        <span className="seperator" />
        <span>
          {lang.entryType.FISH} {collection.stats.fish.donated} /{" "}
          {collection.stats.fish.all}
        </span>
        <span className="seperator" />
        <span>
          {lang.entryType.FOSSIL} {collection.stats.fossils.donated} /{" "}
          {collection.stats.fossils.all}
        </span>
      </div>
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
