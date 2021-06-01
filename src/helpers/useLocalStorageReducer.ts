import {
    useReducer,
    useEffect,
    useCallback,
    Reducer,
    ReducerState,
    Dispatch,
    ReducerAction,
} from "react";

const internalResetActionName = "INTERNAL_ACTION_SET_REDUCER_ALL_STATE";

// based on https://stackoverflow.com/a/54474945/5127593
export function useLocalStorageReducer<R extends Reducer<any, any>, I>(
    reducer: R,
    defaultState: I & ReducerState<R>,
    storageKey: string,
    init?: (arg: I & ReducerState<R>) => ReducerState<R>
): [ReducerState<R>, Dispatch<ReducerAction<R>>] {
    // internal custom intermediate reducer to catch internal-reset
    // event for storage changes from other windows
    const internalReducer = useCallback(
        (state: ReducerState<R>, action: ReducerAction<R>): ReducerState<R> => {
            if (action.type === internalResetActionName) {
                return action.state;
            }
            return reducer(state, action);
        },
        [reducer]
    );

    const [state, dispatch] = useReducer(
        internalReducer,
        defaultState,
        (defaultState) => {
            const item = localStorage.getItem(storageKey);
            if (item === null) {
                return init != null ? init(defaultState) : defaultState;
            }
            const persisted = JSON.parse(item);
            return persisted !== null
                ? persisted
                : typeof init === "function"
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
            if (newValue === null) {
                dispatch({
                    type: internalResetActionName,
                    state: null,
                } as ReducerAction<R>);
                return;
            }
            const newJson = JSON.parse(newValue);
            dispatch({
                type: internalResetActionName,
                state: newJson,
            } as ReducerAction<R>);
        }
    }, [storageKey, state]);

    useEffect(() => {
        window.addEventListener("storage", handler);
        return () => window.removeEventListener("storage", handler);
    }, [handler, storageKey]);
    ///////////////////////

    return [state, dispatch];
}
