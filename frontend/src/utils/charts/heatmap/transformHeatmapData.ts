import { DAYS, HOURS } from "./constants";

export function transformHeatmapData(data: number[][]) {
  const result: [number, number, number][] = [];

  const reversedDays = [...DAYS].reverse();

  for (let dayIdx = 0; dayIdx < reversedDays.length; dayIdx++) {
    for (let hourIdx = 0; hourIdx < HOURS.length; hourIdx++) {
      const originalDayIdx = DAYS.length - 1 - dayIdx;
      const value = data[originalDayIdx]?.[hourIdx] ?? 0;

      result.push([hourIdx, dayIdx, value]);
    }
  }

  return result;
}