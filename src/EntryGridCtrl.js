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

// duplicate with EntryCtrl.js
function formatAvailabilityTimes(months, hours) {
    const ms = getMonthRanges(months)
        .map((rng) =>
            rng.allYear
                ? lang.availability.ALL_YEAR
                : rng.from === rng.to
                ? lang.availability[rng.from]
                : lang.availability[rng.from] +
                  " " +
                  lang.availability.TO +
                  " " +
                  lang.availability[rng.to]
        )
        .join(", ");
    const hs = getTimeRanges(hours)
        .map((rng) =>
            rng.allDay
                ? lang.availability.ALL_DAY
                : rng.from + "-" + rng.to + " " + lang.availability.CLOCK
        )
        .join(", ");

    if (hs && ms) return ms + " — " + hs;

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
                    label={generalLangProxy(name)}
                />
            </div>
            <div
                className="collection-grid-entry-content"
                style={{ backgroundImage: "url(" + img + ")" }}>
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
                                    <span role="img" aria-label="Sternis">
                                        💰
                                    </span>
                                </span>
                            )}
                            {location && <span>{lang.location[location]}</span>}

                            {hours && (
                                <span
                                    className={
                                        Math.random() < 0.5 ? "highlight" : ""
                                    }>
                                    {formatAvailabilityTimes(null, hours)}
                                </span>
                            )}
                            {northernMonths && (
                                <span
                                    className={
                                        Math.random() < 0.5 ? "highlight" : ""
                                    }>
                                    {formatAvailabilityTimes(northernMonths)}
                                </span>
                            )}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
