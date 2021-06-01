import React, { useCallback } from "react";

export default function RadioSelect<T extends string>({
    name,
    selectedValue,
    values = [],
    labelSource,
    onChange,
}: {
    name: string;
    selectedValue: T;
    values: T[];
    labelSource: { [k: string]: string };
    onChange: (newSelected: T) => void;
}) {
    const inputChangeHandler = useCallback(
        (e) => {
            const newSelected = e.currentTarget.value;
            if (onChange) onChange(newSelected);
        },
        [onChange]
    );

    return (
        <div className="radio">
            {values.map((value) => (
                <label key={name + value}>
                    <input
                        type="radio"
                        name={name}
                        value={value}
                        checked={selectedValue === value}
                        onChange={inputChangeHandler}
                    />
                    <span className="checkmark"></span>
                    {labelSource[value]}
                </label>
            ))}
        </div>
    );
}
