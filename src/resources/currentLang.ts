const supportedLangs = ["en", "de"] as const;
const fallbackLang = "en";

const currentLang = (() => {
    const browserLang = navigator.language.split(
        "-"
    )[0] as typeof supportedLangs[number];
    if (supportedLangs.includes(browserLang)) {
        return browserLang;
    }
    return fallbackLang;
})();

export default currentLang;
