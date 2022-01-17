import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CheckBox from "./CheckBox";
import "./expansion-panel.css";

export default function ExpansionPanel({
    children,
    label,
}: {
    children: React.ReactNode;
    label: string;
}) {
    const [open, setOpen] = useState(false);

    return (
        <div className="expansion-panel">
            <CheckBox
                label={label}
                checked={open}
                onChange={(e) => setOpen(e.currentTarget.checked)}
                additionalCheckmarkClassName="expandmark"
            />
            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{
                            height: 0,
                        }}
                        animate={{
                            height: "auto",
                        }}
                        exit={{
                            height: 0,
                        }}>
                        {children}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
