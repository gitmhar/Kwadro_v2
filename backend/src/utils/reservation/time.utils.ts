export const buildReservationTimes = (startTime: string, duration: number) => {
  const startDateTime = new Date(startTime);
  const endDateTime = new Date(
    startDateTime.getTime() + duration * 60 * 60 * 1000,
  );

  return { startDateTime, endDateTime}
};
