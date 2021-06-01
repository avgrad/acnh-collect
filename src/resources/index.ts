import currentLang from "./currentLang";
import general from "./general";
import filter from "./filter";
import sort from "./sort";
import entryType from "./entryType";
import location from "./location";
import availability from "./availability";
import availabilityShort from "./availabilityShort";
import { Name } from "../data/types";

const langResources = {
    general,
    filter,
    sort,
    entryType,
    location,
    availability,
    availabilityShort,
};
export default langResources;

export type LangResource<T> = {
    [Property in keyof T]: string;
};

export const generalLangProxy = (nameObj: Name) => {
    const name = nameObj[currentLang];
    if (name) {
        return name;
    }
    return `PROPERTY_${currentLang.toUpperCase()}_NOT_FOUND[${JSON.stringify(
        nameObj
    )}]`;
};

export const nameLangProxy = generalLangProxy;
