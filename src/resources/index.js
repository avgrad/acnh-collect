import currentLang from "./currentLang";
import general from "./general";
import filter from "./filter";
import sort from "./sort";
import entryType from "./entryType";
import location from "./location";
import availability from "./availability";
import availabilityShort from "./availabilityShort";

export default {
    general,
    filter,
    sort,
    entryType,
    location,
    availability,
    availabilityShort,
};

export const generalLangProxy = (nameObj) => {
    const name = nameObj[currentLang];
    if (name) {
        return name;
    }
    return `PROPERTY_${currentLang.toUpperCase()}_NOT_FOUND[${JSON.stringify(
        nameObj
    )}]`;
};

export const nameLangProxy = (nameObj) => {
    const langs = Object.keys(nameObj);
    const regex = new RegExp("^name-.." + currentLang + "$");
    const matchingLang = langs.find((l) => regex.test(l));
    const name = nameObj[matchingLang];
    if (name) {
        return name;
    }
    return `PROPERTY_${currentLang.toUpperCase()}_NOT_FOUND[${JSON.stringify(
        nameObj
    )}]`;
};
