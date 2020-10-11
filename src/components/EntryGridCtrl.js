import React from "react";
import "./collection-grid.css";
import CheckBox from "./CheckBox";
import lang, { generalLangProxy } from "./../resources";
import { useCollection } from "./../useCollection";
import { useCurrentHour, useCurrentMonth } from "./../helpers/useCurrentTime";
import {
    willLeaveThisMonth,
    willLeaveThisHour,
    humanReadableAvailabilityTimes,
} from "./../helpers/availabilityTimeHelpers";
import { mappingIdToFilename } from "./../data/collectionDataAcnhApiMapping";

export default function EntryGridCtrl({
    entry: {
        id,
        type,
        name,
        //img = "https://acnhapi.com/v1/images/fish/7",
        price,
        location,
        hours,
        northernMonths,
        fakeInfo,
    },
}) {
    const { donated, setDonated } = useCollection();
    const isDonated = donated.includes(id);
    const currentHour = useCurrentHour();
    const currentMonth = useCurrentMonth();
    const leavingThisMonth = willLeaveThisMonth(northernMonths, currentMonth);
    const leavingThisHour = willLeaveThisHour(hours, currentHour);
    const apiType = {
        BUG: "bugs", // 600x600
        FISH: "fish", // 1024x512
        SEACREATURE: "sea", // 640x640
        FOSSIL: "fossils", // 128x128
        ART: "art", // 128x128
    }[type];
    const fileName = mappingIdToFilename[id] || id;
    const img = "https://acnhapi.com/v1/images/" + apiType + "/" + fileName;

    return (
        <div className="entry" data-id={id} data-donated={isDonated}>
            <div className="entry-header">
                <CheckBox
                    checked={isDonated}
                    onChange={(e) => setDonated(id, e.currentTarget.checked)}
                />
                <div className="entry-label">{generalLangProxy(name)}</div>
            </div>
            <div className="entry-content">
                <img src={img} alt={generalLangProxy(name)} />
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
