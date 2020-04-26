import React from "react";
import { useCollection } from "./useCollection";
import lang from "./resources";

export default function StatsCtrl({ ...rest }) {
  const { stats } = useCollection();
  return (
    <div className="stats">
      <span>
        {lang.entryType.BUG} {stats.bugs.donated} /{" "}
        {stats.bugs.all}
      </span>
      <span className="seperator" />
      <span>
        {lang.entryType.FISH} {stats.fish.donated} /{" "}
        {stats.fish.all}
      </span>
      <span className="seperator" />
      <span>
        {lang.entryType.FOSSIL} {stats.fossils.donated} /{" "}
        {stats.fossils.all}
      </span>
      <span className="seperator" />
      <span>
        {lang.entryType.ART} {stats.art.donated} /{" "}
        {stats.art.all}
      </span>
    </div>
  );
}
