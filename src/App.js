import React from "react";
import "./styles.css";
import "./checkboxStyles.css";
import { useCollection } from "./useCollection";
import { filters } from "./filters";
import FilterCheckbox from "./FilterCheckbox";
import useCurrentTime from "./helpers/useCurrentTime";
import lang, { nameProxy } from "./resources";
import ExpansionPanel from "./ExpansionPanel";

export default function App() {
  const collection = useCollection();
  const currentTime = useCurrentTime();
  return (
    <React.Fragment>
      <h1>Animal Crossing: New Horizons</h1>
      <h2>{currentTime.toLocaleString()}</h2>
      <ExpansionPanel label={lang.filter.FILTER_SETTINGS}>
        <div className="filters">
          <div>
            <FilterCheckbox filter={filters.showBugs} />
            <FilterCheckbox filter={filters.showFish} />
            <FilterCheckbox filter={filters.showFossils} />
          </div>
          <div>
            <FilterCheckbox filter={filters.collected} />
            <FilterCheckbox filter={filters.uncollected} />
          </div>
          <div>
            <FilterCheckbox filter={filters.currentTime} />
            <FilterCheckbox filter={filters.currentMonth} />
          </div>
        </div>
      </ExpansionPanel>
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
          <div key={entry.id} className="entry">
            <label className="checkbox">
              <input
                type="checkbox"
                checked={collection.donated.includes(entry.id)}
                onChange={e =>
                  collection.setDonated(entry.id, e.currentTarget.checked)
                }
              />
              &nbsp;
              <span className="checkmark" />
            </label>
            <div className="entry-label">
              {lang.entryType[entry.type]} {nameProxy(entry.name)} -{" "}
              <small>
                {entry.price || 0}💰{" "}
                {entry.type !== "FOSSIL" &&
                  "- " + lang.location[entry.location]}
              </small>
            </div>
          </div>
        ))}
      </div>
      <footer>
        Source on <a href="https://github.com/sydeslyde/acnh-collect" target="_blank" rel="noopener noreferrer">GitHub</a> &mdash; Hosting via GitHub Pages &mdash; Version {process.env.REACT_APP_VERSION}
      </footer>
    </React.Fragment>
  );
}
