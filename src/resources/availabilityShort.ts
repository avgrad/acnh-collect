import { LangResource } from ".";
import currentLang from "./currentLang";

const languageResources = {
    JANUARY: {
        en: "Jan.",
        de: "Jan.",
    },
    FEBRUARY: {
        en: "Feb.",
        de: "Feb.",
    },
    MARCH: {
        en: "Mar.",
        de: "Mär.",
    },
    APRIL: {
        en: "Apr.",
        de: "Apr.",
    },
    MAY: {
        en: "May",
        de: "Mai",
    },
    JUNE: {
        en: "Jun.",
        de: "Jun.",
    },
    JULY: {
        en: "Jul.",
        de: "Jul.",
    },
    AUGUST: {
        en: "Aug.",
        de: "Aug.",
    },
    SEPTEMBER: {
        en: "Sept.",
        de: "Sept.",
    },
    OCTOBER: {
        en: "Oct.",
        de: "Okt.",
    },
    NOVEMBER: {
        en: "Nov.",
        de: "Nov.",
    },
    DECEMBER: {
        en: "Dec.",
        de: "Dez.",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_AVAILABILITYSHORT_${currentLang.toUpperCase()}[${String(
            name
        )}]`;
    },
});

export default languageResourceProxy as unknown as LangResource<
    typeof languageResources
>;
