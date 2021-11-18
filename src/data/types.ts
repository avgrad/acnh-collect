export type Filename = string;

export type Hour =
    | 0
    | 1
    | 2
    | 3
    | 4
    | 5
    | 6
    | 7
    | 8
    | 9
    | 10
    | 11
    | 12
    | 13
    | 14
    | 15
    | 16
    | 17
    | 18
    | 19
    | 20
    | 21
    | 22
    | 23;
export type MonthNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

export enum EntryType {
    FISH = "FISH",
    BUG = "BUG",
    FOSSIL = "FOSSIL",
    SEACREATURE = "SEACREATURE",
    ART = "ART",
    SONG = "SONG",
    GYROID = "GYROID",
}

export type Location =
    | "GROUND"
    | "RIVER"
    | "ROCKS"
    | "SEA"
    | "FLYING_BY_LIGHT"
    | "POND"
    | "TREE"
    | "FLOWERS"
    | "TREE_STUMP"
    | "BEACH"
    | "FLYING_BY_HYBRID_FLOWER"
    | "PIER"
    | "FLYING"
    | "FLYING"
    | "SEA_RAINING"
    | "ROTTEN_FOOD"
    | "BEACH_ROCK"
    | "POND_AND_RIVER"
    | "PALM_TREE"
    | "RIVER_MOUTH"
    | "TREE_SHAKE"
    | "TRASH_ITEM"
    | "RIVER_CLIFFTOP"
    | "RIVER_CLIFFTOP_AND_POND"
    | "UNDER_TREE"
    | "UNDERGROUND"
    | "VILLAGER_HEAD"
    | "ROCKS_RAIN"
    | "FLOWERS_WHITE";

export type Availability = {
    location: Location;
    months_northern: MonthNumber[];
    months_southern: MonthNumber[];
    hours: Hour[];
};

export type Name = {
    en: string;
    de: string;
};

export type BaseEntry = {
    id: number;
    filename: Filename;
    type: EntryType;
    name: Name;
    image_uri: string;
    availability?: Partial<Availability>;
    price?: number;
    part_of?: string;
    isOrderable?: boolean;
    fake_info?: Name;
    info?: Name;
};

export type FishEntry = BaseEntry & {
    type: EntryType.FISH;
    availability: Availability;
    price: number;
};

export type BugEntry = BaseEntry & {
    type: EntryType.BUG;
    availability: Availability;
    price: number;
};

export type FossilEntry = BaseEntry & {
    type: EntryType.FOSSIL;
    price: number;
    part_of: string;
};

export type SeaCreatureEntry = BaseEntry & {
    type: EntryType.SEACREATURE;
    availability: Availability;
    price: number;
};

export type ArtEntry = BaseEntry & {
    type: EntryType.ART;
    fake_info: Name;
};

export type SongEntry = BaseEntry & {
    type: EntryType.SONG;
    isOrderable: boolean;
};

export type GyroidEntry = BaseEntry & {
    type: EntryType.GYROID;
    info: Name | null;
};

export type Entry =
    | FishEntry
    | BugEntry
    | FossilEntry
    | SeaCreatureEntry
    | ArtEntry
    | SongEntry
    | GyroidEntry;
