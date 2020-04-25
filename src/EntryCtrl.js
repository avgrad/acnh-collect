import React from "react";
import { useCollection } from "./useCollection";
import lang, { nameProxy } from "./resources";
import { getTimeRanges, getMonthRanges } from "./helpers/availabilityTimeHelpers";
import CheckBox from "./CheckBox";

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

export default function EntryCtrl({ entry, ...rest }) {
  const { donated, setDonated } = useCollection();
  return (
    <div key={entry.id} className="entry">
      <CheckBox checked={donated.includes(entry.id)}
        onChange={e => setDonated(entry.id, e.currentTarget.checked)} />
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
  );
}
