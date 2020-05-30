import React, { createContext, useContext, useMemo } from "react";
import collectionData from "./collectionData";
import useCurrentTime from "./helpers/useCurrentTime";
import { applyFiltersToData, filters } from "./filters";
import { applySortToData } from "./sort";
import useFilter from "./useFilter";
import useSort from "./useSort";
import useDonationStorage from "./useDonationStorage";

const defaultFilters = [
  filters.showBugs,
  filters.showFish,
  filters.collected,
  filters.uncollected,
  filters.currentMonth,
  filters.currentTime
];

const AppContext = createContext();

export const useCollection = () => {
  return useContext(AppContext);
};

export const Provider = ({ children }) => {
  const currentTime = useCurrentTime();
  const [activeFilterSet, setFilter] = useFilter(defaultFilters);
  const sort = useSort("NAME", "ASC");
  const [donated, setDonated] = useDonationStorage();
  const filteredCollection = applyFiltersToData( // TODO memoize based on day and hour
    activeFilterSet,
    currentTime,
    donated
  );
  const displayedCollection = useMemo(() => applySortToData(filteredCollection, sort.field, sort.direction), [filteredCollection, sort.field, sort.direction]);

  const bugs = useMemo(() => collectionData.filter(e => e.type === "BUG"), []);
  const fish = useMemo(() => collectionData.filter(e => e.type === "FISH"), []);
  const fossils = useMemo(() => collectionData.filter(e => e.type === "FOSSIL"), []);
  const art = useMemo(() => collectionData.filter(e => e.type === "ART"), []);
  const stats = useMemo(() => ({
    bugs: {
      donated: donated.filter(d => bugs.find(b => b.id === d)).length,
      all: bugs.length
    },
    fish: {
      donated: donated.filter(d => fish.find(f => f.id === d)).length,
      all: fish.length
    },
    fossils: {
      donated: donated.filter(d => fossils.find(f => f.id === d)).length,
      all: fossils.length
    },
    art: {
      donated: donated.filter(d => art.find(a => a.id === d)).length,
      all: art.length
    }
  }), [donated, bugs, fish, fossils, art]);

  const store = {
    displayedCollection,
    activeFilterSet,
    setFilter,
    sort,
    donated,
    setDonated,
    stats
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
