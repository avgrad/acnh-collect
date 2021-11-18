import React from "react";
import "./stats.css";
import { useCollection } from "./../useCollection";
import lang from "./../resources";

function StatCounter({
    label,
    donated,
    all,
}: {
    label: string;
    donated: number;
    all: number;
}) {
    return (
        <li data-completed={donated === all && all !== 0}>
            {label} <sup>{donated}</sup>
            <span className="divider">&frasl;</span>
            <sub>{all === 0 ? "?" : all}</sub>
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
            <StatCounter label={lang.entryType.SONG} {...stats.songs} />
            <StatCounter label={lang.entryType.GYROID} {...stats.gyroids} />
        </ul>
    );
}
