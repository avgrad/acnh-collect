import React from "react";
import "./collection-grid.css";
import CheckBox from "./CheckBox";
import lang, { nameLangProxy, generalLangProxy } from "./../resources";
import { useCollection } from "./../useCollection";
import { useCurrentHour, useCurrentMonth } from "./../helpers/useCurrentTime";
import {
    willLeaveThisMonth,
    willLeaveThisHour,
    humanReadableAvailabilityTimes,
} from "./../helpers/availabilityTimeHelpers";

export default function EntryGridCtrl({
    entry: {
        //id,
        filename,
        type,
        name,
        availability: {
            "month-array-northern": northernMonths,
            "time-array": hours,
            location,
        } = {},
        price,
        image_uri,
        "fake-info": fakeInfo,
    },
}) {
    const { donated, setDonated } = useCollection();
    const isDonated = donated.includes(filename);
    const currentHour = useCurrentHour();
    const currentMonth = useCurrentMonth();
    const leavingThisMonth = willLeaveThisMonth(northernMonths, currentMonth);
    const leavingThisHour = willLeaveThisHour(hours, currentHour);

    return (
        <div className="entry" data-id={filename} data-donated={isDonated}>
            <div className="entry-header">
                <CheckBox
                    checked={isDonated}
                    onChange={(e) =>
                        setDonated(filename, e.currentTarget.checked)
                    }
                />
                <div className="entry-label">{nameLangProxy(name)}</div>
            </div>
            <div className="entry-content">
                <img src={image_uri} alt={nameLangProxy(name)} />
                <div className="entry-additional-info">
                    <span>{lang.entryType[type]}</span>

                    {fakeInfo ? (
                        <span className="hover-only">
                            {generalLangProxy(fakeInfo)}
                        </span>
                    ) : (
                        <>
                            {price && (
                                <span>
                                    {price}{" "}
                                    <span
                                        role="img"
                                        aria-label={lang.general.BELLS}>
                                        💰
                                    </span>
                                </span>
                            )}
                            {location && <span>{lang.location[location]}</span>}

                            {humanReadableAvailabilityTimes(
                                northernMonths,
                                hours,
                                true
                            ).map((availability) => (
                                <span
                                    className={
                                        (leavingThisMonth &&
                                            availability.type === "MONTH") ||
                                        (leavingThisHour &&
                                            availability.type === "TIME")
                                            ? "highlight"
                                            : ""
                                    }>
                                    {availability.text}
                                </span>
                            ))}
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}
