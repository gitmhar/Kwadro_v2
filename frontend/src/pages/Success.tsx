import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { reservationServices } from "../api/reservation";
import { socket } from "../lib/socket";
import { useAuth } from "../context/AuthContext";

export default function Success() {
  const [status, setStatus] = useState("loading");
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reservationId = params.get("id");
  const { user } = useAuth();

  useEffect(() => {
    if (!reservationId) return;

    const checkStatus = async () => {
      try {
        const res =
          await reservationServices.getReservationStatus(reservationId);
        setStatus(res.status);
      } catch (err: any) {
        console.error(err.message);
        setStatus("error");
      }
    };

    checkStatus();

    const handlePaid = (data: any) => {
      if (data.reservationId === reservationId) {
        setStatus("paid");
      }
    };

    socket.on("reservation_paid", handlePaid);
    return () => {
      socket.off("reservation_paid", handlePaid);
    };
  }, [reservationId]);

  if (status === "loading") return <h1>Verifying Payment...</h1>;
  if (status === "error") return <h1>Error verifying reservation</h1>;

  return (
    <div>
      {status === "paid" ? (
        <>
          <h2>Payment Successful!</h2>
          <p>Your reservation id: {reservationId}</p>
          <p>Total amount: SECRET</p>
          <p>Thank you for booking! {user?.displayName} See you at Kwadro!</p>
        </>
      ) : (
        <h2>Reservation {status}</h2>
      )}
    </div>
  );
}
