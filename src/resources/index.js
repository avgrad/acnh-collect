import currentLang from "./currentLang";
import general from "./general";
import filter from "./filter";
import entryType from "./entryType";
import location from "./location";

export default {
  general,
  filter,
  entryType,
  location
};

export const nameProxy = nameObj => {
  const name = nameObj[currentLang];
  if (name) {
    return name;
  }
  return `NAME_${currentLang.toUpperCase()}_NOT_FOUND[${JSON.stringify(
    nameObj
  )}]`;
};
