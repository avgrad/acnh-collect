import { useState, useEffect } from "react";
import { Entry, EntryType } from "./types";

/**
 * custom hook to trigger something when the website idles.
 * once it is triggered, it will not return to its untriggered state.
 * @param {boolean} trigger custom value and fallback when idle callback is not supported
 * @returns {boolean} is triggered
 */
function useIdleTrigger(trigger: boolean): boolean {
    const [isTriggered, setIsTriggered] = useState(trigger);
    useEffect(() => {
        if (window.requestIdleCallback)
            window.requestIdleCallback(() => setIsTriggered(true));
        else if (!isTriggered) setIsTriggered(trigger);
    }, [trigger, isTriggered]);
    return isTriggered;
}

export default function useAcnhResource(
    type: EntryType,
    load: boolean
): [data: Entry[], isLoading: boolean] {
    const [data, setData] = useState<Entry[]>([]);
    const [isLoading, setIsLoading] = useState(false);
    // trigger loading hidden collection data while idle (or fall back to active filter)
    const startLoading = useIdleTrigger(load);

    useEffect(() => {
        if (startLoading && data.length === 0 && !isLoading) {
            setIsLoading(true);
            import(`./${type}.json`)
                .then((m) => m.default)
                .then((val) =>
                    val.map((item: Entry) => ({
                        ...item,
                        type: type,
                    }))
                )
                .then((val) => setData(val))
                .finally(() => setIsLoading(false));
        }
    }, [startLoading, data.length, isLoading, type]);

    return [data, isLoading];
}
