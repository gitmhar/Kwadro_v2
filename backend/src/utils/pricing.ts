export const calculateTotalPrice = (
  duration: number,
  ratePerHour: number,
): number => {
  return duration * ratePerHour;
};
