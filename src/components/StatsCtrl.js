import React from "react";
import "./stats.css";
import { useCollection } from "./../useCollection";
import lang from "./../resources";

function StatCounter({ label, donated, all }) {
    return (
        <li data-completed={donated === all}>
            {label} <sup>{donated}</sup>
            <span className="divider">&frasl;</span>
            <sub>{all}</sub>
        </li>
    );
}

export default function StatsCtrl() {
    const { stats } = useCollection();
    return (
        <ul className="stats">
            <StatCounter label={lang.entryType.BUG} {...stats.bugs} />
            <StatCounter label={lang.entryType.FISH} {...stats.fish} />
            <StatCounter label={lang.entryType.FOSSIL} {...stats.fossils} />
            <StatCounter
                label={lang.entryType.SEACREATURE}
                {...stats.seaCreatures}
            />
            <StatCounter label={lang.entryType.ART} {...stats.art} />
        </ul>
    );
}
