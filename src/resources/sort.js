import currentLang from "./currentLang";

const languageResources = {
    NAME: {
        en: "Name",
        de: "Name",
    },
    PRICE: {
        en: "Sell Price",
        de: "Verkaufspreis",
    },
    TYPE: {
        en: "Type",
        de: "Typ",
    },
    ASC: {
        en: "↓ Asc.",
        de: "↓ Aufst.",
    },
    DESC: {
        en: "↑ Desc.",
        de: "↑ Abst.",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_SORT_${currentLang.toUpperCase()}[${name}]`;
    },
});

export default languageResourceProxy;
