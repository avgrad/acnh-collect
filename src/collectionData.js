const m = {
  jan: "JANUARY",
  feb: "FEBRUARY",
  mar: "MARCH",
  apr: "APRIL",
  may: "MAY",
  jun: "JUNE",
  jul: "JULY",
  aug: "AUGUST",
  sep: "SEPTEMBER",
  oct: "OCTOBER",
  nov: "NOVEMBER",
  dec: "DECEMBER"
};
export const months = Object.values(m);

const t = {
  fossil: "FOSSIL",
  bug: "BUG",
  fish: "FISH",
  art: "ART"
};

const collectionData = [
  {
    id: "9xzmsc8b5w5",
    name: {
      de: "Singgrille",
      en: "Bell cricket"
    },
    type: t.bug,
    price: 430,
    rarity: null,
    location: "GROUND",
    northernMonths: [m.sep, m.oct],
    souternMonths: [m.mar, m.apr],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "mll07h6nl6f",
    name: {
      de: "Brachiosaurus-Schädel",
      en: "Brachio Skull"
    },
    type: t.fossil,
    price: 6000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "tiwmxa34dy9",
    name: {
      de: "Schnappschildkröte",
      en: "Snapping turtle"
    },
    type: t.fish,
    price: 5000,
    rarity: null,
    location: "RIVER",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.oct, m.nov, m.dec],
    hours: [0, 1, 2, 3, 21, 22, 23]
  },
  {
    id: "de4d5zzr0dq",
    name: {
      de: "Haizahnspirale",
      en: "Shark-Tooth Pattern"
    },
    type: t.fossil,
    price: 1000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "y2kptfgom9",
    name: {
      de: "Kugelassel",
      en: "Pill bug"
    },
    type: t.bug,
    price: 250,
    rarity: "UNCOMMON",
    location: "ROCKS",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "e9gew0qoq4r",
    name: {
      de: "Anomalocaris",
      en: "Anomalocaris"
    },
    type: t.fossil,
    price: 2000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "i0v5hdukd1",
    name: {
      de: "Riemenfisch",
      en: "Oarfish"
    },
    type: t.fish,
    price: 9000,
    rarity: "EXTREMELY_RARE",
    location: "SEA",
    northernMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.dec],
    souternMonths: [m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "dek8iq3z3k",
    name: {
      de: "Motte",
      en: "Moth"
    },
    type: t.bug,
    price: 130,
    rarity: "COMMON",
    location: "FLYING_BY_LIGHT",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 19, 20, 21, 22, 23]
  },
  {
    id: "ppl3u6h4tgg",
    name: {
      de: "Kalmar",
      en: "Squid"
    },
    type: t.fish,
    price: 500,
    rarity: "COMMON",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "10s2qye8g2d",
    name: {
      de: "Bitterling",
      en: "Bitterling"
    },
    type: t.fish,
    price: 900,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    souternMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "i9j4dba1us",
    name: {
      de: "Teleskopauge",
      en: "Pop-eyed goldfish"
    },
    type: t.fish,
    price: 1300,
    rarity: "RARE",
    location: "POND",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "gzbi6jsfuyn",
    name: {
      de: "Hecht",
      en: "Pike"
    },
    type: t.fish,
    price: 1800,
    rarity: "UNCOMMON",
    location: "RIVER",
    northernMonths: [m.sep, m.oct, m.nov, m.dec],
    souternMonths: [m.mar, m.apr, m.may, m.jun],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "6bqm25rcmv7",
    name: {
      de: "Allotopus rosenbergi",
      en: "Golden stag"
    },
    type: t.bug,
    price: 10000,
    rarity: "EXTREMELY_RARE",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "c9ja7h0tzi",
    name: {
      de: "Gottesanbeterin",
      en: "Mantis"
    },
    type: t.bug,
    price: 430,
    rarity: "UNCOMMON",
    location: "FLOWERS",
    northernMonths: [
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "3elia5tr7l3",
    name: {
      de: "Hirschkäfer",
      en: "Miyama stag"
    },
    type: t.bug,
    price: 1000,
    rarity: "COMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "mbyyr1zk7e",
    name: {
      de: "Diplodocus-Thorax",
      en: "Diplo Chest"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "ej2br642bib",
    name: {
      de: "Stint",
      en: "Pond smelt"
    },
    type: t.fish,
    price: 500,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [m.jan, m.feb, m.dec],
    souternMonths: [m.jun, m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "mjv5sp1pq2i",
    name: {
      de: "Karpfen",
      en: "Carp"
    },
    type: t.fish,
    price: 300,
    rarity: "COMMON",
    location: "POND",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "vl3u66tyw4i",
    name: {
      de: "Fichtenbock",
      en: "Citrus long-horned beetle"
    },
    type: t.bug,
    price: 350,
    rarity: "UNCOMMON",
    location: "TREE_STUMP",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "h9ixchw6iiw",
    name: {
      de: "Riesenhirsch-Hälfte (R)",
      en: "Right Megalo Side"
    },
    type: t.fossil,
    price: 5500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "1jwkfiikvqc",
    name: {
      de: "Einsiedlerkrebs",
      en: "Hermit crab"
    },
    type: t.bug,
    price: 1000,
    rarity: "UNCOMMON",
    location: "BEACH",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]
  },
  {
    id: "2l6oafc78pf",
    name: {
      de: "Stinkwanze",
      en: "Stinkbug"
    },
    type: t.bug,
    price: 120,
    rarity: "UNCOMMON",
    location: "FLOWERS",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.sep, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "2bzcd6qcboz",
    name: {
      de: "Säbelzahn-Vorderteil",
      en: "Sabertooth Skull"
    },
    type: t.fossil,
    price: 2500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "otadon0bofo",
    name: {
      de: "Stegosaurus-Schädel",
      en: "Stego Skull"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "jaop9wo3fcq",
    name: {
      de: "Geigenkäfer",
      en: "Violin beetle"
    },
    type: t.bug,
    price: 450,
    rarity: "UNCOMMON",
    location: "TREE_STUMP",
    northernMonths: [m.may, m.jun, m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "7mjo4h47laj",
    name: {
      de: "Sandlaufkäfer",
      en: "Tiger beetle"
    },
    type: t.bug,
    price: 1500,
    rarity: "UNCOMMON",
    location: "GROUND",
    northernMonths: [
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "u382go3kxuc",
    name: {
      de: "Schlangenkopf",
      en: "Giant snakehead"
    },
    type: t.fish,
    price: 5500,
    rarity: "UNCOMMON",
    location: "POND",
    northernMonths: [m.jun, m.jul, m.aug],
    souternMonths: [m.jan, m.feb, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "4m547gdcsxo",
    name: {
      de: "Elefantenkäfer",
      en: "Horned elephant"
    },
    type: t.bug,
    price: 8000,
    rarity: "RARE",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "e9z0lnjvyv8",
    name: {
      de: "Diplodocus-Schädel",
      en: "Diplo Skull"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "leamj9tx7e",
    name: {
      de: "Archelon-Hinterteil",
      en: "Archelon Tail"
    },
    type: t.fossil,
    price: 3500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "exxr8jrqvc9",
    name: {
      de: "Dimetrodon-Torso",
      en: "Dimetrodon Torso"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "41vzmwamqvz",
    name: {
      de: "Paletten-Doktorfisch",
      en: "Surgeonfish"
    },
    type: t.fish,
    price: 1000,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "rx7khcltv5b",
    name: {
      de: "Ritterfalter",
      en: "Peacock butterfly"
    },
    type: t.bug,
    price: 2500,
    rarity: "UNCOMMON",
    location: "FLYING_BY_HYBRID_FLOWER",
    northernMonths: [m.mar, m.apr, m.may, m.jun],
    souternMonths: [m.sep, m.oct, m.nov, m.dec],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "uqtdny88ai",
    name: {
      de: "Iguanodon-Schädel",
      en: "Iguanodon Skull"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "xhkutgyz81",
    name: {
      de: "Skorpion",
      en: "Scorpion"
    },
    type: t.bug,
    price: 8000,
    rarity: "RARE",
    location: "GROUND",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [0, 1, 2, 3, 19, 20, 21, 22, 23]
  },
  {
    id: "9vqrougvutg",
    name: {
      de: "Riesenzikade",
      en: "Giant cicada"
    },
    type: t.bug,
    price: 500,
    rarity: "UNCOMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "yth5im8mm6g",
    name: {
      de: "Diplodocus-Schwanz",
      en: "Diplo Tail"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "g7ak62npftl",
    name: {
      de: "Walhai",
      en: "Whale shark"
    },
    type: t.fish,
    price: 13000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "xu8u8g9gk5b",
    name: {
      de: "Flussgrundel",
      en: "Freshwater goby"
    },
    type: t.fish,
    price: 400,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "ffqhbjlz2jo",
    name: {
      de: "Kliesche",
      en: "Dab"
    },
    type: t.fish,
    price: 300,
    rarity: "COMMON",
    location: "SEA",
    northernMonths: [m.jan, m.feb, m.mar, m.apr, m.oct, m.nov, m.dec],
    souternMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "ze4oig0272m",
    name: {
      de: "Riesen-Hirschkäfer",
      en: "Giant stag"
    },
    type: t.bug,
    price: 10000,
    rarity: "RARE",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 23]
  },
  {
    id: "n3xjhwp7p7e",
    name: {
      de: "Nasenmuräne",
      en: "Ribbon eel"
    },
    type: t.fish,
    price: 600,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "higsljncycf",
    name: {
      de: "Goldmakrele",
      en: "Mahi-mahi"
    },
    type: t.fish,
    price: 6000,
    rarity: null,
    location: "PIER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "rh36770dz8a",
    name: {
      de: "Agrias-Falter",
      en: "Agrias butterfly"
    },
    type: t.bug,
    price: 3000,
    rarity: "RARE",
    location: "FLYING",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "ou2i3k5074",
    name: {
      de: "Makrele",
      en: "Horse mackerel"
    },
    type: t.fish,
    price: 150,
    rarity: "COMMON",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "xo6x7us4vl",
    name: {
      de: "Hyalessa-Zikade",
      en: "Robust cicada"
    },
    type: t.bug,
    price: 300,
    rarity: "COMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "ukdsyt7ze6i",
    name: {
      de: "Monarchfalter",
      en: "Monarch butterfly"
    },
    type: t.bug,
    price: 140,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "uu6ws8t0ils",
    name: {
      de: "Stegosaurus-Torso",
      en: "Stego Torso"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "g01m40n2ds7",
    name: {
      de: "Ankylosaurus-Torso",
      en: "Ankylo Torso"
    },
    type: t.fossil,
    price: 3000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "115a186cmbaf",
    name: {
      de: "Rochen",
      en: "Ray"
    },
    type: t.fish,
    price: 3000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.feb, m.mar, m.apr, m.may],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: "jfandlwdmgi",
    name: {
      de: "Quastenflosser",
      en: "Coelacanth"
    },
    type: t.fish,
    price: 15000,
    rarity: "EXTREMELY_RARE",
    location: "SEA_RAINING",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "94cjptbx0me",
    name: {
      de: "Seebarsch",
      en: "Sea bass"
    },
    type: t.fish,
    price: 400,
    rarity: "COMMON",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "nbyuowvghar",
    name: {
      de: "Ameise",
      en: "Ant"
    },
    type: t.bug,
    price: 80,
    rarity: "COMMON",
    location: "ROTTEN_FOOD",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "eaxjzooxx",
    name: {
      de: "Megacerops-Schädel",
      en: "Megacero Skull"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "8q4vkuy1e03",
    name: {
      de: "Ligia exotica",
      en: "Wharf roach"
    },
    type: t.bug,
    price: 200,
    rarity: "UNCOMMON",
    location: "BEACH_ROCK",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "wceds85uok",
    name: {
      de: "Pachysaurus-Hinterteil",
      en: "Pachysaurus tail"
    },
    type: t.fossil,
    price: 3500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "huq1tfw9bjg",
    name: {
      de: "Anglerfisch",
      en: "Football fish"
    },
    type: t.fish,
    price: 2500,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    souternMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "ytft2om3hmb",
    name: {
      de: "Quetzalcoatlus-Flügel (L)",
      en: "Left Quetzal Wing"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "s13tasor82",
    name: {
      de: "Wasserjungfer",
      en: "Damselfly"
    },
    type: t.bug,
    price: 400,
    rarity: null,
    location: "FLYING",
    northernMonths: [m.jan, m.feb, m.nov, m.dec],
    souternMonths: [m.jan, m.feb, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "01vkkxsnsxux",
    name: {
      de: "Frosch",
      en: "Frog"
    },
    type: t.fish,
    price: 120,
    rarity: "COMMON",
    location: "POND",
    northernMonths: [m.may, m.jun, m.jul, m.aug],
    souternMonths: [m.jan, m.feb, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "4jufa016b6",
    name: {
      de: "Ankylosaurus-Schwanz",
      en: "Ankylo Tail"
    },
    type: t.fossil,
    price: 2500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "iwggdfzjht",
    name: {
      de: "Kugelfisch",
      en: "Blowfish"
    },
    type: t.fish,
    price: 5000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jan, m.feb, m.nov, m.dec],
    souternMonths: [m.may, m.jun, m.jul, m.aug],
    hours: [0, 1, 2, 3, 21, 22, 23]
  },
  {
    id: "z2s4pudjw5e",
    name: {
      de: "Mammut-Schädel",
      en: "Mammoth Skull"
    },
    type: t.fossil,
    price: 3000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "ymqahkzq8c",
    name: {
      de: "Wollhandkrabbe",
      en: "Mitten crab"
    },
    type: t.fish,
    price: 2000,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "iqzdbhr03j",
    name: {
      de: "Ayu",
      en: "Sweetfish"
    },
    type: t.fish,
    price: 900,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "1l4gs7hjjsmh",
    name: {
      de: "Königslibelle",
      en: "Darner dragonfly"
    },
    type: t.bug,
    price: 230,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.oct, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "832rth6u2s6",
    name: {
      de: "Arapaima",
      en: "Arapaima"
    },
    type: t.fish,
    price: 10000,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "egyt6fcaahh",
    name: {
      de: "Braunzikade",
      en: "Brown cicada"
    },
    type: t.bug,
    price: 250,
    rarity: "COMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "j6rsw1mjhp",
    name: {
      de: "Wasserläufer",
      en: "Pondskater"
    },
    type: t.bug,
    price: 130,
    rarity: "UNCOMMON",
    location: "POND_AND_RIVER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "cgudmoo3y4v",
    name: {
      de: "Bernstein",
      en: "Amber"
    },
    type: t.fossil,
    price: 4800,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "o9docaea0q",
    name: {
      de: "Goliathkäfer",
      en: "Goliath beetle"
    },
    type: t.bug,
    price: 8000,
    rarity: "RARE",
    location: "PALM_TREE",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "f65yo5773v",
    name: {
      de: "Ankylosaurus-Schädel",
      en: "Ankylo Skull"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "hl629kn3bm",
    name: {
      de: "Diplodocus-Schwanzspitze",
      en: "Diplo Tail Tip"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "28om5nuim1e",
    name: {
      de: "Brachiosaurus-Becken",
      en: "Brachio Pelvis"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "yqj1frw6qjl",
    name: {
      de: "Hundertfüßer",
      en: "Centipede"
    },
    type: t.bug,
    price: 300,
    rarity: "RARE",
    location: "ROCKS",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [16, 17, 18, 19, 20, 21, 22]
  },
  {
    id: "emwqiey8h7m",
    name: {
      de: "Triceratops-Torso",
      en: "Tricera Torso"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "ruoriz0am6n",
    name: {
      de: "Giraffenhirschkäfer",
      en: "Giraffe stag"
    },
    type: t.bug,
    price: 12000,
    rarity: null,
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "ip6gfss6xo",
    name: {
      de: "Pachysaurus-Vorderteil",
      en: "Pachysaurus skull"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "kmq18013evc",
    name: {
      de: "Cyclommatus",
      en: "Cyclommatus stag"
    },
    type: t.bug,
    price: 8000,
    rarity: "COMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "tk07fvb1uab",
    name: {
      de: "Ophthalmosaurus-Torso",
      en: "Ophthalmo Torso"
    },
    type: t.fossil,
    price: 2000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "au2gdu5cibj",
    name: {
      de: "Lachs",
      en: "Salmon"
    },
    type: t.fish,
    price: 700,
    rarity: "COMMON",
    location: "RIVER_MOUTH",
    northernMonths: [m.sep],
    souternMonths: [m.mar],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "zcfctjeb3vp",
    name: {
      de: "Iguanodon-Schwanz",
      en: "Iguanodon Tail"
    },
    type: t.fossil,
    price: 3000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "0rpbmuqoa5wq",
    name: {
      de: "Lachssalmler",
      en: "Dorado"
    },
    type: t.fish,
    price: 15000,
    rarity: "EXTREMELY_RARE",
    location: "RIVER",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: "vzbjqoj8br",
    name: {
      de: "Dunkleosteus",
      en: "Dunkleosteus"
    },
    type: t.fossil,
    price: 3500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "gef8r49et5g",
    name: {
      de: "Quetzalcoatlus-Torso",
      en: "Quetzal Torso"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "gpbsr4qgurm",
    name: {
      de: "Neonsalmler",
      en: "Neon tetra"
    },
    type: t.fish,
    price: 500,
    rarity: "UNCOMMON",
    location: "RIVER",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.oct, m.nov, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "x8fg8nun3m",
    name: {
      de: "Ranchu",
      en: "Ranchu goldfish"
    },
    type: t.fish,
    price: 4500,
    rarity: null,
    location: "POND",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "os4kvpt5dub",
    name: {
      de: "Herkuleskäfer",
      en: "Horned hercules"
    },
    type: t.bug,
    price: 12000,
    rarity: "EXTREMELY_RARE",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "hmjc5af8omn",
    name: {
      de: "Glaskopffisch",
      en: "Barreleye"
    },
    type: t.fish,
    price: 15000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 21, 22, 23]
  },
  {
    id: "etje0lm58eu",
    name: {
      de: "Spinne",
      en: "Spider"
    },
    type: t.bug,
    price: 480,
    rarity: "UNCOMMON",
    location: "TREE_SHAKE",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]
  },
  {
    id: "43riljin60f",
    name: {
      de: "Fliege",
      en: "Fly"
    },
    type: t.bug,
    price: 60,
    rarity: "COMMON",
    location: "TRASH_ITEM",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "1pmye3k9d3c",
    name: {
      de: "Nashornkäfer",
      en: "Horned dynastid"
    },
    type: t.bug,
    price: 1350,
    rarity: "UNCOMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "pf2ipojdrp",
    name: {
      de: "Juramaia",
      en: "Juramaia"
    },
    type: t.fossil,
    price: 1000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "qf3unuq4sni",
    name: {
      de: "Flunder",
      en: "Olive flounder"
    },
    type: t.fish,
    price: 800,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "ceipcwjaqhi",
    name: {
      de: "Huchen",
      en: "Stringfish"
    },
    type: t.fish,
    price: 15000,
    rarity: "EXTREMELY_RARE",
    location: "RIVER_CLIFFTOP",
    northernMonths: [m.jan, m.feb, m.mar, m.dec],
    souternMonths: [m.jun, m.jul, m.aug, m.sep],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "fwhsqv0ab9",
    name: {
      de: "Napoleonfisch",
      en: "Napoleonfish"
    },
    type: t.fish,
    price: 10000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jan, m.feb],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: "cbvfpyearhe",
    name: {
      de: "Flussbarsch",
      en: "Yellow perch"
    },
    type: t.fish,
    price: 300,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    souternMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "awqh5mkdjy9",
    name: {
      de: "Schwalbenschwanz",
      en: "Tiger butterfly"
    },
    type: t.bug,
    price: 240,
    rarity: "UNCOMMON",
    location: "FLYING",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.sep, m.oct, m.nov, m.dec],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "cidv6y3tv4t",
    name: {
      de: "Hai",
      en: "Great white shark"
    },
    type: t.fish,
    price: 15000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "wlaz8qmhd4",
    name: {
      de: "Australopithecus",
      en: "Australopith"
    },
    type: t.fossil,
    price: 1100,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "xwehcvlwdic",
    name: {
      de: "Thunfisch",
      en: "Tuna"
    },
    type: t.fish,
    price: 7000,
    rarity: "RARE",
    location: "PIER",
    northernMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    souternMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "srqmqo0ohbp",
    name: {
      de: "Säbelzahn-Hinterteil",
      en: "Sabertooth tail"
    },
    type: t.fossil,
    price: 2000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "tu2wea09u4j",
    name: {
      de: "Triceratops-Schwanz",
      en: "Tricera Tail"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "m1v5ion71kp",
    name: {
      de: "Wanderschrecke",
      en: "Migratory locust"
    },
    type: t.bug,
    price: 600,
    rarity: "UNCOMMON",
    location: "GROUND",
    northernMonths: [m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.feb, m.mar, m.apr, m.may],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "7l3joyv1lym",
    name: {
      de: "Schwimmkäfer",
      en: "Diving beetle"
    },
    type: t.bug,
    price: 800,
    rarity: "UNCOMMON",
    location: "POND_AND_RIVER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "8gwvm7hi3k4",
    name: {
      de: "Gold-Mistkäfer",
      en: "Earth-boring dung beetle"
    },
    type: t.bug,
    price: 300,
    rarity: null,
    location: "GROUND",
    northernMonths: [m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "tgroiweh6mb",
    name: {
      de: "Acanthostega",
      en: "Acanthostega"
    },
    type: t.fossil,
    price: 2000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "ystahsic6oh",
    name: {
      de: "Mistkäfer",
      en: "Dung beetle"
    },
    type: t.bug,
    price: 300,
    rarity: null,
    location: "GROUND",
    northernMonths: [m.jan, m.feb, m.dec],
    souternMonths: [m.jun, m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "pnn1mglmgs",
    name: {
      de: "Heuschrecke",
      en: "Rice grasshopper"
    },
    type: t.bug,
    price: 160,
    rarity: "UNCOMMON",
    location: "GROUND",
    northernMonths: [m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.feb, m.mar, m.apr, m.may],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "giu74teoy6r",
    name: {
      de: "Ophthalmosaurus-Schädel",
      en: "Ophthalmo Skull"
    },
    type: t.fossil,
    price: 2500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "y3qigewrptc",
    name: {
      de: "Quetzalcoatlus-Flügel (R)",
      en: "Right Quetzal Wing"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "eana1tcsz16",
    name: {
      de: "Mammut-Torso",
      en: "Mammoth Torso"
    },
    type: t.fossil,
    price: 2500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "c6x2xj9hd9w",
    name: {
      de: "Himmelsfalter",
      en: "Emperor butterfly"
    },
    type: t.bug,
    price: 4000,
    rarity: "UNCOMMON",
    location: "FLYING",
    northernMonths: [m.jan, m.feb, m.mar, m.jun, m.jul, m.aug, m.sep, m.dec],
    souternMonths: [m.jan, m.feb, m.mar, m.jun, m.jul, m.aug, m.sep, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "o6qw454hmzh",
    name: {
      de: "Saibling",
      en: "Char"
    },
    type: t.fish,
    price: 3800,
    rarity: "UNCOMMON",
    location: "RIVER_CLIFFTOP_AND_POND",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may, m.sep, m.oct, m.nov, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "3vplee5gcdg",
    name: {
      de: "Sardelle",
      en: "Anchovy"
    },
    type: t.fish,
    price: 200,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: "90wfwkutrur",
    name: {
      de: "Plesiosaurus-Schädel",
      en: "Plesio Skull"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "5ojkh70u1da",
    name: {
      de: "Pracht-Hirschkäfer",
      en: "Rainbow stag"
    },
    type: t.bug,
    price: 6000,
    rarity: "RARE",
    location: "TREE",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]
  },
  {
    id: "jt7h3egzfhe",
    name: {
      de: "Bergzikade",
      en: "Walker cicada"
    },
    type: t.bug,
    price: 400,
    rarity: "UNCOMMON",
    location: "TREE",
    northernMonths: [m.aug, m.sep],
    souternMonths: [m.feb, m.mar],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "oshe6mruspl",
    name: {
      de: "Sägehai",
      en: "Saw shark"
    },
    type: t.fish,
    price: 12000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "1vyv6uqye45",
    name: {
      de: "Rotfeuerfisch",
      en: "Zebra turkeyfish"
    },
    type: t.fish,
    price: 500,
    rarity: "COMMON",
    location: "SEA",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "pf9kh76mdwg",
    name: {
      de: "T-Rex-Torso",
      en: "T. Rex Torso"
    },
    type: t.fossil,
    price: 5500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "jz5fg2uu6j",
    name: {
      de: "Anemonenfisch",
      en: "Clown fish"
    },
    type: t.fish,
    price: 650,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "3fcwqrytl0n",
    name: {
      de: "Archelon-Vorderteil",
      en: "Archelon Skull"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "l699ew4it49",
    name: {
      de: "Königslachs",
      en: "King salmon"
    },
    type: t.fish,
    price: 1800,
    rarity: "RARE",
    location: "RIVER_MOUTH",
    northernMonths: [m.sep],
    souternMonths: [m.mar],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "u6by6vvmt",
    name: {
      de: "Kohlweißling",
      en: "Common butterfly"
    },
    type: t.bug,
    price: 160,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "waimewhezom",
    name: {
      de: "Igelfisch",
      en: "Puffer fish"
    },
    type: t.fish,
    price: 250,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "zpdku0qtlmc",
    name: {
      de: "Brachiosaurus-Schwanz",
      en: "Brachio Tail"
    },
    type: t.fossil,
    price: 5500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "8vgb6mysf6m",
    name: {
      de: "Japan-Schillerfalter",
      en: "Great purple emperor"
    },
    type: t.bug,
    price: 3000,
    rarity: "RARE",
    location: "FLYING",
    northernMonths: [m.may, m.jun, m.jul, m.aug],
    souternMonths: [m.may, m.jun, m.jul, m.aug],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "vk8u29urva9",
    name: {
      de: "Ammonit",
      en: "Ammonite"
    },
    type: t.fossil,
    price: 1100,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "u0311ok26a8",
    name: {
      de: "Kaiserschnapper",
      en: "Red snapper"
    },
    type: t.fish,
    price: 3000,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "dwajk73ees6",
    name: {
      de: "Blattschrecke",
      en: "Walking leaf"
    },
    type: t.bug,
    price: 600,
    rarity: "RARE",
    location: "UNDER_TREE",
    northernMonths: [m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "gfgi3r19l38",
    name: {
      de: "Troides brookiana",
      en: "Rajah Brooke's birdwing"
    },
    type: t.bug,
    price: 2500,
    rarity: null,
    location: "FLYING",
    northernMonths: [
      m.jan,
      m.feb,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.jun,
      m.jul,
      m.aug,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "i309wwlaytj",
    name: {
      de: "T-Rex-Schädel",
      en: "T. Rex Skull"
    },
    type: t.fossil,
    price: 6000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "tdnq8lryr5",
    name: {
      de: "Maulwurfsgrille",
      en: "Mole cricket"
    },
    type: t.bug,
    price: 500,
    rarity: null,
    location: "UNDERGROUND",
    northernMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.nov, m.dec],
    souternMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "jp7h8opdui",
    name: {
      de: "Dimetrodon-Schädel",
      en: "Dimetrodon Skull"
    },
    type: t.fossil,
    price: 5500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "bmj1zjmdedn",
    name: {
      de: "Plesiosaurus-Torso",
      en: "Plesio body"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "udaswxwt17o",
    name: {
      de: "Diplodocus-Hals",
      en: "Diplo Neck"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "s4zq6hgthfm",
    name: {
      de: "Floh",
      en: "Flea"
    },
    type: t.bug,
    price: 70,
    rarity: "RARE",
    location: "VILLAGER_HEAD",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "89vond0eopb",
    name: {
      de: "Deinonychus-Torso",
      en: "Deinony Torso"
    },
    type: t.fossil,
    price: 3000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "cz2p2mmm71",
    name: {
      de: "Marlin",
      en: "Blue marlin"
    },
    type: t.fish,
    price: 10000,
    rarity: "RARE",
    location: "PIER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.jul,
      m.aug,
      m.sep,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "38ev1v4gtv8",
    name: {
      de: "Saugbarbe",
      en: "Nibble fish"
    },
    type: t.fish,
    price: 1500,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "vdlb2n4x35c",
    name: {
      de: "Regenbogenfalter",
      en: "Madagascan sunset moth"
    },
    type: t.bug,
    price: 2500,
    rarity: null,
    location: "FLYING",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "ztbj2uvbdgc",
    name: {
      de: "Diplodocus-Becken",
      en: "Diplo Pelvis"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "ly3bujz45mi",
    name: {
      de: "Gesichtswanze",
      en: "Man-faced stink bug"
    },
    type: t.bug,
    price: 1000,
    rarity: "COMMON",
    location: "FLOWERS",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.sep, m.oct, m.nov, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]
  },
  {
    id: "6ua198sf3hs",
    name: {
      de: "Sackträger",
      en: "Bagworm"
    },
    type: t.bug,
    price: 600,
    rarity: "UNCOMMON",
    location: "TREE_SHAKE",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "juux5lumfdk",
    name: {
      de: "Parasaurus-Torso",
      en: "Parasaur Torso"
    },
    type: t.fossil,
    price: 3000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "0ydje7qj4xhb",
    name: {
      de: "Schnabelbarsch",
      en: "Barred knifejaw"
    },
    type: t.fish,
    price: 5000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "xj33iemw8ea",
    name: {
      de: "Iguanodon-Torso",
      en: "Iguanodon Torso"
    },
    type: t.fossil,
    price: 3500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "sp9uslf55i",
    name: {
      de: "Masulachs",
      en: "Cherry salmon"
    },
    type: t.fish,
    price: 1000,
    rarity: "UNCOMMON",
    location: "RIVER_CLIFFTOP_AND_POND",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may, m.sep, m.oct, m.nov, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "m0ifdwo4t8",
    name: {
      de: "Japan-Rosenkäfer",
      en: "Drone beetle"
    },
    type: t.bug,
    price: 200,
    rarity: "COMMON",
    location: "TREE",
    northernMonths: [m.jun, m.jul, m.aug],
    souternMonths: [m.jun, m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "pg57bzhgu5s",
    name: {
      de: "Goldforelle",
      en: "Golden trout"
    },
    type: t.fish,
    price: 15000,
    rarity: null,
    location: "RIVER_CLIFFTOP",
    northernMonths: [m.mar, m.apr, m.may, m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may, m.sep, m.oct, m.nov],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "lacbqex1y1a",
    name: {
      de: "Spinosaurus-Torso",
      en: "Spino Torso"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "0mq793ztjbuf",
    name: {
      de: "Grashüpfer",
      en: "Grasshopper"
    },
    type: t.bug,
    price: 160,
    rarity: "COMMON",
    location: "GROUND",
    northernMonths: [m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "n4ejzq2kn2",
    name: {
      de: "Bachschmerle ",
      en: "Loach"
    },
    type: t.fish,
    price: 400,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [m.mar, m.apr, m.may],
    souternMonths: [m.sep, m.oct, m.nov],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "d8sojnizxu",
    name: {
      de: "Knochenhecht",
      en: "Gar"
    },
    type: t.fish,
    price: 6000,
    rarity: "RARE",
    location: "POND",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "0b1f4pgtd6yj",
    name: {
      de: "Myllokunmingia",
      en: "Myllokunmingia"
    },
    type: t.fossil,
    price: 1500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "cyp1drd2re",
    name: {
      de: "Archaeopteryx",
      en: "Archaeopteryx"
    },
    type: t.fossil,
    price: 1300,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "f85v3rhcryl",
    name: {
      de: "Döbel",
      en: "Pale chub"
    },
    type: t.fish,
    price: 200,
    rarity: "UNCOMMON",
    location: "RIVER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "13weyt7v3lk",
    name: {
      de: "Schnecke",
      en: "Snail"
    },
    type: t.bug,
    price: 250,
    rarity: "RARE",
    location: "ROCKS_RAIN",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "29coet7m0fw",
    name: {
      de: "Nasenschrecke",
      en: "Long locust"
    },
    type: t.bug,
    price: 200,
    rarity: "COMMON",
    location: "GROUND",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.oct, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "9wj2takeo5",
    name: {
      de: "Goldfisch",
      en: "Goldfish"
    },
    type: t.fish,
    price: 1300,
    rarity: "RARE",
    location: "POND",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "hlvszz42eg",
    name: {
      de: "Mücke",
      en: "Mosquito"
    },
    type: t.bug,
    price: 130,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "lee7mvs8d1g",
    name: {
      de: "Honigbiene",
      en: "Honeybee"
    },
    type: t.bug,
    price: 200,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.jul],
    souternMonths: [m.jan, m.sep, m.oct, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "4w42l2zmkum",
    name: {
      de: "Megacerops-Torso",
      en: "Megacero Torso"
    },
    type: t.fossil,
    price: 3500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "p57ms3isos",
    name: {
      de: "Marienkäfer",
      en: "Ladybug"
    },
    type: t.bug,
    price: 200,
    rarity: "COMMON",
    location: "FLOWERS",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.oct],
    souternMonths: [m.mar, m.apr, m.may, m.jun, m.oct],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "d7xjfz5gvd",
    name: {
      de: "Hammerhai",
      en: "Hammerhead shark"
    },
    type: t.fish,
    price: 8000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "puyu3cn5w2o",
    name: {
      de: "Karausche",
      en: "Crucian carp"
    },
    type: t.fish,
    price: 160,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "e6kam661yjd",
    name: {
      de: "Piranha",
      en: "Piranha"
    },
    type: t.fish,
    price: 2500,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 9, 10, 11, 12, 13, 14, 15, 21, 22, 23]
  },
  {
    id: "g6mbcuuw34b",
    name: {
      de: "Parasaurus-Schwanz",
      en: "Parasaur Tail"
    },
    type: t.fossil,
    price: 2500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "y685u3knafk",
    name: {
      de: "Orchideenmantis",
      en: "Orchid mantis"
    },
    type: t.bug,
    price: 2400,
    rarity: "RARE",
    location: "FLOWERS_WHITE",
    northernMonths: [
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "0rafe725yfii",
    name: {
      de: "Stachelmakrele",
      en: "Giant trevally"
    },
    type: t.fish,
    price: 4500,
    rarity: "RARE",
    location: "PIER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "774v50kpqa3",
    name: {
      de: "Abendzikade",
      en: "Evening cicada"
    },
    type: t.bug,
    price: 550,
    rarity: null,
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [4, 5, 6, 7]
  },
  {
    id: "x0s1ueozc9",
    name: {
      de: "Sonnenbarsch",
      en: "Bluegill"
    },
    type: t.fish,
    price: 180,
    rarity: "UNCOMMON",
    location: "RIVER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "gti0m32wwj",
    name: {
      de: "Zitronenfalter",
      en: "Yellow butterfly"
    },
    type: t.bug,
    price: 160,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.sep, m.oct],
    souternMonths: [m.mar, m.apr, m.sep, m.oct, m.nov, m.dec],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "trcwhvnwmg",
    name: {
      de: "Tilapia",
      en: "Tilapia"
    },
    type: t.fish,
    price: 800,
    rarity: null,
    location: "RIVER",
    northernMonths: [m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "hirrsactzgb",
    name: {
      de: "Spinosaurus-Schädel",
      en: "Spino Skull"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "u37enciihot",
    name: {
      de: "Killifisch",
      en: "Killifish"
    },
    type: t.fish,
    price: 300,
    rarity: "UNCOMMON",
    location: "POND",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug],
    souternMonths: [m.jan, m.feb, m.oct, m.nov, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "k35jvwe4t5d",
    name: {
      de: "Arowana",
      en: "Arowana"
    },
    type: t.fish,
    price: 10000,
    rarity: "EXTREMELY_RARE",
    location: "RIVER",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "ny80iv28log",
    name: {
      de: "Megacerops-Schwanz",
      en: "Megacero Tail"
    },
    type: t.fossil,
    price: 3000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "iemrpvi7a2",
    name: {
      de: "Guppy",
      en: "Guppy"
    },
    type: t.fish,
    price: 1300,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.oct, m.nov, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "eih0rx18k05",
    name: {
      de: "Atlasspinner",
      en: "Atlas moth"
    },
    type: t.bug,
    price: 3000,
    rarity: null,
    location: "TREE",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [0, 1, 2, 3, 19, 20, 21, 22, 23]
  },
  {
    id: "i909n7ewiu",
    name: {
      de: "Barsch",
      en: "Black bass"
    },
    type: t.fish,
    price: 400,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "mzn58rlt2i",
    name: {
      de: "Seepferdchen",
      en: "Sea horse"
    },
    type: t.fish,
    price: 1100,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "xnnjgwvf17",
    name: {
      de: "Triceratops-Schädel",
      en: "Tricera Skull"
    },
    type: t.fossil,
    price: 5500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "6vq2ei0kgcq",
    name: {
      de: "Plesiosaurus-Schwanz",
      en: "Plesio tail"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "bzmofmx7fxc",
    name: {
      de: "Trilobit",
      en: "Trilobite"
    },
    type: t.fossil,
    price: 1300,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "tje8c6tso1h",
    name: {
      de: "Hasel",
      en: "Dace"
    },
    type: t.fish,
    price: 240,
    rarity: "COMMON",
    location: "RIVER",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "118jqbi07coj",
    name: {
      de: "Dino-Fußabdruck",
      en: "Dinosaur Track"
    },
    type: t.fossil,
    price: 1000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "1893gijpz4c",
    name: {
      de: "Brachiosaurus-Thorax",
      en: "Brachio Chest"
    },
    type: t.fossil,
    price: 5500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "1tk2tvpdwfj",
    name: {
      de: "Stabschrecke",
      en: "Walking stick"
    },
    type: t.bug,
    price: 600,
    rarity: "UNCOMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug, m.sep, m.oct, m.nov],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.may],
    hours: [4, 5, 6, 7]
  },
  {
    id: "0m9fxw9tib09",
    name: {
      de: "Deinonychus-Schwanz",
      en: "Deinony Tail"
    },
    type: t.fossil,
    price: 2500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "w8igjg0hq5",
    name: {
      de: "Prachtkäfer",
      en: "Jewel beetle"
    },
    type: t.bug,
    price: 2400,
    rarity: "RARE",
    location: "TREE_STUMP",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug],
    souternMonths: [m.apr, m.may, m.jun, m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "b0taraggokw",
    name: {
      de: "Goldskarabäus",
      en: "Scarab beetle"
    },
    type: t.bug,
    price: 10000,
    rarity: "RARE",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 23]
  },
  {
    id: "ss17mwh385o",
    name: {
      de: "Flösselhecht",
      en: "Saddled bichir"
    },
    type: t.fish,
    price: 4000,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [0, 1, 2, 3, 21, 22, 23]
  },
  {
    id: "gfmbkvse4pl",
    name: {
      de: "Riesenhirsch-Hälfte (L)",
      en: "Left Megalo Side"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "wtsbiipi8ea",
    name: {
      de: "Kolibrifalter",
      en: "Common bluebottle"
    },
    type: t.bug,
    price: 300,
    rarity: null,
    location: "FLYING",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug],
    souternMonths: [m.apr, m.may, m.jun, m.jul, m.aug],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "y2l70z1dzas",
    name: {
      de: "Kaulquappe",
      en: "Tadpole"
    },
    type: t.fish,
    price: 100,
    rarity: "COMMON",
    location: "POND",
    northernMonths: [m.mar, m.apr, m.may, m.jun, m.jul],
    souternMonths: [m.jan, m.sep, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "2j1wpbc1577",
    name: {
      de: "Spinosaurus-Schwanz",
      en: "Spino Tail"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "c97volhs7bg",
    name: {
      de: "Schiffshalter",
      en: "Suckerfish"
    },
    type: t.fish,
    price: 1500,
    rarity: null,
    location: "SEA",
    northernMonths: [m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "8f6qob4000u",
    name: {
      de: "Koprolith",
      en: "Coprolite"
    },
    type: t.fossil,
    price: 1100,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "jlj9hc6bnyl",
    name: {
      de: "Koi-Karpfen",
      en: "Koi"
    },
    type: t.fish,
    price: 4000,
    rarity: "RARE",
    location: "POND",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "pmtkiphqu9",
    name: {
      de: "Skalar",
      en: "Angelfish"
    },
    type: t.fish,
    price: 3000,
    rarity: "UNCOMMON",
    location: "RIVER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "uja5mooxoa9",
    name: {
      de: "See-Engel",
      en: "Sea butterfly"
    },
    type: t.fish,
    price: 1000,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.jan, m.feb, m.mar, m.dec],
    souternMonths: [m.jun, m.jul, m.aug, m.sep],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "5zbbsaubz1b",
    name: {
      de: "Weiße Baumnymphe",
      en: "Paper kite butterfly"
    },
    type: t.bug,
    price: 1000,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "9thg1h7a50v",
    name: {
      de: "Atlaskäfer",
      en: "Horned atlas"
    },
    type: t.bug,
    price: 8000,
    rarity: "RARE",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "6hcaj6kxcgw",
    name: {
      de: "Zikadenlarvenhaut",
      en: "Cicada shell"
    },
    type: t.bug,
    price: 10,
    rarity: "UNCOMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "hisoo6r06zl",
    name: {
      de: "Stegosaurus-Schwanz",
      en: "Stego Tail"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "a54s591iyu7",
    name: {
      de: "Quelljungfer",
      en: "Banded dragonfly"
    },
    type: t.bug,
    price: 4500,
    rarity: "RARE",
    location: "FLYING",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16]
  },
  {
    id: "gbqf5okro5r",
    name: {
      de: "Muräne",
      en: "Moray eel"
    },
    type: t.fish,
    price: 2000,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.aug, m.sep, m.oct],
    souternMonths: [m.feb, m.mar, m.apr],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "r7fe96ndkfm",
    name: {
      de: "Alpenbock",
      en: "Rosalia batesi beetle"
    },
    type: t.bug,
    price: 3000,
    rarity: null,
    location: "TREE_STUMP",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "klsrjfonyu9",
    name: {
      de: "Vogelspinne",
      en: "Tarantula"
    },
    type: t.bug,
    price: 8000,
    rarity: "RARE",
    location: "GROUND",
    northernMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    souternMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    hours: [0, 1, 2, 3, 19, 20, 21, 22, 23]
  },
  {
    id: "nptg8vh3n4",
    name: {
      de: "Glühwürmchen",
      en: "Firefly"
    },
    type: t.bug,
    price: 460,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.jun],
    souternMonths: [m.jun],
    hours: [0, 1, 2, 3, 19, 20, 21, 22, 23]
  },
  {
    id: "l6g00s2vyve",
    name: {
      de: "Weichschildkröte",
      en: "Soft-shelled turtle"
    },
    type: t.fish,
    price: 3750,
    rarity: "RARE",
    location: "RIVER",
    northernMonths: [m.aug, m.sep],
    souternMonths: [m.feb, m.mar],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "4wmfsq0jz49",
    name: {
      de: "Flusskrebs",
      en: "Crawfish"
    },
    type: t.fish,
    price: 200,
    rarity: "COMMON",
    location: "POND",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "5tuf9bz9azd",
    name: {
      de: "Katzenwels",
      en: "Catfish"
    },
    type: t.fish,
    price: 800,
    rarity: "COMMON",
    location: "POND",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 8, 16, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "ef790lmc82v",
    name: {
      de: "Falterfisch",
      en: "Butterfly fish"
    },
    type: t.fish,
    price: 1000,
    rarity: "UNCOMMON",
    location: "SEA",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "bansnhvcaa",
    name: {
      de: "Grille",
      en: "Cricket"
    },
    type: t.bug,
    price: 130,
    rarity: "COMMON",
    location: "GROUND",
    northernMonths: [m.sep, m.oct, m.nov],
    souternMonths: [m.mar, m.apr, m.may],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 17, 18, 19, 20, 21, 22, 23]
  },
  {
    id: "ygvos6insif",
    name: {
      de: "Pteranodon-Flügel (R)",
      en: "Right Ptera Wing"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "8sl4oou5i8a",
    name: {
      de: "Riesenwanze",
      en: "Giant water bug"
    },
    type: t.bug,
    price: 2000,
    rarity: null,
    location: "POND_AND_RIVER",
    northernMonths: [m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.oct, m.nov, m.dec],
    hours: [0, 1, 2, 3, 4, 5, 6, 7, 19, 20, 21, 22, 23]
  },
  {
    id: "xhrxcgj9izs",
    name: {
      de: "Mondfisch",
      en: "Ocean sunfish"
    },
    type: t.fish,
    price: 4000,
    rarity: "RARE",
    location: "SEA",
    northernMonths: [m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar],
    hours: [4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
  },
  {
    id: "nvl9zem2kvm",
    name: {
      de: "Wespe",
      en: "Wasp"
    },
    type: t.bug,
    price: 2500,
    rarity: "LIMITED_PER_DAY",
    location: "TREE_SHAKE",
    northernMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    souternMonths: [
      m.jan,
      m.feb,
      m.mar,
      m.apr,
      m.may,
      m.jun,
      m.jul,
      m.aug,
      m.sep,
      m.oct,
      m.nov,
      m.dec
    ],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "xipiev4clr",
    name: {
      de: "Kampffisch",
      en: "Betta"
    },
    type: t.fish,
    price: 2500,
    rarity: null,
    location: "RIVER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "57r9iz9gf8o",
    name: {
      de: "Eusthenopteron",
      en: "Eusthenopteron"
    },
    type: t.fossil,
    price: 2000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "5b4vkokjq6",
    name: {
      de: "Stör",
      en: "Sturgeon"
    },
    type: t.fish,
    price: 10000,
    rarity: "RARE",
    location: "RIVER_MOUTH",
    northernMonths: [m.jan, m.feb, m.mar, m.sep, m.oct, m.nov, m.dec],
    souternMonths: [m.mar, m.apr, m.may, m.jun, m.jul, m.aug, m.sep],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "a3bg4lky2c",
    name: {
      de: "Regenbogenfisch",
      en: "Rainbowfish"
    },
    type: t.fish,
    price: 800,
    rarity: null,
    location: "RIVER",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep, m.oct],
    souternMonths: [m.jan, m.feb, m.mar, m.apr, m.nov, m.dec],
    hours: [9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "xkmizqbyn7",
    name: {
      de: "T-Rex-Schwanz",
      en: "T. Rex Tail"
    },
    type: t.fossil,
    price: 5000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "rqmtez2jmr",
    name: {
      de: "Parasaurus-Schädel",
      en: "Parasaur Skull"
    },
    type: t.fossil,
    price: 3500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "kzkbz9hntwn",
    name: {
      de: "Sägezahn-Hirschkäfer",
      en: "Saw stag"
    },
    type: t.bug,
    price: 2000,
    rarity: "UNCOMMON",
    location: "TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "5n3ws7oiafo",
    name: {
      de: "Blaurüsselkäfer",
      en: "Blue weevil beetle"
    },
    type: t.bug,
    price: 800,
    rarity: null,
    location: "PALM_TREE",
    northernMonths: [m.jul, m.aug],
    souternMonths: [m.jul, m.aug],
    hours: [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      13,
      14,
      15,
      16,
      17,
      18,
      19,
      20,
      21,
      22,
      23
    ]
  },
  {
    id: "p6dphroqc9m",
    name: {
      de: "Vogelfalter",
      en: "Queen Alexandra's birdwing"
    },
    type: t.bug,
    price: 4000,
    rarity: null,
    location: "FLYING",
    northernMonths: [m.may, m.jun, m.jul, m.aug, m.sep],
    souternMonths: [m.jan, m.feb, m.mar, m.nov, m.dec],
    hours: [8, 9, 10, 11, 12, 13, 14, 15]
  },
  {
    id: "0j49gr1x5so",
    name: {
      de: "Pteranodon-Flügel (L)",
      en: "Left Ptera Wing"
    },
    type: t.fossil,
    price: 4500,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "jmlzpwkyzck",
    name: {
      de: "Feuerlibelle",
      en: "Red dragonfly"
    },
    type: t.bug,
    price: 180,
    rarity: "COMMON",
    location: "FLYING",
    northernMonths: [m.sep, m.oct],
    souternMonths: [m.mar, m.apr],
    hours: [8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18]
  },
  {
    id: "4nmvkift9k",
    name: {
      de: "Pteranodon-Torso",
      en: "Ptera body"
    },
    type: t.fossil,
    price: 4000,
    rarity: null,
    location: null,
    northernMonths: null,
    souternMonths: null,
    hours: null
  },
  {
    id: "uk4j280dl7",
    name: {
      de: "Altertumsgemälde",
      en: "Quaint Painting"
    },
    fakeInfo: {
      de: "Fälschung zeigt Frau viel mehr als dünnen Fluss Milch ausgießen",
      en: "Fake shows woman pouring much more than thin stream of milk"
    },
    type: t.art,
    price: null
  },
  {
    id: "e76b1uaaeln",
    name: {
      de: "Anmutsgemälde",
      en: "Graceful Painting"
    },
    fakeInfo: {
      de: "Fälschung zeigt Frau viel größer, füllt fast ganzes Gemälde",
      en: "Fake shows woman larger, almost full painting"
    },
    type: t.art,
    price: null
  },
  {
    id: "cujqp7uerr",
    name: {
      de: "Athletenstatue",
      en: "Robust Statue"
    },
    fakeInfo: {
      de: "Fälschung trägt eine Armbanduhr",
      en: "Fake is wearing a wrist watch"
    },
    type: t.art,
    price: null
  },
  {
    id: "goj3gwmoqok",
    name: {
      de: "Bekanntgemälde",
      en: "Common Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "ikxmqdrtsv",
    name: {
      de: "Berühmtgemälde",
      en: "Famous Painting"
    },
    fakeInfo: {
      de: "Fälschung hat Augenbrauen",
      en: "Fake has eyebrows"
    },
    type: t.art,
    price: null
  },
  {
    id: "k89j81gzbzr",
    name: {
      de: "Blumengemälde",
      en: "Flowerly Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "mbqsz0tsk6m",
    name: {
      de: "Detailgemälde",
      en: "Detailed Painting"
    },
    fakeInfo: {
      de: "Fälschung hat lilanes Laub, fehlende Unterschrift auf linker Seite",
      en: "Fake has purple foliage and missing signature on left side"
    },
    type: t.art,
    price: null
  },
  {
    id: "il66nwk340c",
    name: {
      de: "Dickkopfskulptur",
      en: "Rock-Head Statue"
    },
    fakeInfo: {
      de: "Fälschung lächelt",
      en: "Fake is smiling"
    },
    type: t.art,
    price: null
  },
  {
    id: "2w8mzcfflh",
    name: {
      de: "Edelgemälde",
      en: "Serene Painting"
    },
    fakeInfo: {
      de: "Fälschung hält einen grauen Hermelin",
      en: "Fake has a grey ermine"
    },
    type: t.art,
    price: null
  },
  {
    id: "dt68bkohhzd",
    name: {
      de: "Einfachgemälde",
      en: "Basic Painting"
    },
    fakeInfo: {
      de: "Fälschung hat längere Haare (vollständiger Pony)",
      en: "Fake shows subject with more hair (full fringe)"
    },
    type: t.art,
    price: null
  },
  {
    id: "4xtkzs46biu",
    name: {
      de: "Eleganzstatue",
      en: "Beautiful Statue"
    },
    fakeInfo: {
      de: "Fälschung trägt eine Halskette",
      en: "Fake is wearing a necklace"
    },
    type: t.art,
    price: null
  },
  {
    id: "bqls5c2nu5",
    name: {
      de: "Enormgemälde",
      en: "Amazing Painting"
    },
    fakeInfo: {
      de: "Fälschung zeigt mittigen Mann ohne Hut",
      en: "Fake shows central subject without his hat"
    },
    type: t.art,
    price: null
  },
  {
    id: "37l2fmv3fdy",
    name: {
      de: "Erhabenstatue",
      en: "Valiant Statue"
    },
    fakeInfo: {
      de: "Fälschung hat linkes Bein vorne",
      en: "Fake has left leg forward"
    },
    type: t.art,
    price: null
  },
  {
    id: "lvvfmoklui",
    name: {
      de: "Feierlichgemälde",
      en: "Solemn Painting"
    },
    fakeInfo: {
      de: "Fälschung zeigt Mann im Hintergrund seinen Arm höher heben",
      en: "Fake shows man in the background lifting his arm higher"
    },
    type: t.art,
    price: null
  },
  {
    id: "ce47gv380r",
    name: {
      de: "Funkelgemälde",
      en: "Twinkling Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "630mxcm29u7",
    name: {
      de: "Furchtgemälde",
      en: "Scary Painting"
    },
    fakeInfo: {
      de: "Fälschung hat Augenbrauen nach außen geneigt",
      en: "Fake has eyebrows tilted outwards"
    },
    type: t.art,
    price: null
  },
  {
    id: "hq874j9hhnu",
    name: {
      de: "Galantstatue",
      en: "Gallant Statue"
    },
    fakeInfo: {
      de: "Fälschung hält etwas unter seinem Arm",
      en: "Fake is holding something under his arm"
    },
    type: t.art,
    price: null
  },
  {
    id: "uhor8cevu7b",
    name: {
      de: "Geheimnisbüste",
      en: "Mystic Statue"
    },
    fakeInfo: {
      de: "Fälschung trägt Ohrring am rechten Ohr",
      en: "Fake has an earring on the right ear"
    },
    type: t.art,
    price: null
  },
  {
    id: "qfyoj6j851n",
    name: {
      de: "Gemüsegemälde",
      en: "Jolly Painting"
    },
    fakeInfo: {
      de: "Fälschung fehlt Spross auf der Brust",
      en: "Fake has sprout on chest missing"
    },
    type: t.art,
    price: null
  },
  {
    id: "tkko9ecqkr",
    name: {
      de: "Hinweisskulptur",
      en: "Informative Statue"
    },
    fakeInfo: {
      de: "Fälschung ist blau",
      en: "Fake is blue"
    },
    type: t.art,
    price: null
  },
  {
    id: "bcwwyxt774v",
    name: {
      de: "Hübschgemälde",
      en: "Nice Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "xrr56whmjld",
    name: {
      de: "Kraftgemälde",
      en: "Moody Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "8ng267p73lv",
    name: {
      de: "Kriegerstatue",
      en: "Warrior Statue"
    },
    fakeInfo: {
      de: "Fälschung hält eine Schaufel",
      en: "Fake is Holding a shovel"
    },
    type: t.art,
    price: null
  },
  {
    id: "2ooppbm75b2",
    name: {
      de: "Lichtgemälde",
      en: "Glowing Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "gjpt8x1ac24",
    name: {
      de: "Perfektgemälde",
      en: "Perfect Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "pkd232uuv6e",
    name: {
      de: "Perlengemälde",
      en: "Wistful Painting"
    },
    fakeInfo: {
      de: "Fälschung hat sternförmige Ohrringe",
      en: "Fake has star shaped earrings"
    },
    type: t.art,
    price: null
  },
  {
    id: "914aqij4hu",
    name: {
      de: "Prachtskulptur",
      en: "Tremendous Statue"
    },
    fakeInfo: {
      de: "Fälschung hat einen Deckel",
      en: "Fake has a lid"
    },
    type: t.art,
    price: null
  },
  {
    id: "3sv8nepjo1a",
    name: {
      de: "Rätselgemälde",
      en: "Mysterious Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "idkj07rpp6",
    name: {
      de: "Ruhegemälde",
      en: "Calm Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "ni8vfj2buj9",
    name: {
      de: "Schöngemälde",
      en: "Moving Painting"
    },
    fakeInfo: {
      de: "Fälschung fehlen Bäume in rechter oberer Ecke",
      en: "Fake misses trees in top right corner"
    },
    type: t.art,
    price: null
  },
  {
    id: "nvow580e5v",
    name: {
      de: "Strenggemälde",
      en: "Proper Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "p2o6t3yewld",
    name: {
      de: "Ungestümgemälde (links)",
      en: "Wild Painting Left Half"
    },
    fakeInfo: {
      de: "Fälschung zeigt Monster in Grün",
      en: "Fake shows monster in green"
    },
    type: t.art,
    price: null
  },
  {
    id: "pakmji5rt9",
    name: {
      de: "Ungestümgemälde (rechts)",
      en: "Wild Painting Right Half"
    },
    fakeInfo: {
      de: "Fälschung zeigt Monster in Weiß",
      en: "Fake shows monster in white"
    },
    type: t.art,
    price: null
  },
  {
    id: "0eq2bpi2xiim",
    name: {
      de: "Uraltstatue",
      en: "Ancient Statue"
    },
    fakeInfo: {
      de: "Fälschung hat einen Kopfschmuck mit \"Antennen\"",
      en: "Fake has a headpiece with \"antennas\""
    },
    type: t.art,
    price: null
  },
  {
    id: "tn7i1ormdo",
    name: {
      de: "Versinkgemälde",
      en: "Sinking Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "bi3sesjcdp8",
    name: {
      de: "Vertrautstatue",
      en: "Familiar Statue"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "0jutq3uxjja",
    name: {
      de: "Wahrgemälde",
      en: "Worthy Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "o0mgu8qc5uq",
    name: {
      de: "Warmgemälde",
      en: "Warm Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "zeuyyprr29q",
    name: {
      de: "Wellengemälde",
      en: "Dynamic Painting"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  },
  {
    id: "a317o9zy0tn",
    name: {
      de: "Wintergemälde",
      en: "Scenic Painting"
    },
    fakeInfo: {
      de: "Fälschung zeigt nur einen jäger mit weniger Hunden",
      en: "Fake shows only one hunter with the dogs"
    },
    type: t.art,
    price: null
  },
  {
    id: "lw4wo7buaze",
    name: {
      de: "Wissenschaftsgemälde",
      en: "Academic Painting"
    },
    fakeInfo: {
      de: "Fälschung hat einen Kaffeefleck in rechter oberer Ecke",
      en: "Fake has coffee stain in top right corner"
    },
    type: t.art,
    price: null
  },
  {
    id: "71gvvzzhmg6",
    name: {
      de: "Wölfinnenstatue",
      en: "Motherly Statue"
    },
    fakeInfo: {
      de: "Fälschung hängt die Zunge aus dem Maul",
      en: "Fake has tongue sticking out"
    },
    type: t.art,
    price: null
  },
  {
    id: "z2mzp4it918",
    name: {
      de: "Würdestatue",
      en: "Great Statue"
    },
    fakeInfo: {
      de: "immer original",
      en: "always genuine"
    },
    type: t.art,
    price: null
  }
];

export default collectionData;
