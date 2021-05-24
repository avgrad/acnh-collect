import currentLang from "./currentLang";

const languageResources = {
    JANUARY: {
        en: "January",
        de: "Januar",
    },
    FEBRUARY: {
        en: "February",
        de: "Februar",
    },
    MARCH: {
        en: "March",
        de: "März",
    },
    APRIL: {
        en: "April",
        de: "April",
    },
    MAY: {
        en: "May",
        de: "Mai",
    },
    JUNE: {
        en: "June",
        de: "Juni",
    },
    JULY: {
        en: "July",
        de: "Juli",
    },
    AUGUST: {
        en: "August",
        de: "August",
    },
    SEPTEMBER: {
        en: "September",
        de: "September",
    },
    OCTOBER: {
        en: "October",
        de: "Oktober",
    },
    NOVEMBER: {
        en: "November",
        de: "November",
    },
    DECEMBER: {
        en: "December",
        de: "Dezember",
    },
    TO: {
        en: "to",
        de: "bis",
    },
    CLOCK: {
        en: "o'Clock",
        de: "Uhr",
    },
    ALL_DAY: {
        en: "all day",
        de: "ganztägig",
    },
    ALL_YEAR: {
        en: "all year",
        de: "ganzjährig",
    },
    LEAVING_MONTH: {
        en: "leaving this month",
        de: "nur noch diesen Monat",
    },
    LEAVING_HOUR: {
        en: "leaving this hour",
        de: "nur noch diese Stunde",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        let rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_AVAILABILITY_${currentLang.toUpperCase()}[${name}]`;
    },
});

export default languageResourceProxy;

export const months = [
    "JANUARY",
    "FEBRUARY",
    "MARCH",
    "APRIL",
    "MAY",
    "JUNE",
    "JULY",
    "AUGUST",
    "SEPTEMBER",
    "OCTOBER",
    "NOVEMBER",
    "DECEMBER",
];
