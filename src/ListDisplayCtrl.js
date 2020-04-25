import React from "react";
import { useCollection } from "./useCollection";
import EntryCtrl from "./EntryCtrl";

export default function ListDisplayCtrl({ ...rest }) {
  const { displayedCollection } = useCollection();
  return (
    <div className="collection-list">
      {displayedCollection.map(entry => (
        <EntryCtrl entry={entry} />
      ))}
    </div>
  );
}
