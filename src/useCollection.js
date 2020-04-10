import React, { createContext, useContext } from "react";
import collectionData from "./collectionData";
import useCurrentTime from "./helpers/useCurrentTime";
import { applyFiltersToData, filters } from "./filters";
import useFilter from "./useFilter";
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
  const [donated, setDonated] = useDonationStorage();
  const filteredCollection = applyFiltersToData(
    activeFilterSet,
    currentTime,
    donated
  );

  const bugs = collectionData.filter(e => e.type === "BUG");
  const fish = collectionData.filter(e => e.type === "FISH");
  const fossils = collectionData.filter(e => e.type === "FOSSIL");
  const stats = {
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
    currentFilter: filteredCollection.length
  };

  const store = {
    filteredCollection,
    activeFilterSet,
    setFilter,
    donated,
    setDonated,
    stats
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};
