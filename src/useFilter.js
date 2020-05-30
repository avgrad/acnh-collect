import { useReducer, useCallback } from "react";

export default function useFilter(defaultFilterSet) {
  const [activeFilters, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case "SET_FILTER":
        const idx = state.indexOf(action.key);
        if (idx === -1 && action.active === true) return [...state, action.key];
        else if (idx !== -1 && action.active === false) {
          const newState = [...state];
          newState.splice(idx, 1);
          return newState;
        }
        return state;
      default:
        return state;
    }
  }, defaultFilterSet);

  const setFilter = useCallback((key, active) =>
    dispatch({ type: "SET_FILTER", key, active }), [dispatch]);

  return [activeFilters, setFilter];
}
