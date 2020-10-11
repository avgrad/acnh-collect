import React from "react";
import { useCollection } from "./useCollection";
import lang from "./resources";

export default function StatsCtrl({ ...rest }) {
    const { stats } = useCollection();
    return (
        <ul className="stats">
            <li>
                {lang.entryType.BUG} {stats.bugs.donated} / {stats.bugs.all}
            </li>
            <li>
                {lang.entryType.FISH} {stats.fish.donated} / {stats.fish.all}
            </li>
            <li>
                {lang.entryType.FOSSIL} {stats.fossils.donated} /{" "}
                {stats.fossils.all}
            </li>
            <li>
                {lang.entryType.SEACREATURE} {stats.seaCreatures.donated} /{" "}
                {stats.seaCreatures.all}
            </li>
            <li>
                {lang.entryType.ART} {stats.art.donated} / {stats.art.all}
            </li>
        </ul>
    );
}
