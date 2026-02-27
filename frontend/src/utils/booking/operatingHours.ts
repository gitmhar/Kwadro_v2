import type { OperatingHours } from "../../types/booking";

export const getOperatingHours = (date: Date): OperatingHours => {
  const day = date.getDay();
  const isWeekend = day === 0 || day === 6;

  return isWeekend ? { open: 12, close: 24 } : { open: 10, close: 22 };
};

