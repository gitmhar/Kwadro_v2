import type { CheckOverlap } from "../../types/booking";
import { checkOverlap } from "./checkOverlap";

export const getAvailableDurations = (
  startTime: string,
  selectedDate: Date,
  busySlots: CheckOverlap[],
) => {
  const durations = [1, 2, 3, 4, 5];
  return durations.filter(
    (d) => !checkOverlap(startTime, d, selectedDate, busySlots) && true,
  );
};

