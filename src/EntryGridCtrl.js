import React from "react";
import CheckBox from "./CheckBox";
import lang, { generalLangProxy } from "./resources";
import { useCollection } from "./useCollection";
import {
    getTimeRanges,
    getMonthRanges,
    willLeaveThisMonth,
    willLeaveThisHour,
} from "./helpers/availabilityTimeHelpers";

// duplicate from EntryCtrl.js (but changed)
function formatAvailabilityTimes(months, hours) {
    const ms = getMonthRanges(months).map((rng) =>
        rng.allYear
            ? lang.availability.ALL_YEAR
            : rng.from === rng.to
            ? lang.availability[rng.from]
            : lang.availability[rng.from] +
              " " +
              lang.availability.TO +
              " " +
              lang.availability[rng.to]
    );
    const hs = getTimeRanges(hours).map((rng) =>
        rng.allDay
            ? lang.availability.ALL_DAY
            : rng.from + "-" + rng.to + " " + lang.availability.CLOCK
    );

    if (ms && hs) return ms.concat(hs);

    return ms || hs;
}

export default function EntryGridCtrl({
    id,
    type,
    name,
    img = "https://acnhapi.com/v1/images/fish/" +
        Math.floor(1 + Math.random() * 80),
    price,
    location,
    hours,
    northernMonths,
    fakeInfo,
}) {
    const { donated, setDonated } = useCollection();

    return (
        <div className="collection-grid-entry" data-id={id}>
            <div className="collection-grid-entry-header">
                <CheckBox
                    checked={donated.includes(id)}
                    onChange={(e) => setDonated(id, e.currentTarget.checked)}
                />
                <div className="entry-label">{generalLangProxy(name)}</div>
            </div>
            <div className="collection-grid-entry-content">
                <img src={img} alt={generalLangProxy(name)} />
                <div className="collection-grid-entry-additional-info">
                    <span>{lang.entryType[type]}</span>

                    {fakeInfo ? (
                        <span
                            className={Math.random() < 0.4 ? "hover-only" : ""}>
                            {generalLangProxy(fakeInfo)}
                        </span>
                    ) : (
                        <>
                            {price && (
                                <span>
                                    {price}{" "}
                                    <span
                                        role="img"
                                        aria-label="Sternis // TODO translate">
                                        💰
                                    </span>
                                </span>
                            )}
                            {location && <span>{lang.location[location]}</span>}

                            {formatAvailabilityTimes(northernMonths, hours).map(
                                (h) => (
                                    <span
                                        className={
                                            Math.random() < 0.5
                                                ? "highlight"
                                                : ""
                                        }>
                                        {h}
                                    </span>
                                )
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
