import currentLang from "./currentLang";

const languageResources = {
  SHOW_BUGS: {
    en: "Show Insects",
    de: "Insekten anzeigen"
  },
  SHOW_FISH: {
    en: "Show Fish",
    de: "Fische anzeigen"
  },
  SHOW_FOSSILS: {
    en: "Show Fossils",
    de: "Fossilien anzeigen"
  },
  UNCOLLECTED: {
    en: "Uncollected ",
    de: "Ungestiftete"
  },
  COLLECTED: {
    en: "Collected ",
    de: "Gestiftete"
  },
  CURRENT_TIME: {
    en: "Current Time",
    de: "Aktuelle Zeit"
  },
  CURRENT_MONTH: {
    en: "Current Month",
    de: "Aktueller Monat"
  },
  FILTER_SETTINGS: {
    en: "Filter Settings",
    de: "Filtereinstellungen"
  }
};

const languageResourceProxy = new Proxy(languageResources, {
  get(target, name, receiver) {
    let rv = Reflect.get(target, name, receiver);
    if (typeof rv === "object" && typeof rv[currentLang] === "string") {
      return rv[currentLang];
    }
    return `RESSOURCE_FILTER_${currentLang.toUpperCase()}[${name}]`;
  }
});

export default languageResourceProxy;
