import { LangResource } from ".";
import currentLang from "./currentLang";

const languageResources = {
    placeholder: {
        en: "PLACEHOLDER",
        de: "PLATZHALTER",
    },
    applicationUpdatedMessage: {
        en: "The Application was updated in the background. Click here or reload the page to use the newest version.",
        de: "Die Anwendung wurde im Hintergrund aktualisiert. Klicke hier oder aktualisiere die Seite, um die neueste Version zu verwenden.",
    },
    FILTER_SORT: {
        en: "Filter & Sorting",
        de: "Filter & Sortierung",
    },
    BELLS: {
        en: "Bells",
        de: "Sternis",
    },
    NOT_ORDERABLE: {
        en: "not orderable",
        de: "nicht bestellbar",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_GENERAL_${currentLang.toUpperCase()}[${String(
            name
        )}]`;
    },
});

export default languageResourceProxy as unknown as LangResource<
    typeof languageResources
>;
