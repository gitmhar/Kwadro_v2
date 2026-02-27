import type { Request, Response } from "express";
import { getIO } from "../config/socket.js";
import { Reservation } from "../models/reservation.js";
import type { IReservation } from "../types/reservation.js";
import { calculateTotalPrice } from "../utils/pricing.js";

export const createReservation = async (req: Request, res: Response) => {
  const { tableNumber, name, startTime, duration, contact, attendees } =
    req.body;
  try {
    const startDateTime = new Date(startTime);
    const durationNum = Number(duration);

    const durationInMs = durationNum * 60 * 60 * 1000;
    const endDateTime = new Date(startDateTime.getTime() + durationInMs);

    const ratePerHour = 150;

    const totalPrice = calculateTotalPrice(duration, ratePerHour);

    const existingConflict = await Reservation.findOne({
      tableNumber: tableNumber,
      status: { $ne: "cancelled" },
      $or: [
        {
          startTime: { $lt: endDateTime },
          endTime: { $gt: startDateTime },
        },
      ],
    });

    if (existingConflict) {
      return res.status(409).json({
        message: `Table ${tableNumber} is already booked during this time.`,
      });
    }

    const reservationData: Partial<IReservation> = {
      ...req.body,
      date: startDateTime,
      startTime: startDateTime,
      endTime: endDateTime,
      attendees: Number(attendees),
      duration: Number(duration),
      contact: String(contact),
      totalPrice,
      tableNumber: tableNumber,
      status: "pending",
    };
    console.log("Saving this to DB:", reservationData);
    const reservation = new Reservation(reservationData);
    await reservation.save();

    const io = getIO();
    console.log("Socket emitting now!");
    io.emit("reservation_created", {
      tableNumber: reservation.tableNumber,
      startTime: reservation.startTime,
      endTime: reservation.endTime,
    });

    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};

export const getBusySlots = async (req: Request, res: Response) => {
  const { tableNumber } = req.params;
  const { date } = req.query;

  try {
    const startOfDay = new Date(`${date}T00:00:00`);
    const endOfDay = new Date(`${date}T23:59:59`);

    const bookings = await Reservation.find({
      tableNumber: Number(tableNumber),
      status: { $ne: "cancelled" },
      startTime: { $gte: startOfDay, $lte: endOfDay },
    })
      .select("startTime endTime")
      .sort({ startTime: 1 });

    res.json(bookings);
  } catch (error) {
    res.status(500).json({ message: "Error fetching busy slots" });
  }
};

export const getActiveReservations = async (req: Request, res: Response) => {
  try {
    const now = new Date();
    const active = await Reservation.find({
      endTime: { $gt: now },
      status: { $ne: "cancelled" },
    });
    res.json(active);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch active bookings" });
  }
};
