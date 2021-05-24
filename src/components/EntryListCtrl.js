import React from "react";
import "./collection-list.css";
import { useCollection } from "./../useCollection";
import lang, { nameLangProxy, generalLangProxy } from "./../resources";
import {
    willLeaveThisMonth,
    willLeaveThisHour,
    humanReadableAvailabilityTimes,
} from "./../helpers/availabilityTimeHelpers";
import CheckBox from "./CheckBox";
import { useCurrentMonth, useCurrentHour } from "./../helpers/useCurrentTime";

function formatAvailabilityTimes(months, hours) {
    const formatted = humanReadableAvailabilityTimes(months, hours);
    const ms = formatted
        .filter((rng) => rng.type === "MONTH")
        .map((rng) => rng.text)
        .join(", ");
    const hs = formatted
        .filter((rng) => rng.type === "TIME")
        .map((rng) => rng.text)
        .join(", ");
    return ms + " — " + hs;
}

const clockEmojis = [
    "🕛",
    "🕐",
    "🕑",
    "🕒",
    "🕓",
    "🕔",
    "🕕",
    "🕖",
    "🕗",
    "🕘",
    "🕙",
    "🕚",
];

function BasicEntryCtrl({
    checked,
    onCheckedChanged,
    label,
    sublabel,
    secondary,
    leavingThisMonth,
    leavingThisHour,
}) {
    const currentHour = useCurrentHour();
    const className =
        "entry " + (leavingThisMonth || leavingThisHour ? "leaving" : "");
    return (
        <div className={className}>
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
                {(leavingThisMonth || leavingThisHour) && (
                    <small>
                        {" "}
                        &mdash;{" "}
                        {leavingThisMonth && (
                            <span
                                role="img"
                                title={lang.availability.LEAVING_MONTH}
                                aria-label="Calendar-Emoji">
                                📆
                            </span>
                        )}
                        {leavingThisHour && (
                            <span
                                role="img"
                                title={lang.availability.LEAVING_HOUR}
                                aria-label="Clock-Emoji">
                                {clockEmojis[currentHour % 12]}
                            </span>
                        )}
                    </small>
                )}
            </div>
        </div>
    );
}

function FishInsectCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    const currentMonth = useCurrentMonth();
    const currentHour = useCurrentHour();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            sublabel={`${entry.price || 0} 💰 — ${
                lang.location[entry.availability.location]
            }`}
            secondary={formatAvailabilityTimes(
                entry.availability["month-array-northern"],
                entry.availability["time-array"]
            )}
            leavingThisMonth={willLeaveThisMonth(
                entry.availability["month-array-northern"],
                currentMonth
            )}
            leavingThisHour={willLeaveThisHour(
                entry.availability["time-array"],
                currentHour
            )}
        />
    );
}

function SeaCreatureCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    const currentMonth = useCurrentMonth();
    const currentHour = useCurrentHour();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            sublabel={`${entry.price || 0} 💰`}
            secondary={formatAvailabilityTimes(
                entry.availability["month-array-northern"],
                entry.availability["time-array"]
            )}
            leavingThisMonth={willLeaveThisMonth(
                entry.availability["month-array-northern"],
                currentMonth
            )}
            leavingThisHour={willLeaveThisHour(
                entry.availability["time-array"],
                currentHour
            )}
        />
    );
}

function FossilCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            sublabel={`${entry.price || 0} 💰`}
        />
    );
}

function ArtCtrl({ entry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            secondary={generalLangProxy(entry["fake-info"])}
        />
    );
}

export default function EntryListCtrl({ entry }) {
    switch (entry.type) {
        case "FISH":
        case "BUG":
            return <FishInsectCtrl entry={entry} />;
        case "SEACREATURE":
            return <SeaCreatureCtrl entry={entry} />;
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
