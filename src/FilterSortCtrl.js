import React from "react";
import { useCollection } from "./useCollection";
import lang from "./resources";
import { filters } from "./filters";
import { sortFields, sortDirections } from "./sort";
import ExpansionPanel from "./ExpansionPanel";
import FilterCheckbox from "./FilterCheckbox";
import RadioSelect from "./RadioSelect";

export default function FilterSortCtrl({ ...rest }) {
  const { sort } = useCollection();
  return (
    <ExpansionPanel label={lang.general.FILTER_SORT}>
      <div className="filters">
        <div>
          <FilterCheckbox filter={filters.showBugs} />
          <FilterCheckbox filter={filters.showFish} />
          <FilterCheckbox filter={filters.showFossils} />
          <FilterCheckbox filter={filters.showArt} />
        </div>
        <div>
          <FilterCheckbox filter={filters.collected} />
          <FilterCheckbox filter={filters.uncollected} />
        </div>
        <div>
          <FilterCheckbox filter={filters.currentTime} />
          <FilterCheckbox filter={filters.currentMonth} />
        </div>
      </div>
      <div className="sort">
        <RadioSelect
          name="sort-field"
          values={sortFields}
          labelSource={lang.sort}
          selectedValue={sort.field}
          onChange={v => sort.setField(v)}
        />
        <RadioSelect
          name="sort-direction"
          values={sortDirections}
          labelSource={lang.sort}
          selectedValue={sort.direction}
          onChange={v => sort.setDirection(v)}
        />
      </div>
    </ExpansionPanel>
  );
}
