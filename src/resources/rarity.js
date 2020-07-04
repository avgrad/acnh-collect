import currentLang from "./currentLang";

const languageResources = {
    COMMON: {
        en: "common",
        de: "gewöhnlich",
    },
    UNCOMMON: {
        en: "uncommon",
        de: "ungewöhnlich",
    },
    RARE: {
        en: "rare",
        de: "selten",
    },
    EXTREMELY_RARE: {
        en: "extremely rare",
        de: "extrem selten",
    },
    LIMITED_PER_DAY: {
        en: "limited per day",
        de: "täglich limitiert",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_RARITY_${currentLang.toUpperCase()}[${name}]`;
    },
});

export default languageResourceProxy;
