import type Stripe from "stripe";
import { getIO } from "../config/socket.js";
import { Reservation } from "../models/reservation.js";

export const findReservationConflict = async (
  tableNumber: number,
  start: Date,
  end: Date,
) => {
  return Reservation.findOne({
    tableNumber,
    status: { $ne: "cancelled" },
    $or: [
      {
        startTime: { $lt: end },
        endTime: { $gt: start },
      },
    ],
  });
};

export const findBusySlots = async (
  tableNumber: number,
  startOfDay: Date,
  endOfDay: Date,
) => {
  return Reservation.find({
    tableNumber,
    status: { $ne: "cancelled" },
    startTime: { $gte: startOfDay, $lte: endOfDay },
  })
    .select("startTime endTime")
    .sort({ startTime: 1 });
};

export const findActiveReservations = async () => {
  const now = new Date();
  return Reservation.find({
    endTime: { $gt: now },
    status: { $ne: "cancelled" },
  }).sort({ startTime: 1 });
};


export const handleCheckoutCompleted = async (
  session: Stripe.Checkout.Session,
) => {
  const { reservationId } = session.metadata || {};

  console.log(`Payment successful for reservation: ${reservationId}`);

  const reservation = await Reservation.findByIdAndUpdate(
    reservationId,
    {
      status: "confirmed",
      $unset: { createdAt: 1 },
    },
    { new: true },
  );

  try {
    const io = getIO();
    io.emit("reservation_created", {
      tableNumber: reservation?.tableNumber,
      startTime: reservation?.startTime,
      endTime: reservation?.endTime,
    });
  } catch (err: any) {
    console.log("Socket notification failed, but payment was saved");
  }
};
