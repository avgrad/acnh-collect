import { useEffect } from "react";
import { mappingIdToFilename } from "./data/collectionDataAcnhApiMapping";
import { useLocalStorageReducer } from "./helpers/useLocalStorageReducer";

export default function useDonationStorage() {
    const [donated, dispatchDonated] = useLocalStorageReducer(
        (state, action) => {
            // TODO THIS LINE IS TO BE REMOVED SOME TIME, WHEN USERS ARE EXPECTED TO HAVE "UPGRADED" THE STORAGE
            state = state.map((id) => mappingIdToFilename[id] || id);

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

    const setDonated = (filename, donated) =>
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
    }, []);

    // TODO THIS MAP IS TO BE REMOVED SOME TIME, WHEN USERS ARE EXPECTED TO HAVE "UPGRADED" THE STORAGE
    return [donated.map((id) => mappingIdToFilename[id] || id), setDonated];
}
