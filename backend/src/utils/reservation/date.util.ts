export const buildDayRange = (dateStr: string) => {
  const startOfDay = new Date(`${dateStr}T00:00:00`);
  const endOfDay = new Date(`${dateStr}T23:59:59`);

  return { startOfDay, endOfDay };
};
