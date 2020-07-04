import React from "react";
import lang from "./resources";
import { useCollection } from "./useCollection";
import EntryCtrl from "./EntryCtrl";

export default function ListDisplayCtrl({ ...rest }) {
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
