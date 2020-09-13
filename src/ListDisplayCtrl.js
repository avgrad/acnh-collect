import React from "react";
import lang from "./resources";
import { useCollection } from "./useCollection";
import EntryCtrl from "./EntryCtrl";
import EntryGridCtrl from "./EntryGridCtrl";
import "./collection-grid.css";

export function ListDisplayCtrl() {
    const { displayedCollection } = useCollection();
    return (
        <div className="collection-list">
            {displayedCollection.length === 0 ? (
                <p className="no-matches">{lang.filter.NO_RESULTS}</p>
            ) : (
                displayedCollection.map((entry) => <EntryCtrl entry={entry} />)
            )}
        </div>
    );
}

export function GridDisplayCtrl() {
    const { displayedCollection } = useCollection();
    return (
        <div className="collection-grid">
            {displayedCollection.length === 0 ? (
                <p className="no-matches">{lang.filter.NO_RESULTS}</p>
            ) : (
                displayedCollection.map((entry) => <EntryGridCtrl {...entry} />)
            )}
        </div>
    );
}
