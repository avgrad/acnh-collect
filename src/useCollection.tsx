import React, { createContext, useContext, useMemo } from "react";
import { useCurrentMonth, useCurrentHour } from "./helpers/useCurrentTime";
import { applyFiltersToData, Filters } from "./data/filters";
import { applySortToData, SortDirections, SortFields } from "./data/sort";
import useFilter from "./data/useFilter";
import useSort from "./data/useSort";
import useDonationStorage from "./useDonationStorage";
import useAcnhResource from "./data/useAcnhResource";
import { Entry, EntryType, Filename } from "./data/types";

const defaultFilters = [
    Filters.showBugs,
    Filters.showFish,
    Filters.showSeaCreatures,
    Filters.collected,
    Filters.uncollected,
    Filters.currentMonth,
    Filters.currentTime,
];

export type Stat = {
    donated: number;
    all: number;
};

export type Stats = {
    bugs: Stat;
    fish: Stat;
    seaCreatures: Stat;
    fossils: Stat;
    art: Stat;
    songs: Stat;
};

export type CollectionData = {
    displayedCollection: Entry[];
    activeFilterSet: Filters[];
    setFilter: (filter: Filters, active: boolean) => void;
    sort: {
        field: SortFields;
        setField: React.Dispatch<React.SetStateAction<SortFields>>;
        direction: SortDirections;
        setDirection: (direction: SortDirections) => void;
    };
    donated: Filename[];
    setDonated: (filename: Filename, donated: boolean) => void;
    stats: Stats;
};

const AppContext = createContext<CollectionData>(
    null as unknown as CollectionData // TODO FIXME
);

export const useCollection = () => {
    return useContext(AppContext);
};

export const Provider = ({ children }: { children: React.ReactNode }) => {
    const currentMonth = useCurrentMonth();
    const currentHour = useCurrentHour();
    const [activeFilterSet, setFilter] = useFilter(defaultFilters);
    const sort = useSort(SortFields.NAME, SortDirections.ASC);

    const [fish, fishLoading] = useAcnhResource(
        EntryType.FISH,
        activeFilterSet.includes(Filters.showFish)
    );
    const [bugs, bugsLoading] = useAcnhResource(
        EntryType.BUG,
        activeFilterSet.includes(Filters.showBugs)
    );
    const [fossils, fossilsLoading] = useAcnhResource(
        EntryType.FOSSIL,
        activeFilterSet.includes(Filters.showFossils)
    );
    const [seaCreatures, seaCreaturesLoading] = useAcnhResource(
        EntryType.SEACREATURE,
        activeFilterSet.includes(Filters.showSeaCreatures)
    );
    const [art, artLoading] = useAcnhResource(
        EntryType.ART,
        activeFilterSet.includes(Filters.showArt)
    );
    const [songs, songsLoading] = useAcnhResource(
        EntryType.SONG,
        activeFilterSet.includes(Filters.showSongs)
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

    const stats = useMemo<Stats>(
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
