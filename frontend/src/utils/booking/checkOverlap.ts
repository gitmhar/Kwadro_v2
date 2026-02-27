import type { CheckOverlap } from "../../types/booking";
import { getOperatingHours } from "./operatingHours";

export const checkOverlap = (
  startTimeStr: string,
  duration: number,
  selectedDate: Date | null,
  busySlots: CheckOverlap[],
  // currentTime: Date = new Date(),
): boolean => {
  if (!startTimeStr || !selectedDate) return false;

  const { open, close } = getOperatingHours(selectedDate);
  const [hours, minutes] = startTimeStr.split(":").map(Number);

  const proposedStart = new Date(selectedDate);
  proposedStart.setHours(hours, minutes, 0, 0);

  const proposedEnd = new Date(
    proposedStart.getTime() + duration * 60 * 60 * 1000,
  );

  // Prevents scheduling earlier than opening and closed hours

  if (hours < open) return true;

  const closingTime = new Date(selectedDate);
  closingTime.setHours(close, 0, 0, 0);

  if (proposedEnd.getTime() > closingTime.getTime()) return true;

  // --------------------------------------------------------//

  //   Prevents scheduling in the past
  if (proposedStart.getTime() < new Date().getTime()) return true;

  return busySlots.some((slot) => {
    const busyDate = new Date(slot.startTime);
    const busyEnd = new Date(slot.endTime);

    const isSameDay =
      busyDate.getFullYear() === proposedStart.getFullYear() &&
      busyDate.getMonth() === proposedStart.getMonth() &&
      busyDate.getDate() === proposedStart.getDate();

    if (!isSameDay) return false;

    return (
      proposedStart.getTime() < busyEnd.getTime() &&
      proposedEnd.getTime() > busyDate.getTime()
    );
  });
};
