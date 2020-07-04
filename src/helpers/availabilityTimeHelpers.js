import { months as baseMonths } from "./../collectionData";

export function getMonthRanges(months) {
    if (!months) return []; // null or [] ?
    const result = [];

    for (let m of months
        .map((m) => baseMonths.indexOf(m))
        .sort((a, b) => a - b)) {
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
    const beforeTurnIdx = result.findIndex((rng) => rng.to === 11);
    const afterTurnIdx = result.findIndex((rng) => rng.from === 0);
    if (
        beforeTurnIdx > -1 &&
        afterTurnIdx > -1 &&
        beforeTurnIdx !== afterTurnIdx
    ) {
        result[beforeTurnIdx].to = result[afterTurnIdx].to;
        result.splice(afterTurnIdx, 1);
    }

    const allYear =
        result.length === 1 && result[0].from === 0 && result[0].to === 11
            ? { allYear: true }
            : {};

    return result.map((rng) => ({
        from: baseMonths[rng.from],
        to: baseMonths[rng.to],
        ...allYear,
    }));
}

export function getTimeRanges(hours) {
    if (!hours) return []; // null or [] ?
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
        to: rng.to + 1,
        ...allDay,
    }));
}
