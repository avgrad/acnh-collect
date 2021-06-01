import { Entry, EntryType, Filename, Hour, MonthNumber } from "./types";

export enum Filters {
    collected = "COLLECTED",
    uncollected = "UNCOLLECTED",
    currentTime = "CURRENT_TIME",
    currentMonth = "CURRENT_MONTH",
    showBugs = "SHOW_BUGS",
    showFish = "SHOW_FISH",
    showSeaCreatures = "SHOW_SEACREATURES",
    showFossils = "SHOW_FOSSILS",
    showArt = "SHOW_ART",
    showSongs = "SHOW_SONGS",
}

function filterForAvailabilityAtTime(currentHour: Hour) {
    return (entry: Entry) => {
        const availableHours = entry.availability?.hours;
        if (availableHours != null) return availableHours.includes(currentHour);
        return true;
    };
}

function filterForAvailabilityAtMonth(currentMonth: MonthNumber) {
    return (entry: Entry) => {
        const availableMonths = entry.availability?.months_northern;
        if (availableMonths != null)
            return availableMonths.includes(currentMonth);
        return true;
    };
}

export function applyFiltersToData(
    collectionData: Entry[],
    filterSet: Filters[],
    currentMonth: MonthNumber,
    currentHour: Hour,
    donatedItems: Filename[]
) {
    let collection = collectionData;

    if (!filterSet.includes(Filters.collected))
        collection = collection.filter(
            (entry) => !donatedItems.includes(entry.filename)
        );

    if (!filterSet.includes(Filters.uncollected))
        collection = collection.filter((entry) =>
            donatedItems.includes(entry.filename)
        );

    if (filterSet.includes(Filters.currentTime))
        collection = collection.filter(
            filterForAvailabilityAtTime(currentHour)
        );

    if (filterSet.includes(Filters.currentMonth))
        collection = collection.filter(
            filterForAvailabilityAtMonth(currentMonth)
        );

    if (!filterSet.includes(Filters.showBugs))
        collection = collection.filter((entry) => entry.type !== EntryType.BUG);

    if (!filterSet.includes(Filters.showFish))
        collection = collection.filter(
            (entry) => entry.type !== EntryType.FISH
        );

    if (!filterSet.includes(Filters.showSeaCreatures))
        collection = collection.filter(
            (entry) => entry.type !== EntryType.SEACREATURE
        );

    if (!filterSet.includes(Filters.showFossils))
        collection = collection.filter(
            (entry) => entry.type !== EntryType.FOSSIL
        );

    if (!filterSet.includes(Filters.showArt))
        collection = collection.filter((entry) => entry.type !== EntryType.ART);

    if (!filterSet.includes(Filters.showSongs))
        collection = collection.filter(
            (entry) => entry.type !== EntryType.SONG
        );

    return collection;
}
