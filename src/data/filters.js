export const filters = {
    collected: "COLLECTED",
    uncollected: "UNCOLLECTED",
    currentTime: "CURRENT_TIME",
    currentMonth: "CURRENT_MONTH",
    showBugs: "SHOW_BUGS",
    showFish: "SHOW_FISH",
    showSeaCreatures: "SHOW_SEACREATURES",
    showFossils: "SHOW_FOSSILS",
    showArt: "SHOW_ART",
};

function filterForAvailabilityAtTime(currentHour) {
    return (entry) => {
        const availableHours = entry.availability?.hours;
        if (availableHours != null) return availableHours.includes(currentHour);
        return true;
    };
}

function filterForAvailabilityAtMonth(currentMonth) {
    return (entry) => {
        const availableMonths = entry.availability?.months_northern;
        if (availableMonths != null)
            return availableMonths.includes(currentMonth);
        return true;
    };
}

export function applyFiltersToData(
    collectionData,
    filterSet,
    currentMonth,
    currentHour,
    donatedItems
) {
    let collection = collectionData;

    if (!filterSet.includes(filters.collected))
        collection = collection.filter(
            (entry) => !donatedItems.includes(entry.filename)
        );

    if (!filterSet.includes(filters.uncollected))
        collection = collection.filter((entry) =>
            donatedItems.includes(entry.filename)
        );

    if (filterSet.includes(filters.currentTime))
        collection = collection.filter(
            filterForAvailabilityAtTime(currentHour)
        );

    if (filterSet.includes(filters.currentMonth))
        collection = collection.filter(
            filterForAvailabilityAtMonth(currentMonth)
        );

    if (!filterSet.includes(filters.showBugs))
        collection = collection.filter((entry) => entry.type !== "BUG");

    if (!filterSet.includes(filters.showFish))
        collection = collection.filter((entry) => entry.type !== "FISH");

    if (!filterSet.includes(filters.showSeaCreatures))
        collection = collection.filter((entry) => entry.type !== "SEACREATURE");

    if (!filterSet.includes(filters.showFossils))
        collection = collection.filter((entry) => entry.type !== "FOSSIL");

    if (!filterSet.includes(filters.showArt))
        collection = collection.filter((entry) => entry.type !== "ART");

    return collection;
}
