import { useLocalStorageReducer } from "./helpers/useLocalStorageReducer";

export default function useDonationStorage() {
    const [donated, dispatchDonated] = useLocalStorageReducer(
        (state, action) => {
            switch (action.type) {
                case "SET_DONATED":
                    const idx = state.indexOf(action.id);
                    if (idx === -1 && action.donated === true)
                        return [...state, action.id];
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

    const setDonated = (id, donated) =>
        dispatchDonated({ type: "SET_DONATED", id, donated });

    return [donated, setDonated];
}
