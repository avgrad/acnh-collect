var https = require("https");
var fs = require("fs");

var artFakeInfo = require("./artFakeInfo.json");

var apiTypes = ["fish", "bugs", "fossils", "sea", "art"];

var typeFilenameMap = {
    fish: "FISH",
    bugs: "BUG",
    fossils: "FOSSIL",
    sea: "SEACREATURE",
    art: "ART",
};

var locationMap = {
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
            var json = "";
            res.on("data", function (chunk) {
                json += chunk;
            });
            res.on("end", function () {
                if (res.statusCode === 200) {
                    try {
                        var data = JSON.parse(json);
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
    var file = fs.createWriteStream(filePath);
    file.write(strContent, "utf8", () => console.log(filePath + " written"));
}

function downloadAcnhApiData(type) {
    var url = "https://acnhapi.com/v1a/" + type;
    var filePath = "../src/data/" + typeFilenameMap[type] + ".json";
    downloadJson(url, (data) => {
        // enhance art data with fake-info
        if (type === "art") {
            data = data.map((item) => ({
                ...item,
                "fake-info": artFakeInfo[item["file-name"]],
            }));
        }

        // map location data to enums (for localization)
        data = data.map((item) => {
            if (item.availability?.location) {
                item.availability.location =
                    locationMap[item.availability.location] ??
                    item.availability.location;
            }
            return item;
        });

        // save it to file
        saveToFile(filePath, JSON.stringify(data, null, 2));
    });
}

apiTypes.forEach((t) => downloadAcnhApiData(t));