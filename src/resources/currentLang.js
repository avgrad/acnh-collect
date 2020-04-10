const supportedLangs = ["en", "de"];
const fallbackLang = "en";

const currentLang = (() => {
  const browserLang = navigator.language.split("-")[0];
  if (supportedLangs.includes(browserLang)) {
    return browserLang;
  }
  return fallbackLang;
})();

export default currentLang;
