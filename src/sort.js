import { nameProxy } from "./resources";

const sortFunctions = {
  NAME: (a, b) => ("" + nameProxy(a.name)).localeCompare(nameProxy(b.name)),
  PRICE: (a, b) => a.price - b.price,
  TYPE: (a, b) => ("" + a.type).localeCompare(b.type)
};

export const sortFields = Object.keys(sortFunctions);

const sortDirectionFunctions = {
  ASC: (sortFn) => (a, b) => sortFn(a, b),
  DESC: (sortFn) => (a, b) => sortFn(b, a)
};

export const sortDirections = Object.keys(sortDirectionFunctions);

export function applySortToData(filteredList, selectedSortField, selectedSortDirection) {
  const sortFunction = sortFunctions[selectedSortField];
  if (!sortFunction) {
    throw new Error("unsupported sort field \"" + selectedSortField + "\"");
  }

  const dir = sortDirectionFunctions[selectedSortDirection];
  if (!dir) {
    throw new Error("unsupported sort direction \"" + selectedSortDirection + "\"");
  }

  const finalSortFn = dir(sortFunction);
  return filteredList.sort(finalSortFn);
}
