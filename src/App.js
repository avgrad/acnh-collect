import React from "react";
import "./styles.css";
import { useCollection } from "./useCollection";
import { filters } from "./filters";
import { sortFields, sortDirections } from "./sort";
import FilterCheckbox from "./FilterCheckbox";
import useCurrentTime from "./helpers/useCurrentTime";
import { getTimeRanges, getMonthRanges } from "./helpers/availabilityTimeHelpers";
import lang, { nameProxy } from "./resources";
import ExpansionPanel from "./ExpansionPanel";
import CheckBox from "./CheckBox";
import RadioSelect from "./RadioSelect";

function formatAvailabilityTimes(months, hours) {
  const ms = getMonthRanges(months)
    .map(rng => rng.allYear
      ? lang.availability.ALL_YEAR
      : rng.from === rng.to
        ? lang.availability[rng.from]
        : lang.availability[rng.from] + " " + lang.availability.TO + " " + lang.availability[rng.to]
    ).join(", ");
  const hs = getTimeRanges(hours)
    .map(rng => rng.allDay
      ? lang.availability.ALL_DAY
      : rng.from + "-" + rng.to + " " + lang.availability.CLOCK
    ).join(", ");

  return ms + " — " + hs;
}

export default function App() {
  const collection = useCollection();
  const currentTime = useCurrentTime();
  return (
    <React.Fragment>
      <h1>Animal Crossing: New Horizons</h1>
      <h2>{currentTime.toLocaleString()}</h2>
      <ExpansionPanel label={lang.general.FILTER_SORT}>
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
        <div className="sort">
          <RadioSelect
            name="sort-field"
            values={sortFields}
            labelSource={lang.sort}
            selectedValue={collection.sort.field}
            onChange={v => collection.sort.setField(v)}
          />
          <RadioSelect
            name="sort-direction"
            values={sortDirections}
            labelSource={lang.sort}
            selectedValue={collection.sort.direction}
            onChange={v => collection.sort.setDirection(v)}
          />
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
            <CheckBox checked={collection.donated.includes(entry.id)}
              onChange={e => collection.setDonated(entry.id, e.currentTarget.checked)} />
            <div className="entry-label">
              {lang.entryType[entry.type]} {nameProxy(entry.name)}
              <small>
                {" "}&mdash;{" "}
                {entry.price || 0}💰{" "}
                {entry.type !== "FOSSIL" && (<span>&mdash; {lang.location[entry.location]}</span>)}
              </small>
              {entry.type !== "FOSSIL" && (<small className="secondary"> &mdash; {formatAvailabilityTimes(entry.northernMonths, entry.hours)}</small>)}
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
