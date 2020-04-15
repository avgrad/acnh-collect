import React, { useCallback } from "react";

export default function RadioSelect({ name, selectedValue, values=[], labelSource={}, onChange, ...rest }) {
  const inputChangeHandler = useCallback(e => {
    const newSelected = e.currentTarget.value;
    if (onChange)
      onChange(newSelected);
  }, [onChange]);

  return (
    <div className="radio">
      {values.map((value) => (
        <label key={name + value}>
          <input type="radio"
            name={name}
            value={value}
            checked={selectedValue === value}
            onChange={inputChangeHandler} />
          <span className="checkmark"></span>
          {labelSource[value]}
        </label>
      ))}
    </div>
  )
}
