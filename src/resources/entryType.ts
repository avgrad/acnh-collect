import currentLang from "./currentLang";
import { LangResource } from "./index";

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
    GYROID: {
        en: "🤖",
        de: "🤖",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_ENTRYTYPE_${currentLang.toUpperCase()}[${String(
            name
        )}]`;
    },
});

export default languageResourceProxy as unknown as LangResource<
    typeof languageResources
>;
