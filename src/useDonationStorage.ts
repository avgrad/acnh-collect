import { useEffect } from "react";
import { mappingIdToFilename } from "./data/collectionDataAcnhApiMapping";
import { Filename } from "./data/types";
import { useLocalStorageReducer } from "./helpers/useLocalStorageReducer";

export default function useDonationStorage(): [
    Filename[],
    (filename: Filename, donated: boolean) => void
] {
    const [donated, dispatchDonated] = useLocalStorageReducer(
        (state, action) => {
            // TODO THIS LINE IS TO BE REMOVED SOME TIME, WHEN USERS ARE EXPECTED TO HAVE "UPGRADED" THE STORAGE
            state = state.map((id: string) => mappingIdToFilename[id] || id);

            switch (action.type) {
                case "SET_DONATED":
                    const idx = state.indexOf(action.filename);
                    if (idx === -1 && action.donated === true)
                        return [...state, action.filename];
                    else if (idx !== -1 && action.donated === false) {
                        const newState = [...state];
                        newState.splice(idx, 1);
                        return newState;
                    }
                    return state;
                default:
                    return state;
            }
        },
        [],
        "donated"
    );

    const setDonated = (filename: Filename, donated: boolean) =>
        dispatchDonated({
            type: "SET_DONATED",
            filename,
            donated,
        });

    // TODO THIS USEEFFECT IS TO BE REMOVED SOME TIME, WHEN USERS ARE EXPECTED TO HAVE "UPGRADED" THE STORAGE
    // also remove mapping-file because then it wont be needed anymore
    // auto upgrade stored ids to filenames
    useEffect(() => {
        if (donated.length > 0)
            setDonated(mappingIdToFilename[donated[0]] || donated[0], true);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // TODO THIS MAP IS TO BE REMOVED SOME TIME, WHEN USERS ARE EXPECTED TO HAVE "UPGRADED" THE STORAGE
    return [
        donated.map((id: string) => mappingIdToFilename[id] || id),
        setDonated,
    ];
}
