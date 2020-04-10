import React from "react";
import { useCollection } from "./useCollection";
import "./checkboxStyles.css";
import lang from "./resources";

export default function FilterCheckbox({ filter }) {
  const { activeFilterSet, setFilter } = useCollection();
  return (
    <label className="checkbox">
      <input
        type="checkbox"
        value={filter}
        checked={activeFilterSet.includes(filter)}
        onChange={e =>
          setFilter(e.currentTarget.value, e.currentTarget.checked)
        }
      />
      <span className="checkmark" />
      {lang.filter[filter]}
    </label>
  );
}
