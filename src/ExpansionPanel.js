import React, { useState } from "react";
import "./checkboxStyles.css";
import "./expansion-panel.css";

export default function ExpansionPanel({ children, label }) {
  const [open, setOpen] = useState(false);
  const contentClassName = "content " + (open ? "open" : "close")
  return (
      <div className="expansion-panel">
        <label className="checkbox">
          <input
              type="checkbox"
              checked={open}
              onChange={e => setOpen(e.currentTarget.checked)}
              />
            <span className="checkmark expandmark" />
            {label}
          </label>
          <div className={contentClassName}>
            {children}
          </div>
      </div>
  );
}
