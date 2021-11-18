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
import {
    ArtEntry,
    BugEntry,
    Entry,
    EntryType,
    FishEntry,
    FossilEntry,
    GyroidEntry,
    Hour,
    MonthNumber,
    SeaCreatureEntry,
    SongEntry,
} from "../data/types";

function formatAvailabilityTimes(months: MonthNumber[], hours: Hour[]) {
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
}: {
    checked?: boolean;
    onCheckedChanged?: (c: boolean) => void;
    label?: string;
    sublabel?: string;
    secondary?: string;
    leavingThisMonth?: boolean;
    leavingThisHour?: boolean;
}) {
    const currentHour = useCurrentHour();
    const className =
        "entry " + (leavingThisMonth || leavingThisHour ? "leaving" : "");
    return (
        <div className={className}>
            <CheckBox
                checked={checked}
                onChange={(e) => onCheckedChanged?.(e.currentTarget.checked)}
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

function FishInsectCtrl({ entry }: { entry: FishEntry | BugEntry }) {
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
                entry.availability.months_northern,
                entry.availability.hours
            )}
            leavingThisMonth={willLeaveThisMonth(
                entry.availability.months_northern,
                currentMonth
            )}
            leavingThisHour={willLeaveThisHour(
                entry.availability.hours,
                currentHour
            )}
        />
    );
}

function SeaCreatureCtrl({ entry }: { entry: SeaCreatureEntry }) {
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
                entry.availability.months_northern,
                entry.availability.hours
            )}
            leavingThisMonth={willLeaveThisMonth(
                entry.availability.months_northern,
                currentMonth
            )}
            leavingThisHour={willLeaveThisHour(
                entry.availability.hours,
                currentHour
            )}
        />
    );
}

function FossilCtrl({ entry }: { entry: FossilEntry }) {
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

function ArtCtrl({ entry }: { entry: ArtEntry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            secondary={generalLangProxy(entry.fake_info)}
        />
    );
}

function SongCtrl({ entry }: { entry: SongEntry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            sublabel={!entry.isOrderable ? lang.general.NOT_ORDERABLE : ""}
        />
    );
}

function GyroidCtrl({ entry }: { entry: GyroidEntry }) {
    const { donated, setDonated } = useCollection();
    return (
        <BasicEntryCtrl
            checked={donated.includes(entry.filename)}
            onCheckedChanged={(d) => setDonated(entry.filename, d)}
            label={lang.entryType[entry.type] + " " + nameLangProxy(entry.name)}
            sublabel={entry.info ? generalLangProxy(entry.info) : ""}
        />
    );
}

export default function EntryListCtrl({ entry }: { entry: Entry }) {
    const et = entry.type;
    switch (entry.type) {
        case EntryType.FISH:
        case EntryType.BUG:
            return <FishInsectCtrl entry={entry} />;
        case EntryType.SEACREATURE:
            return <SeaCreatureCtrl entry={entry} />;
        case EntryType.FOSSIL:
            return <FossilCtrl entry={entry} />;
        case EntryType.ART:
            return <ArtCtrl entry={entry} />;
        case EntryType.SONG:
            return <SongCtrl entry={entry} />;
        case EntryType.GYROID:
            return <GyroidCtrl entry={entry} />;
        default:
            const exhaustiveCheck: never = entry;
            return (
                <div style={{ backgroundColor: "red" }}>
                    ERROR: ENTRY TYPE "{et}" HAS NO COMPONENT DEFINED{" "}
                    {exhaustiveCheck}
                </div>
            );
    }
}
