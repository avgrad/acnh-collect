import { useState, useRef, useEffect } from "react";

// based on https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useClock(callback) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current(new Date());
        }
        const id = setTimeout(tick, 1000 - (Date.now() % 1000));
        return () => clearTimeout(id);
    });
}

export default function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());

    useClock((d) => setCurrentTime(d));

    return currentTime;
}
