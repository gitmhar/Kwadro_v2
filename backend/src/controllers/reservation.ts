import type { Request, Response } from "express";
import { getIO } from "../config/socket.js";
import { Reservation } from "../models/reservation.js";
import { sanitizeReservationInput } from "../utils/reservation/sanitizeInput.js";
import { calculateTotalPrice } from "../utils/reservation/pricing.util.js";
import { buildReservationTimes } from "../utils/reservation/time.utils.js";
import { buildReservationData } from "../utils/reservation/buildReservationData.js";
import { buildDayRange } from "../utils/reservation/date.util.js";
import {
  findActiveReservations,
  findBusySlots,
  findReservationConflict,
} from "../services/reservation.services.js";
import type {
  GetBusySlotsParams,
  getBusySlotsQuery,
} from "../types/booking.js";
import Stripe from "stripe";

export const createReservation = async (req: Request, res: Response) => {
  try {
    if (!req.user) return res.status(401).json({ message: "No user found" });
    const firebaseUid = req.user.uid;
    if (!firebaseUid) return res.status(401).json({ message: "No user found" });
    const input = sanitizeReservationInput(req.body);
    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY || "");

    const { startDateTime, endDateTime } = buildReservationTimes(
      input.startTime,
      input.duration,
    );

    const existingConflict = await findReservationConflict(
      input.tableNumber,
      startDateTime,
      endDateTime,
    );

    if (existingConflict) {
      console.log(
        "Conflict found with record ID:",
        existingConflict._id,
        "Status:",
        existingConflict.status,
      );
      return res.status(409).json({
        message: `Table ${input.tableNumber} is already booked`,
      });
    }

    const totalPrice = calculateTotalPrice(input.duration, 150);
    const isStripe = req.body.paymentMethod === "stripe";

    const reservationData = buildReservationData({
      input,
      startDateTime,
      endDateTime,
      totalPrice,
      status: isStripe ? "pending" : "paid",
      firebaseUid: firebaseUid,
    });

    console.log("Saving this to DB:", reservationData);
    const reservation = await Reservation.create(reservationData);

    if (isStripe) {
      console.log(
        "Success URL:",
        `${process.env.FRONTEND_URL}/success?id=${reservation._id}`,
      );
      console.log(
        "Cancel URL:",
        `${process.env.BACKEND_URL}/api/reservations/cancel/${reservation._id}`,
      );
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ["card"],
        expires_at: Math.floor(Date.now() / 1000) + 30 * 60,
        line_items: [
          {
            price_data: {
              currency: "usd",
              product_data: {
                name: `Table ${reservation.tableNumber} Booking`,
              },
              unit_amount: totalPrice,
            },
            quantity: 1,
          },
        ],
        mode: "payment",
        metadata: {
          reservationId: reservation._id.toString(),
          firebaseUid: firebaseUid,
        },
        success_url: `${process.env.FRONTEND_URL}/success?id=${reservation._id}`,
        cancel_url: `${process.env.BACKEND_URL}/api/reservations/cancel/${reservation._id}`,
      });
      return res
        .status(201)
        .json({ url: session.url, createdAt: reservation.createdAt });
    }

    try {
      const io = getIO();
      console.log("Socket emitting now!");
      io.emit("reservation_created", {
        reservationId: reservation._id,
        tableNumber: reservation.tableNumber,
        startTime: reservation.startTime,
        endTime: reservation.endTime,
      });
    } catch {
      console.log("Socket skipped (not initialized)");
    }

    res.status(201).json(reservation);
  } catch (error: any) {
    if (error.code === 11000) {
      console.error(
        "DATABASE CONFLICT: Unique index violation",
        error.keyValue,
      );
      return res
        .status(409)
        .json({
          message: "This slot is already in our records (even if cancelled).",
        });
    }
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getBusySlots = async (
  req: Request<GetBusySlotsParams, any, any, getBusySlotsQuery>,
  res: Response,
) => {
  const { tableNumber } = req.params;
  const { date } = req.query;

  if (!date)
    return res.status(400).json({ message: "Missing date query parameter" });

  try {
    const { startOfDay, endOfDay } = buildDayRange(date);
    const bookings = await findBusySlots(
      Number(tableNumber),
      startOfDay,
      endOfDay,
    );
    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching busy slots" });
  }
};

export const getActiveReservations = async (req: Request, res: Response) => {
  try {
    const active = await findActiveReservations();
    res.json(active);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch active bookings" });
  }
};

export const getReservationStatus = async (req: Request, res: Response) => {
  const { reservationId } = req.params;
  try {
    const reservation =
      await Reservation.findById(reservationId).select("status");
    if (!reservation)
      return res.status(404).json({ message: "Reservation not found " });
    res.json({ status: reservation.status });
  } catch (err: any) {
    console.log(err.message);
    res.status(500).json({ message: "Server error" });
  }
};
