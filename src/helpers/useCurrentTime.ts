import { useState, useRef, useEffect } from "react";
import { Hour, MonthNumber } from "../data/types";

type DateCallback = (d: Date) => void;

// based on https://overreacted.io/making-setinterval-declarative-with-react-hooks/
function useClock(callback: DateCallback, interval = 1000) {
    const savedCallback = useRef<DateCallback>();

    useEffect(() => {
        savedCallback.current = callback;
    });

    useEffect(() => {
        function tick() {
            savedCallback.current?.(new Date());
        }
        const id = setTimeout(tick, interval - (Date.now() % interval));
        return () => clearTimeout(id);
    });
}

export default function useCurrentTime(): Date {
    const [currentTime, setCurrentTime] = useState(new Date());
    useClock((d) => setCurrentTime(d));
    return currentTime;
}

export function useCurrentMonth(): MonthNumber {
    const [currentMonth, setCurrentMonth] = useState(new Date().getMonth() + 1);
    useClock((d) => setCurrentMonth(d.getMonth() + 1), 60 * 60 * 1000);
    return currentMonth as MonthNumber;
}

export function useCurrentHour(): Hour {
    const [currentHour, setCurrentHour] = useState(new Date().getHours());
    useClock((d) => setCurrentHour(d.getHours()), 60 * 60 * 1000);
    return currentHour as Hour;
}
