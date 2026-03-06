import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { reservationServices } from "../api/reservation";

export default function Success() {
  const [status, setStatus] = useState("loading");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reservationId = params.get("id");

  useEffect(() => {
    if (!reservationId) return;

    let interval: ReturnType<typeof setInterval>;
    const pollStatus = async () => {
      try {
        const res = await reservationServices.getReservationStatus(reservationId);
        setStatus(res.status);

        if (res.status === "confirmed" || res.status === "cancelled") {
          clearInterval(interval); // stop polling once final status is reached
        }
      } catch (err: any) {
        console.error(err.message);
        setStatus("error");
        clearInterval(interval); // stop polling on error
      }
    };

    // Poll every 2 seconds
    interval = setInterval(pollStatus, 2000);
    pollStatus(); // initial fetch immediately

    // Cleanup on unmount
    return () => clearInterval(interval);
  }, [reservationId]);

  if (status === "loading") return <h1>Verifying Payment...</h1>;
  if (status === "error") return <h1>Error verifying reservation</h1>;

  return (
    <div>
      {status === "confirmed" ? (
        <>
          <h2>Payment Successful!</h2>
          <p>Your reservation id: {reservationId}</p>
          <p>Thank you for booking! See you at Kwadro!</p>
        </>
      ) : (
        <h2>Reservation {status}</h2>
      )}
    </div>
  );
}
