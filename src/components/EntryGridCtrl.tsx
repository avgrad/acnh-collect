import React from "react";
import { motion } from "framer-motion";
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
import { Entry, EntryType } from "../data/types";

export default function EntryGridCtrl({
    entry: {
        //id,
        filename,
        type,
        name,
        availability: { months_northern, hours, location } = {},
        price,
        image_uri,
        isOrderable,
        fake_info,
        info,
    },
}: {
    entry: Entry;
}) {
    const { donated, setDonated } = useCollection();
    const isDonated = donated.includes(filename);
    const currentHour = useCurrentHour();
    const currentMonth = useCurrentMonth();
    const leavingThisMonth = willLeaveThisMonth(months_northern, currentMonth);
    const leavingThisHour = willLeaveThisHour(hours, currentHour);

    return (
        <motion.div
            className="entry"
            data-id={filename}
            layout
            key={filename}
            initial={{
                opacity: 0,
                scale: 0.1,
            }}
            animate={{
                opacity: 1,
                scale: 1,
            }}
            exit={{
                opacity: 0,
                scale: 0.1,
            }}
            data-donated={isDonated}>
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
                <img src={image_uri} alt={nameLangProxy(name)} loading="lazy" />
                <div className="entry-additional-info">
                    <span>{lang.entryType[type]}</span>

                    {fake_info ? (
                        <span className="hover-only">
                            {generalLangProxy(fake_info)}
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
                            {type === EntryType.SONG && !isOrderable && (
                                <span>{lang.general.NOT_ORDERABLE}</span>
                            )}
                            {type === EntryType.GYROID && info && (
                                <span>{generalLangProxy(info)}</span>
                            )}

                            {humanReadableAvailabilityTimes(
                                months_northern,
                                hours,
                                true
                            ).map((availability) => (
                                <span
                                    key={availability.text}
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
        </motion.div>
    );
}
