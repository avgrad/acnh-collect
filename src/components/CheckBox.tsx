import React from "react";
import "./checkboxStyles.css";

export default function CheckBox({
    checked,
    onChange,
    label,
    additionalCheckmarkClassName = "",
}: {
    checked?: boolean;
    onChange?: React.ChangeEventHandler<HTMLInputElement> | undefined;
    label?: string;
    additionalCheckmarkClassName?: string;
}) {
    return (
        <label className="checkbox">
            <input type="checkbox" checked={checked} onChange={onChange} />
            {label}
            <span className={"checkmark " + additionalCheckmarkClassName} />
        </label>
    );
}
