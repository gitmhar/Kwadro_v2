import { getOperatingHours } from "./operatingHours";

export const pastTheTime = (starrtTime: string, date: Date) => {
  const [hours, minutes] = starrtTime.split(":").map(Number);
  const proposed = new Date(date);
  proposed.setHours(hours, minutes, 0, 0);

  return proposed.getTime() < new Date().getTime();
};

export const isTooEarly = (startTime: string, date: Date) => {
  const [hours] = startTime.split(":").map(Number);
  const adjusted = hours === 0 ? 24 : hours;
  const { open } = getOperatingHours(date);
  return adjusted < open;
};

export const isTooLate = (startTime: string, duration: number, date: Date) => {
  const [hours, minutes] = startTime.split(":").map(Number);
  const { close } = getOperatingHours(date);

  // If hours is 0 (Midnight), treat it as 24 for the calculation
  const adjustedHours = hours === 0 ? 24 : hours;

  if (adjustedHours + duration > close) return true;
  if (adjustedHours < getOperatingHours(date).open) return false; 

  // Date-based check for precision
  const proposedStart = new Date(date);
  proposedStart.setHours(hours, minutes, 0, 0);

  // If it was midnight, move it to the end of the current day instead of the start
  if (hours === 0) {
    proposedStart.setDate(proposedStart.getDate() + 1);
  }

  const proposedEnd = new Date(
    proposedStart.getTime() + duration * 60 * 60 * 1000,
  );

  const closingTime = new Date(date);
  // If closing at 24, that is midnight of the NEXT day
  if (close === 24) {
    closingTime.setDate(closingTime.getDate() + 1);
    closingTime.setHours(0, 0, 0, 0);
  } else {
    closingTime.setHours(close, 0, 0, 0);
  }

  return proposedEnd.getTime() > closingTime.getTime();
};
