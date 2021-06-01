import { useState } from "react";
import { SortDirections, SortFields } from "./sort";

export default function useSort(
    defaultSortField: SortFields,
    defaultSortDirection: SortDirections = SortDirections.ASC
) {
    const [field, setField] = useState(defaultSortField);
    const [direction, setDirection] = useState(defaultSortDirection);

    return {
        field,
        setField,
        direction,
        setDirection,
    };
}
