import currentLang from "./currentLang";

const languageResources = {
  placeholder: {
    en: "PLACEHOLDER",
    de: "PLATZHALTER"
  },
  applicationUpdatedMessage: {
    en: "The Application was updated in the background. Please close it, and reopen it to use the newest version.",
    de: "Die Anwendung wurde im Hintergrund aktualisiert. Bitte schließe und öffne sie erneut, um die neueste Version zu verwenden."
  },
  FILTER_SORT: {
    en: "Filter & Sorting",
    de: "Filter & Sortierung"
  }
};

const languageResourceProxy = new Proxy(languageResources, {
  get(target, name, receiver) {
    let rv = Reflect.get(target, name, receiver);
    if (typeof rv === "object" && typeof rv[currentLang] === "string") {
      return rv[currentLang];
    }
    return `RESSOURCE_GENERAL_${currentLang.toUpperCase()}[${name}]`;
  }
});

export default languageResourceProxy;
