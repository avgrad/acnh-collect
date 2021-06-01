import React from "react";
import { useCollection } from "./../useCollection";
import CheckBox from "./CheckBox";
import lang from "./../resources";
import { Filters } from "../data/filters";

export default function FilterCheckbox({ filter }: { filter: Filters }) {
    const { activeFilterSet, setFilter } = useCollection();
    return (
        <CheckBox
            label={lang.filter[filter]}
            checked={activeFilterSet.includes(filter)}
            onChange={(e) => setFilter(filter, e.currentTarget.checked)}
        />
    );
}
