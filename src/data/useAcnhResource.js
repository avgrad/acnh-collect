import { useState, useEffect } from "react";

/**
 * custom hook to trigger something when the website idles.
 * once it is triggered, it will not return to its untriggered state.
 * @param {boolean} trigger custom value and fallback when idle callback is not supported
 * @returns {boolean} is triggered
 */
function useIdleTrigger(trigger) {
    const [isTriggered, setIsTriggered] = useState(trigger);
    useEffect(() => {
        if (window.requestIdleCallback)
            window.requestIdleCallback(() => setIsTriggered(true));
        else if (!isTriggered) setIsTriggered(trigger);
    }, [trigger, isTriggered]);
    return isTriggered;
}

export default function useAcnhResource(type, load) {
    const [data, setData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    // trigger loading hidden collection data while idle (or fall back to active filter)
    const startLoading = useIdleTrigger(load);

    useEffect(() => {
        if (startLoading && data.length === 0 && !isLoading) {
            setIsLoading(true);
            import(`./${type}.json`)
                .then((m) => m.default)
                .then((val) =>
                    val.map((item) => ({
                        ...item,
                        filename: item["file-name"],
                        type: type,
                    }))
                )
                .then((val) => setData(val))
                .finally(() => setIsLoading(false));
        }
    }, [startLoading, data.length, isLoading, type]);

    return [data, isLoading];
}
