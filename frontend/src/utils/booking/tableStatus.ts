import type { Reservation } from "../../types/booking";

export const isTableOccupied = (
  tableNumber: number,
  reservations: Reservation[],
  currentTime: Date,
) => {
  return reservations.find((res) => {
    const start = new Date(res.startTime);
    const end = new Date(res.endTime);
    const now = currentTime;

    if (res.tableNumber) {
      console.log(`Checking Table ${tableNumber}:`);
      console.log("Start:", start.toLocaleString());
      console.log("Now:", now.toLocaleString());
      console.log("End:", end.toLocaleString());
      console.log("Is Occupied?:", now >= start && now <= end);
    }

    return (
      res.tableNumber === tableNumber &&
      currentTime >= start &&
      currentTime <= end
    );
  });
};
