import { Filename } from "./data/types";
import { useLocalStorageReducer } from "./helpers/useLocalStorageReducer";

export default function useDonationStorage(): [
    Filename[],
    (filename: Filename, donated: boolean) => void
] {
    const [donated, dispatchDonated] = useLocalStorageReducer(
        (state, action) => {
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

    return [donated, setDonated];
}
