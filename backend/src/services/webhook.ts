import Stripe from "stripe";
import type { Stripe as StripeType } from "stripe";
import { Reservation } from "../models/reservation.js";
import { getIO } from "../config/socket.js";
import { findReservationConflict } from "./reservation.services.js";

export const handleCheckoutCompleted = async (
  session: StripeType.Checkout.Session,
) => {
  const { reservationId } = session.metadata || {};
  const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

  console.log(`Payment successful for reservation: ${reservationId}`);

  const reservation = await Reservation.findById(reservationId);

  if (!reservation) {
    console.error("Reservation not found:", reservationId);
    return;
  }

  if (reservation.status === "paid") {
    console.log("Reservation already confirmed, skipping update");
    return;
  }

  if (reservation.status === "expired" || reservation.status === "cancelled") {
    const conflict = await findReservationConflict(
      reservation.tableNumber,
      reservation.startTime,
      reservation.endTime,
      reservation._id.toString()
    );

    if (conflict) {
      console.log("Table taken after expiration. Triggering refund...");
      await stripe.refunds.create({
        payment_intent: session.payment_intent as string,
      });
      reservation.status = "expired";
      await reservation.save();
      return;
    }
  }

  reservation.status = "paid";
  await reservation.save();

  try {
    const io = getIO();

    io.emit("reservation_paid", {
      reservationId: reservation._id.toString(),
      tableNumber: reservation.tableNumber,
      startTime: reservation.startTime,
      endTime: reservation.endTime,
    });
  } catch (err) {
    console.log("Socket notification failed, but payment was saved");
  }
};
