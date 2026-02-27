import { useEffect, useState } from "react";
import type { CheckOverlap } from "../types/booking";
import { reservationServices } from "../api/reservation";

export const useBusySlots = (
  tableNumber: number | null,
  selectedDate: Date | null,
) => {
  const [busySlots, setBusySlots] = useState<CheckOverlap[]>([]);

  useEffect(() => {
    if (tableNumber && selectedDate) {
      const fetchBusy = async () => {
        try {
          const year = selectedDate.getFullYear();
          const month = String(selectedDate.getMonth() + 1).padStart(2, "0");
          const day = String(selectedDate.getDate()).padStart(2, "0");
          const dateString = `${year}-${month}-${day}`;

          const data = await reservationServices.getBusySlots(
            tableNumber,
            dateString,
          );
          setBusySlots(data);
        } catch (error) {
          console.error("Could not load table schedule");
        }
      };
      fetchBusy();
    }
  }, [tableNumber, selectedDate]);

  return { busySlots, setBusySlots };
};
