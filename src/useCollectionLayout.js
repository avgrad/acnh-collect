import React, { createContext, useContext } from "react";
import { useLocalStorageReducer } from "./helpers/useLocalStorageReducer";

export const Layouts = {
    GRID: "GRID",
    LIST: "LIST",
};

const CollectionLayoutContext = createContext();

export const useCollectionLayout = () => useContext(CollectionLayoutContext);

export const Provider = ({ children }) => {
    const [currentLayout, dispatchLayout] = useLocalStorageReducer(
        (state, action) => {
            switch (action.type) {
                case "SET_LAYOUT":
                    return action.layout;
                default:
                    return state;
            }
        },
        Layouts.GRID,
        "layout"
    );

    const store = {
        currentLayout,
        setLayout: (l) => dispatchLayout({ type: "SET_LAYOUT", layout: l }),
    };

    return (
        <CollectionLayoutContext.Provider value={store}>
            {children}
        </CollectionLayoutContext.Provider>
    );
};
