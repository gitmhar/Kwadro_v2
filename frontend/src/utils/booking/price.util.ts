export const HOURLY_RATE = 150;

/**
 * Calculates the total price based on duration.
 * @param duration - Number of hours
 * @returns Total price
 */

export const calculateBookingPrice = (duration: number | string): number => {
  const hours =
    typeof duration === "string" ? parseInt(duration, 10) : duration;
  return hours * HOURLY_RATE;
};

export const formatPrice = (amount: number) => {
  return `$${amount.toLocaleString()}`;
};
