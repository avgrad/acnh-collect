import currentLang from "./currentLang";

const languageResources = {
    GROUND: {
        en: "Ground",
        de: "Boden",
    },
    RIVER: {
        en: "River",
        de: "Fluss",
    },
    ROCKS: {
        en: "Rocks",
        de: "Steine",
    },
    SEA: {
        en: "Sea",
        de: "Meer",
    },
    FLYING_BY_LIGHT: {
        en: "Flying (by light)",
        de: "Fliegt (bei Licht)",
    },
    POND: {
        en: "Pond",
        de: "Teich",
    },
    TREE: {
        en: "Tree",
        de: "Baum",
    },
    FLOWERS: {
        en: "Flowers",
        de: "Blumen",
    },
    TREE_STUMP: {
        en: "Tree stump",
        de: "Baumstumpf",
    },
    BEACH: {
        en: "Beach",
        de: "Strand",
    },
    FLYING_BY_HYBRID_FLOWER: {
        en: "Flying (by hybrid flower)",
        de: "Fliegt (bei gekreuzten Blumen)",
    },
    PIER: {
        en: "Pier",
        de: "Steg",
    },
    FLYING: {
        en: "Flying",
        de: "Fliegt",
    },
    SEA_RAINING: {
        en: "Sea (Rain)",
        de: "Meer (Regen)",
    },
    ROTTEN_FOOD: {
        en: "Rotten Food",
        de: "Verrottetes Essen",
    },
    BEACH_ROCK: {
        en: "Beach Rock",
        de: "Strand Stein",
    },
    POND_AND_RIVER: {
        en: "Pond and River",
        de: "Teich und Fluss",
    },
    PALM_TREE: {
        en: "Palm tree",
        de: "Palme",
    },
    RIVER_MOUTH: {
        en: "River mouth",
        de: "Flussmündung",
    },
    TREE_SHAKE: {
        en: "Tree (shake)",
        de: "Baum (schütteln)",
    },
    TRASH_ITEM: {
        en: "Trash Item",
        de: "Abfall",
    },
    RIVER_CLIFFTOP: {
        en: "River clifftop",
        de: "Fluss auf Klippe",
    },
    RIVER_CLIFFTOP_AND_POND: {
        en: "River clifftop and Pond",
        de: "Fluss auf Klippe und Teich",
    },
    UNDER_TREE: {
        en: "Under Tree",
        de: "Unter Baum",
    },
    UNDERGROUND: {
        en: "Underground",
        de: "Untergrund",
    },
    VILLAGER_HEAD: {
        en: "Villager Head",
        de: "Kopf von Bewohner",
    },
    ROCKS_RAIN: {
        en: "Rocks (Rain)",
        de: "Steine (Regen)",
    },
    FLOWERS_WHITE: {
        en: "Flowers (white)",
        de: "Blumen (weiß)",
    },
};

const languageResourceProxy = new Proxy(languageResources, {
    get(target, name, receiver) {
        const rv = Reflect.get(target, name, receiver);
        if (typeof rv === "object" && typeof rv[currentLang] === "string") {
            return rv[currentLang];
        }
        return `RESSOURCE_LOCATION_${currentLang.toUpperCase()}[${name}]`;
    },
});

export default languageResourceProxy;
