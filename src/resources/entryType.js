import currentLang from "./currentLang";

const languageResources = {
    BUG: {
        en: "🐛",
        de: "🐛",
    },
    FISH: {
        en: "🦈",
        de: "🦈",
    },
    SEACREATURE: {
        en: "🤿",
        de: "🤿",
    },
    FOSSIL: {
        en: "🦴",
        de: "🦴", // 🦖
    },
    ART: {
        en: "🎨",
        de: "🎨",
    },
    SONG: {
        en: "🎵",
        de: "🎵",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_ENTRYTYPE_${currentLang.toUpperCase()}[${name}]`;
    },
});

export default languageResourceProxy;
