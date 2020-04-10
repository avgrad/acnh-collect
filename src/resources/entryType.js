import currentLang from "./currentLang";

const languageResources = {
  BUG: {
    en: "Insect",
    de: "🐛"
  },
  FISH: {
    en: "Fish",
    de: "🦈"
  },
  FOSSIL: {
    en: "Fossil",
    de: "🦴" // 🦖
  }
};

const languageResourceProxy = new Proxy(languageResources, {
  get(target, name, receiver) {
    let rv = Reflect.get(target, name, receiver);
    if (typeof rv === "object" && typeof rv[currentLang] === "string") {
      return rv[currentLang];
    }
    return `RESSOURCE_ENTRYTYPE_${currentLang.toUpperCase()}[${name}]`;
  }
});

export default languageResourceProxy;
