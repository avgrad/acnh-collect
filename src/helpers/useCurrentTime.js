import { useState, useRef, useEffect } from "react";

// based on https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useClock(callback, interval = 1000) {
    const savedCallback = useRef();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current(new Date());
        }
        const id = setTimeout(tick, interval - (Date.now() % interval));
        return () => clearTimeout(id);
    });
}

export default function useCurrentTime() {
    const [currentTime, setCurrentTime] = useState(new Date());
    useClock((d) => setCurrentTime(d));
    return currentTime;
}

export function useCurrentMonth() {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    useClock((d) => setCurrentMonth(d.getMonth() + 1), 60 * 60 * 1000);
    return currentMonth;
}

export function useCurrentHour() {
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    useClock((d) => setCurrentHour(d.getHours()), 60 * 60 * 1000);
    return currentHour;
}
