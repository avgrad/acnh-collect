const https = require("https");
const fs = require("fs");

const artFakeInfo = require("./artFakeInfo.json");

const apiTypes = ["fish", "bugs", "fossils", "sea", "art", "songs"];

const typeFilenameMap = {
    fish: "FISH",
    bugs: "BUG",
    fossils: "FOSSIL",
    sea: "SEACREATURE",
    art: "ART",
    songs: "SONG",
};

const locationMap = {
    "On the ground": "GROUND",
    River: "RIVER",
    "Hitting rocks": "ROCKS",
    Sea: "SEA",
    "Flying by light": "FLYING_BY_LIGHT",
    Pond: "POND",
    "On trees": "TREE",
    "On flowers": "FLOWERS",
    "On tree stumps": "TREE_STUMP",
    "On the beach": "BEACH",
    "Flying near hybrid flowers": "FLYING_BY_HYBRID_FLOWER",
    Pier: "PIER",
    Flying: "FLYING",
    "Flying (near water)": "FLYING",
    "Sea (when raining or snowing)": "SEA_RAINING",
    "On rotten food": "ROTTEN_FOOD",
    "On beach rocks": "BEACH_ROCK",
    "On ponds and rivers": "POND_AND_RIVER",
    "On palm trees": "PALM_TREE",
    "River (Mouth)": "RIVER_MOUTH",
    "Shaking trees": "TREE_SHAKE",
    "Near trash": "TRASH_ITEM",
    "River (Clifftop)": "RIVER_CLIFFTOP",
    "River (Clifftop) & Pond": "RIVER_CLIFFTOP_AND_POND",
    "Under trees": "UNDER_TREE",
    Underground: "UNDERGROUND",
    "On villagers": "VILLAGER_HEAD",
    "On rocks and bush (when raining)": "ROCKS_RAIN",
    "On white flowers": "FLOWERS_WHITE",
};

function downloadJson(url, callback) {
    https
        .get(url, function (res) {
            let json = "";
            res.on("data", function (chunk) {
                json += chunk;
            });
            res.on("end", function () {
                if (res.statusCode === 200) {
                    try {
                        const data = JSON.parse(json);
                        callback(data);
                    } catch (e) {
                        console.log(
                            "JSON parsing error while downloading " + url,
                            e
                        );
                    }
                } else {
                    console.log("Status: ", res.statusCode);
                }
            });
        })
        .on("error", function (err) {
            console.log("Error: ", err);
        });
}

function saveToFile(filePath, strContent) {
    const file = fs.createWriteStream(filePath);
    file.write(strContent, "utf8", () => console.log(filePath + " written"));
}

function mapApiObject(apiItem, type) {
    // basic info
    const item = {
        id: apiItem.id,
        filename: apiItem["file-name"],
        image_uri: apiItem.image_uri,
    };

    // map name object to reduce size
    if (apiItem.name) {
        item.name = {
            en: apiItem.name["name-USen"],
            de: apiItem.name["name-EUde"],
        };
    }

    // map availability data (location to enums for localization)
    if (apiItem.availability) {
        item.availability = {
            location:
                locationMap[apiItem.availability.location] ??
                apiItem.availability.location,
            months_northern: apiItem.availability["month-array-northern"],
            months_southern: apiItem.availability["month-array-southern"],
            hours: apiItem.availability["time-array"],
        };
    }

    // other properties
    if (Object.keys(apiItem).includes("price")) item.price = apiItem.price;
    if (Object.keys(apiItem).includes("isOrderable"))
        item.isOrderable = apiItem.isOrderable;
    if (Object.keys(apiItem).includes("part-of"))
        item.part_of = apiItem["part-of"];

    // enhance art data with fake-info
    if (type === "art") item.fake_info = artFakeInfo[apiItem["file-name"]];

    return item;
}

function downloadAcnhApiData(type) {
    const url = "https://acnhapi.com/v1a/" + type;
    const filePath = "../src/data/" + typeFilenameMap[type] + ".json";
    downloadJson(url, (data) => {
        // map item (better keys, reduced file size)
        data = data.map((item) => mapApiObject(item, type));

        // save it to file
        saveToFile(filePath, JSON.stringify(data, null, 2));
    });
}

apiTypes.forEach((t) => downloadAcnhApiData(t));
