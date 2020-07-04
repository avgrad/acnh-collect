import currentLang from "./currentLang";
import general from "./general";
import filter from "./filter";
import sort from "./sort";
import entryType from "./entryType";
import location from "./location";
import availability from "./availability";

export default {
    general,
    filter,
    sort,
    entryType,
    location,
    availability,
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
