import { useEffect, useState } from "react";
import type { Reservation } from "../types/booking";
import { reservationServices } from "../api/reservation";
import { socket } from "../lib/socket";

export const useActiveReservation = () => {
  const [activeReservations, setActiveReservations] = useState<Reservation[]>(
    [],
  );
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const loadInitialState = async () => {
      try {
        const data = await reservationServices.getActiveReservations();
        setActiveReservations(data);
      } catch (error: any) {
        console.error(
          "Could not restore state:",
          error.response?.data || error.message,
        );
      }
    };
    loadInitialState();

    socket.on("reservation_created", (newBooking: Reservation) => {
      setActiveReservations((prev) => [...prev, newBooking]);
    });

    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 60000);

    return () => {
      socket.off("reservation_created");
      clearInterval(timer);
    };
  }, []);

  return { activeReservations, currentTime };
};
