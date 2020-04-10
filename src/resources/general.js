import currentLang from "./currentLang";

const languageResources = {
  placeholder: {
    en: "PLACEHOLDER",
    de: "PLATZHALTER"
  }
};

const languageResourceProxy = new Proxy(languageResources, {
  get(target, name, receiver) {
    let rv = Reflect.get(target, name, receiver);
    if (typeof rv === "object" && typeof rv[currentLang] === "string") {
      return rv[currentLang];
    }
    return `RESSOURCE_GENERAL_${currentLang.toUpperCase()}[${name}]`;
  }
});

export default languageResourceProxy;
