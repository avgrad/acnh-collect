import { LangResource } from ".";
import currentLang from "./currentLang";

const languageResources = {
    SHOW_BUGS: {
        en: "Show Insects",
        de: "Insekten anzeigen",
    },
    SHOW_FISH: {
        en: "Show Fish",
        de: "Fische anzeigen",
    },
    SHOW_SEACREATURES: {
        en: "Show Sea Creatures",
        de: "Meerestiere anzeigen",
    },
    SHOW_FOSSILS: {
        en: "Show Fossils",
        de: "Fossilien anzeigen",
    },
    SHOW_ART: {
        en: "Show Art",
        de: "Kunstwerke anzeigen",
    },
    SHOW_SONGS: {
        en: "Show KK Songs",
        de: "KK Songs anzeigen",
    },
    UNCOLLECTED: {
        en: "Uncollected ",
        de: "Ungestiftete",
    },
    COLLECTED: {
        en: "Collected ",
        de: "Gestiftete",
    },
    CURRENT_TIME: {
        en: "Current Time",
        de: "Aktuelle Zeit",
    },
    CURRENT_MONTH: {
        en: "Current Month",
        de: "Aktueller Monat",
    },
    NO_RESULTS: {
        en: "No matches for current filter settings",
        de: "Keine Übereinstimmungen für aktuelle Filter-Einstellungen",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_FILTER_${currentLang.toUpperCase()}[${String(name)}]`;
    },
});

export default (languageResourceProxy as unknown) as LangResource<
    typeof languageResources
>;
