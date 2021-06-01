import { nameLangProxy } from "./../resources";
import { Entry } from "./types";

type SortFunction = (a: Entry, b: Entry) => number;

const sortFieldFunctions = {
    NAME: (a: Entry, b: Entry) =>
        ("" + nameLangProxy(a.name)).localeCompare(nameLangProxy(b.name)),
    PRICE: (a: Entry, b: Entry) => (a.price && b.price ? a.price - b.price : 0),
    TYPE: (a: Entry, b: Entry) => ("" + a.type).localeCompare(b.type),
};

export enum SortFields {
    NAME = "NAME",
    PRICE = "PRICE",
    TYPE = "TYPE",
}

const sortDirectionFunctions = {
    ASC: (sortFn: SortFunction) => (a: Entry, b: Entry) => sortFn(a, b),
    DESC: (sortFn: SortFunction) => (a: Entry, b: Entry) => sortFn(b, a),
};

export enum SortDirections {
    ASC = "ASC",
    DESC = "DESC",
}

export function applySortToData(
    filteredList: Entry[],
    selectedSortField: SortFields,
    selectedSortDirection: SortDirections
) {
    const sortFunction = sortFieldFunctions[selectedSortField];
    if (!sortFunction) {
        throw new Error('unsupported sort field "' + selectedSortField + '"');
    }

    const dir = sortDirectionFunctions[selectedSortDirection];
    if (!dir) {
        throw new Error(
            'unsupported sort direction "' + selectedSortDirection + '"'
        );
    }

    const finalSortFn = dir(sortFunction);
    return filteredList.sort(finalSortFn);
}
