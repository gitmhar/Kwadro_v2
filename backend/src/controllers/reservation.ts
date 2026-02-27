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

export const createReservation = async (req: Request, res: Response) => {
  try {
    const input = sanitizeReservationInput(req.body);

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
      return res.status(409).json({
        message: `Table ${input.tableNumber} is already booked`,
      });
    }

    const totalPrice = calculateTotalPrice(input.duration, 150);

    const reservationData = buildReservationData({
      input,
      startDateTime,
      endDateTime,
      totalPrice,
    });

    console.log("Saving this to DB:", reservationData);
    const reservation = await Reservation.create(reservationData);

    try {
      const io = getIO();
      console.log("Socket emitting now!");
      io.emit("reservation_created", {
        tableNumber: reservation.tableNumber,
        startTime: reservation.startTime,
        endTime: reservation.endTime,
      });
    } catch {
      console.log("Socket skipped (not initialized)");
    }

    res.status(201).json(reservation);
  } catch (error) {
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
