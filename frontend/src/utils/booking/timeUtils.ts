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

// Future feature, too lazy to make it work.

// export const getNextAvailableSlot = (
//   tableReservations: any[],
//   isOccupied: boolean,
//   currentBooking?: any,
// ) => {
//   const now = new Date();
//   const day = now.getDay();

//   const isWeekend = day === 0 || day === 6 || day === 5;
//   const closingTime = new Date(now);

//   if (isWeekend) {
//     closingTime.setHours(24, 0, 0, 0);
//   } else {
//     closingTime.setHours(22, 0, 0, 0);
//   }

//   const futureReservations = tableReservations
//     .filter((res) => new Date(res.startTime) > now)
//     .sort(
//       (a, b) =>
//         new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
//     );

//   const THIRTY_MIN = 30 * 60 * 1000;

//   // If currently occupied
//   if (isOccupied && currentBooking) {
//     const end = new Date(currentBooking.endDateTime || currentBooking.endTime);

//     const timeUntilClosingAfterBooking = closingTime.getTime() - end.getTime();

//     // If not enough time left after booking
//     if (timeUntilClosingAfterBooking <= THIRTY_MIN) {
//       return "Open Tomorrow";
//     }

//     // If there is another booking after this
//     if (futureReservations.length > 0) {
//       const nextStart = new Date(futureReservations[0].startTime);
//       return `Next: ${nextStart.toLocaleTimeString("en-US", {
//         hour: "2-digit",
//         minute: "2-digit",
//         hour12: true,
//       })}`;
//     }

//     return `Available after ${end.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     })}`;
//   }

//   // If not occupied, check last booking of the day
//   if (futureReservations.length > 0) {
//     const lastReservation = futureReservations[futureReservations.length - 1];
//     const lastEnd = new Date(
//       lastReservation.endDateTime || lastReservation.endTime,
//     );

//     const timeAfterLastBooking = closingTime.getTime() - lastEnd.getTime();

//     if (timeAfterLastBooking <= THIRTY_MIN) {
//       return "Open Tomorrow";
//     }

//     const nextStartTime = new Date(futureReservations[0].startTime);
//     return `Next Slot: ${nextStartTime.toLocaleTimeString("en-US", {
//       hour: "2-digit",
//       minute: "2-digit",
//       hour12: true,
//     })}`;
//   }

//   // No reservations at all
//   if (closingTime.getTime() - now.getTime() <= THIRTY_MIN) {
//     return "Open Tomorrow";
//   }

//   return "Open All Day";
// };

const formatTime = (date: Date) =>
  date.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

// Timeline Helper

export const getFullSchedule = (busySlots: any[], selectedDate: Date) => {
  const now = new Date();
  const schedule: any[] = [];

  const day = selectedDate.getDay();
  const isWeekend = day === 0 || day === 6;

  const openTime = new Date(selectedDate);
  openTime.setHours(isWeekend ? 12 : 10, 0, 0, 0);

  const closeTime = new Date(selectedDate);
  closeTime.setHours(isWeekend ? 24 : 22, 0, 0, 0);

  const isToday = selectedDate.toDateString() === now.toDateString();
  let lastCheckedTime = new Date(openTime);

  if (isToday && now > openTime) {
    lastCheckedTime = new Date(now);
  }

  if (isToday && now >= closeTime) return [];

  const sortedSlots = [...busySlots].sort(
    (a, b) => new Date(a.startTime).getTime() - new Date(b.startTime).getTime(),
  );

  sortedSlots.forEach((slot) => {
    const slotStart = new Date(slot.startTime);
    const slotEnd = new Date(slot.endTime);

    if (slotEnd <= lastCheckedTime) return;

    if (slotStart > lastCheckedTime) {
      const diff =
        (slotStart.getTime() - lastCheckedTime.getTime()) / (1000 * 60);

      if (diff >= 15) {
        schedule.push({
          status: "AVAILABLE",
          time: `${formatTime(lastCheckedTime)} - ${formatTime(slotStart)}`,
          type: "available",
        });
      }
    }

    const isPending = slot.status === "pending";

    schedule.push({
      status: isPending ? "PENDING" : "RESERVED",
      time: `${formatTime(slotStart)} - ${formatTime(slotEnd)}`,
      type: isPending ? "pending" : "reserved",
    });

    lastCheckedTime = slotEnd;
  });

  if (lastCheckedTime < closeTime) {
    schedule.push({
      status: "AVAILABLE",
      time: `${formatTime(lastCheckedTime)} - ${formatTime(closeTime)}`,
      type: "available",
    });
  }

  return schedule;
};
