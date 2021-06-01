import React from "react";
import { useCollection } from "./../useCollection";
import lang from "./../resources";
import { Filters } from "./../data/filters";
import { SortFields, SortDirections } from "./../data/sort";
import ExpansionPanel from "./ExpansionPanel";
import FilterCheckbox from "./FilterCheckbox";
import RadioSelect from "./RadioSelect";

export default function FilterSortCtrl() {
    const { sort } = useCollection();
    return (
        <ExpansionPanel label={lang.general.FILTER_SORT}>
            <div className="filters">
                <div>
                    <FilterCheckbox filter={Filters.showBugs} />
                    <FilterCheckbox filter={Filters.showFish} />
                    <FilterCheckbox filter={Filters.showSeaCreatures} />
                    <FilterCheckbox filter={Filters.showFossils} />
                    <FilterCheckbox filter={Filters.showArt} />
                    <FilterCheckbox filter={Filters.showSongs} />
                </div>
                <div>
                    <FilterCheckbox filter={Filters.collected} />
                    <FilterCheckbox filter={Filters.uncollected} />
                </div>
                <div>
                    <FilterCheckbox filter={Filters.currentTime} />
                    <FilterCheckbox filter={Filters.currentMonth} />
                </div>
            </div>
            <div className="sort">
                <RadioSelect
                    name="sort-field"
                    values={[
                        SortFields.NAME,
                        SortFields.PRICE,
                        SortFields.TYPE,
                    ]}
                    labelSource={lang.sort}
                    selectedValue={sort.field}
                    onChange={(v) => sort.setField(v)}
                />
                <RadioSelect
                    name="sort-direction"
                    values={[SortDirections.ASC, SortDirections.DESC]}
                    labelSource={lang.sort}
                    selectedValue={sort.direction}
                    onChange={(v) => sort.setDirection(v)}
                />
            </div>
        </ExpansionPanel>
    );
}
