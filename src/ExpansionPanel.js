import React, { useState } from "react";
import CheckBox from "./CheckBox";
import "./expansion-panel.css";

export default function ExpansionPanel({ children, label }) {
  const [ open, setOpen ] = useState(false);
  const contentClassName = "content " + (open ? "open" : "close")
  return (
    <div className="expansion-panel">
      <CheckBox
        label={label}
        checked={open}
        onChange={e => setOpen(e.currentTarget.checked)}
        additionalCheckmarkClassName="expandmark"
      />
      <div className={contentClassName}>
        {children}
      </div>
    </div>
  );
}
