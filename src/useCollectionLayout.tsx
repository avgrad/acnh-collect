import React, { createContext, useContext } from "react";
import { useLocalStorageReducer } from "./helpers/useLocalStorageReducer";

export enum Layouts {
    GRID = "GRID",
    LIST = "LIST",
}

type CollectionLayout = {
    currentLayout: Layouts;
    setLayout: (l: Layouts) => void;
};

type LayoutAction = {
    type: string;
    layout: Layouts;
};

const CollectionLayoutContext = createContext<CollectionLayout>(
    (null as unknown) as CollectionLayout // TODO FIXME
);

export const useCollectionLayout = () => useContext(CollectionLayoutContext);

export const Provider = ({ children }: { children: React.ReactNode }) => {
    const [currentLayout, dispatchLayout] = useLocalStorageReducer(
        (state: Layouts, action: LayoutAction) => {
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
        setLayout: (l: Layouts) =>
            dispatchLayout({ type: "SET_LAYOUT", layout: l }),
    };

    return (
        <CollectionLayoutContext.Provider value={store}>
            {children}
        </CollectionLayoutContext.Provider>
    );
};
