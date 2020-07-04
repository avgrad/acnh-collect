import React from "react";
import { useCollection } from "./useCollection";
import lang, { generalLangProxy } from "./resources";
import {
    getTimeRanges,
    getMonthRanges,
} from "./helpers/availabilityTimeHelpers";
import CheckBox from "./CheckBox";

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

    return ms + " — " + hs;
}

function BasicEntryCtrl({
    checked,
    onCheckedChanged,
    label,
    sublabel,
    secondary,
}) {
    return (
        <div className="entry">
            <CheckBox
                checked={checked}
                onChange={(e) => onCheckedChanged(e.currentTarget.checked)}
            />
            <div className="entry-label">
                {label}
                {sublabel && <small> &mdash; {sublabel}</small>}
                {secondary && (
                    <small className="secondary"> &mdash; {secondary}</small>
                )}
            </div>
        </div>
    );
}

function FishInsectCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.id)}
            onCheckedChanged={(d) => setDonated(entry.id, d)}
            label={
                lang.entryType[entry.type] + " " + generalLangProxy(entry.name)
            }
            sublabel={`${entry.price || 0} 💰 — ${
                lang.location[entry.location]
            }`}
            secondary={formatAvailabilityTimes(
                entry.northernMonths,
                entry.hours
            )}
        />
    );
}

function FossilCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.id)}
            onCheckedChanged={(d) => setDonated(entry.id, d)}
            label={
                lang.entryType[entry.type] + " " + generalLangProxy(entry.name)
            }
            sublabel={`${entry.price || 0} 💰`}
        />
    );
}

function ArtCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.id)}
            onCheckedChanged={(d) => setDonated(entry.id, d)}
            label={
                lang.entryType[entry.type] + " " + generalLangProxy(entry.name)
            }
            secondary={generalLangProxy(entry.fakeInfo)}
        />
    );
}

export default function EntryCtrl({ entry }) {
    switch (entry.type) {
        case "FISH":
        case "BUG":
            return <FishInsectCtrl entry={entry} />;
        case "FOSSIL":
            return <FossilCtrl entry={entry} />;
        case "ART":
            return <ArtCtrl entry={entry} />;
        default:
            return (
                <div style={{ backgroundColor: "red" }}>
                    ERROR: ENTRY TYPE "{entry.type}" HAS NO COMPONENT DEFINED
                </div>
            );
    }
}
