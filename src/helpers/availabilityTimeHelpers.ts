import { MonthName, months as monthNames } from "./../resources/availability";
import lang from "./../resources";
import { Hour, MonthNumber } from "../data/types";

export type MonthRange = {
    from: MonthName;
    to: MonthName;
    allYear?: boolean;
};

export type TimeRange = {
    from: Hour;
    to: Hour;
    allDay?: boolean;
};

export function getMonthRanges(months?: MonthNumber[]): MonthRange[] {
    if (!months) return [];
    const result = [];

    for (let m of months.sort((a, b) => a - b)) {
        if (result.length === 0) {
            result.push({ from: m, to: m });
            continue;
        }

        const range = result.find((rng) => rng.to === m - 1);
        if (range) {
            range.to = m;
        } else {
            result.push({ from: m, to: m });
        }
    }

    // handle DEZ-JAN (over turn of the year) as one range result
    const beforeTurnIdx = result.findIndex((rng) => rng.to === 12);
    const afterTurnIdx = result.findIndex((rng) => rng.from === 1);
    if (
        beforeTurnIdx > -1 &&
        afterTurnIdx > -1 &&
        beforeTurnIdx !== afterTurnIdx
    ) {
        result[beforeTurnIdx].to = result[afterTurnIdx].to;
        result.splice(afterTurnIdx, 1);
    }

    const allYear =
        result.length === 1 && result[0].from === 1 && result[0].to === 12
            ? { allYear: true }
            : {};

    return result.map((rng) => ({
        from: monthNames[rng.from - 1],
        to: monthNames[rng.to - 1],
        ...allYear,
    }));
}

export function getTimeRanges(hours?: Hour[]): TimeRange[] {
    if (!hours) return [];
    const result = [];

    for (let h of hours.sort((a, b) => a - b)) {
        if (result.length === 0) {
            result.push({ from: h, to: h });
            continue;
        }

        const range = result.find((rng) => rng.to === h - 1);
        if (range) {
            range.to = h;
        } else {
            result.push({ from: h, to: h });
        }
    }

    // handle 23-1 (over midnight) as one range result
    const beforeMidnightIndex = result.findIndex((rng) => rng.to === 23);
    const afterMidnightIndex = result.findIndex((rng) => rng.from === 0);
    if (
        beforeMidnightIndex > -1 &&
        afterMidnightIndex > -1 &&
        beforeMidnightIndex !== afterMidnightIndex
    ) {
        result[beforeMidnightIndex].to = result[afterMidnightIndex].to;
        result.splice(afterMidnightIndex, 1);
    }

    const allDay =
        result.length === 1 && result[0].from === 0 && result[0].to === 23
            ? { allDay: true }
            : {};

    // extend range end by 1 (so last hour is included)
    return result.map((rng) => ({
        from: rng.from,
        to: (rng.to + 1) as Hour,
        ...allDay,
    }));
}

export function willLeaveThisMonth(
    months: MonthNumber[] | undefined,
    currentMonth: MonthNumber
): boolean {
    if (!months) return false;

    const nextMonth = (1 + (currentMonth % 12)) as MonthNumber;
    return months.includes(currentMonth) && !months.includes(nextMonth);
}

export function willLeaveThisHour(
    hours: Hour[] | undefined,
    currentHour: Hour
): boolean {
    if (!hours) return false;

    const nextHour = ((currentHour + 1) % 24) as Hour;
    return hours.includes(currentHour) && !hours.includes(nextHour);
}

export type HumanReadableAvailabilityTime = {
    text: string;
    type: "MONTH" | "TIME";
};

export function humanReadableAvailabilityTimes(
    months?: MonthNumber[],
    hours?: Hour[],
    short = false
): HumanReadableAvailabilityTime[] {
    const langSource = short ? lang.availabilityShort : lang.availability;
    const ms = getMonthRanges(months)
        .map((rng) =>
            rng.allYear
                ? lang.availability.ALL_YEAR
                : rng.from === rng.to
                ? langSource[rng.from]
                : langSource[rng.from] +
                  " " +
                  lang.availability.TO +
                  " " +
                  langSource[rng.to]
        )
        .map(
            (text): HumanReadableAvailabilityTime => ({ text, type: "MONTH" })
        );
    const hs = getTimeRanges(hours)
        .map((rng) =>
            rng.allDay
                ? lang.availability.ALL_DAY
                : rng.from + "-" + rng.to + " " + lang.availability.CLOCK
        )
        .map((text): HumanReadableAvailabilityTime => ({ text, type: "TIME" }));

    if (ms && hs) return ms.concat(hs);

    return ms || hs;
}
