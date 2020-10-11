import React from "react";
import lang from "./../resources";
import { useCollection } from "./../useCollection";
import EntryListCtrl from "./EntryListCtrl";
import EntryGridCtrl from "./EntryGridCtrl";
import { Layouts, useCollectionLayout } from "./../useCollectionLayout";

export default function CollectionDisplayCtrl() {
    const { currentLayout } = useCollectionLayout();
    const { displayedCollection } = useCollection();
    const EntryDisplayCtrl = {
        [Layouts.GRID]: EntryGridCtrl,
        [Layouts.LIST]: EntryListCtrl,
    }[currentLayout];
    const containerClassName = {
        [Layouts.GRID]: "collection-grid",
        [Layouts.LIST]: "collection-list",
    }[currentLayout];

    return (
        <div className={containerClassName}>
            {displayedCollection.length === 0 ? (
                <p className="no-matches">{lang.filter.NO_RESULTS}</p>
            ) : (
                displayedCollection.map((entry) => (
                    <EntryDisplayCtrl entry={entry} />
                ))
            )}
        </div>
    );
}
