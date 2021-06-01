import { useReducer, useCallback } from "react";
import { Filters } from "./filters";

type FilterAction = { type: "SET_FILTER"; key: Filters; active: boolean };

export default function useFilter(
    defaultFilterSet: Filters[]
): [Filters[], (key: Filters, active: boolean) => void] {
    const [activeFilters, dispatch] = useReducer(
        (state: Filters[], action: FilterAction) => {
            switch (action.type) {
                case "SET_FILTER":
                    const idx = state.indexOf(action.key);
                    if (idx === -1 && action.active === true)
                        return [...state, action.key];
                    else if (idx !== -1 && action.active === false) {
                        const newState = [...state];
                        newState.splice(idx, 1);
                        return newState;
                    }
                    return state;
                default:
                    return state;
            }
        },
        defaultFilterSet
    );

    const setFilter = useCallback(
        (key, active) => dispatch({ type: "SET_FILTER", key, active }),
        [dispatch]
    );

    return [activeFilters, setFilter];
}
