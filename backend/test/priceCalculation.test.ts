import { calculateTotalPrice } from "../src/utils/reservation/pricing.util.js";


describe("Price calculation logic", () => {
  const HOURLY_RATE = 150;

  it("should calculate right price for standard integer hours", () => {
    expect(calculateTotalPrice(2, HOURLY_RATE)).toBe(300);
  });

  it("should handle zero hours (edge case)", () => {
    expect(calculateTotalPrice(0, HOURLY_RATE)).toBe(0);
  });

  it("should handle decimal hours if supported", () => {
    // 1.5 hours at 200/hr = 300
    expect(calculateTotalPrice(1.5, HOURLY_RATE)).toBe(225);
  });
});
