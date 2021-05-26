import React, { createContext, useContext, useMemo } from "react";
import { useCurrentMonth, useCurrentHour } from "./helpers/useCurrentTime";
import { applyFiltersToData, filters } from "./data/filters";
import { applySortToData } from "./data/sort";
import useFilter from "./data/useFilter";
import useSort from "./data/useSort";
import useDonationStorage from "./useDonationStorage";
import useAcnhResource from "./data/useAcnhResource";

const defaultFilters = [
    filters.showBugs,
    filters.showFish,
    filters.showSeaCreatures,
    filters.collected,
    filters.uncollected,
    filters.currentMonth,
    filters.currentTime,
];

const AppContext = createContext();

export const useCollection = () => {
    return useContext(AppContext);
};

export const Provider = ({ children }) => {
    const currentMonth = useCurrentMonth();
    const currentHour = useCurrentHour();
    const [activeFilterSet, setFilter] = useFilter(defaultFilters);
    const sort = useSort("NAME", "ASC");

    const [fish, fishLoading] = useAcnhResource(
        "FISH",
        activeFilterSet.includes(filters.showFish)
    );
    const [bugs, bugsLoading] = useAcnhResource(
        "BUG",
        activeFilterSet.includes(filters.showBugs)
    );
    const [fossils, fossilsLoading] = useAcnhResource(
        "FOSSIL",
        activeFilterSet.includes(filters.showFossils)
    );
    const [seaCreatures, seaCreaturesLoading] = useAcnhResource(
        "SEACREATURE",
        activeFilterSet.includes(filters.showSeaCreatures)
    );
    const [art, artLoading] = useAcnhResource(
        "ART",
        activeFilterSet.includes(filters.showArt)
    );
    const [songs, songsLoading] = useAcnhResource(
        "SONG",
        activeFilterSet.includes(filters.showSongs)
    );

    const collectionData = useMemo(
        () => [...fish, ...bugs, ...fossils, ...seaCreatures, ...art, ...songs],
        [fish, bugs, fossils, seaCreatures, art, songs]
    );

    const [donated, setDonated] = useDonationStorage();
    const filteredCollection = useMemo(
        () =>
            applyFiltersToData(
                collectionData,
                activeFilterSet,
                currentMonth,
                currentHour,
                donated
            ),
        [collectionData, activeFilterSet, currentMonth, currentHour, donated]
    );

    const displayedCollection = useMemo(
        () => applySortToData(filteredCollection, sort.field, sort.direction),
        [filteredCollection, sort.field, sort.direction]
    );

    const stats = useMemo(
        () => ({
            bugs: {
                donated: donated.filter((d) =>
                    bugs.find((b) => b.filename === d)
                ).length,
                all: bugs.length,
            },
            fish: {
                donated: donated.filter((d) =>
                    fish.find((f) => f.filename === d)
                ).length,
                all: fish.length,
            },
            seaCreatures: {
                donated: donated.filter((d) =>
                    seaCreatures.find((s) => s.filename === d)
                ).length,
                all: seaCreatures.length,
            },
            fossils: {
                donated: donated.filter((d) =>
                    fossils.find((f) => f.filename === d)
                ).length,
                all: fossils.length,
            },
            art: {
                donated: donated.filter((d) =>
                    art.find((a) => a.filename === d)
                ).length,
                all: art.length,
            },
            songs: {
                donated: donated.filter((d) =>
                    songs.find((s) => s.filename === d)
                ).length,
                all: songs.length,
            },
        }),
        [donated, bugs, fish, seaCreatures, fossils, art, songs]
    );

    const store = {
        displayedCollection,
        activeFilterSet,
        setFilter,
        sort,
        donated,
        setDonated,
        stats,
    };

    return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
