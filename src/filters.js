import collectionData, { months } from "./collectionData";

export const filters = {
  collected: "COLLECTED",
  uncollected: "UNCOLLECTED",
  currentTime: "CURRENT_TIME",
  currentMonth: "CURRENT_MONTH",
  showBugs: "SHOW_BUGS",
  showFish: "SHOW_FISH",
  showFossils: "SHOW_FOSSILS",
  showArt: "SHOW_ART"
};

function filterForAvailabilityAtTime(currentDate) {
  return entry => {
    const availableHours = entry.hours;
    const currentHour = currentDate.getHours();
    if (availableHours != null) return availableHours.includes(currentHour);
    return true;
  };
}

function filterForAvailabilityAtMonth(currentDate) {
  return entry => {
    const availableMonths = entry.northernMonths;
    const currentMonth = months[currentDate.getMonth()];
    if (availableMonths != null) return availableMonths.includes(currentMonth);
    return true;
  };
}

export function applyFiltersToData(filterSet, currentTime, donatedItems) {
  let collection = collectionData;

  if (!filterSet.includes(filters.collected))
    collection = collection.filter(entry => !donatedItems.includes(entry.id));

  if (!filterSet.includes(filters.uncollected))
    collection = collection.filter(entry => donatedItems.includes(entry.id));

  if (filterSet.includes(filters.currentTime))
    collection = collection.filter(filterForAvailabilityAtTime(currentTime));

  if (filterSet.includes(filters.currentMonth))
    collection = collection.filter(filterForAvailabilityAtMonth(currentTime));

  if (!filterSet.includes(filters.showBugs))
    collection = collection.filter(entry => entry.type !== "BUG");

  if (!filterSet.includes(filters.showFish))
    collection = collection.filter(entry => entry.type !== "FISH");

  if (!filterSet.includes(filters.showFossils))
    collection = collection.filter(entry => entry.type !== "FOSSIL");

  if (!filterSet.includes(filters.showArt))
    collection = collection.filter(entry => entry.type !== "ART");

  return collection;
}
