import { useReducer, useEffect, useCallback } from "react";

const internalResetActionName = "INTERNAL_ACTION_SET_REDUCER_ALL_STATE";

// based on https://stackoverflow.com/a/54474945/5127593
export function useLocalStorageReducer(
    reducer,
    defaultState,
    storageKey,
    init = null
) {
    // internal custom intermediate reducer to catch internal-reset
    // event for storage changes from other windows
    const internalReducer = useCallback(
        (...args) => {
            if (args[1].type === internalResetActionName) {
                return args[1].state;
            }
            return reducer(...args);
        },
        [reducer]
    );

    const [state, dispatch] = useReducer(
        internalReducer,
        defaultState,
        (defaultState) => {
            const item = localStorage.getItem(storageKey);
            const persisted = JSON.parse(item);
            return persisted !== null
                ? persisted
                : init !== null
                ? init(defaultState)
                : defaultState;
        }
    );

    useEffect(() => {
        localStorage.setItem(storageKey, JSON.stringify(state));
    }, [storageKey, state]);

    ///////////////////////
    // listen to storage events and dispatch internal reset action to sync windows
    // internalReducer also belongs to this
    const handler = useCallback(() => {
        const newValue = localStorage.getItem(storageKey);
        // HACK compare by stringify
        if (JSON.stringify(state) !== newValue) {
            // VALUE  ACTUALLY CHANGED
            const newJson = JSON.parse(newValue);
            dispatch({
                type: internalResetActionName,
                state: newJson,
            });
        }
    }, [storageKey, state]);

    useEffect(() => {
        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, [handler, storageKey]);
    ///////////////////////

    return [state, dispatch];
}
