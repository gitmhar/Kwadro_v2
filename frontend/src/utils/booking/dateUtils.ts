export const combineDateAndTime = (date: Date, timeStr: string): Date => {
  const [hours, minutes] = timeStr.split(":").map(Number);
  const newDate = new Date(date);
  newDate.setHours(hours, minutes, 0, 0);
  return newDate;
};

export const formatFullReservationTime = (
  isoString: string,
  durationHours: string,
) => {
  const date = new Date(isoString);

  const dateString = date.toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  const startTimeString = date.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  const endDate = new Date(
    date.getTime() + Number(durationHours) * 60 * 60 * 1000,
  );
  const endTimeString = endDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return {
    dateDisplay: dateString,
    timeRange: `${startTimeString} - ${endTimeString}`,
  };
};

export const calculateRemainingTime = (endTimeISO: string): string => {
  const end = new Date(endTimeISO).getTime();
  const now = new Date().getTime();
  const diffInMs = end - now;

  if (diffInMs <= 0) return "Ending now";

  const diffInMinutes = Math.floor(diffInMs / (1000 * 60));
  const hours = Math.floor(diffInMinutes / 60);
  const mins = diffInMinutes % 60;

  if (hours > 0) {
    return `${hours}h ${mins}m remaining`;
  }
  return `${mins}m remaining`;
};
