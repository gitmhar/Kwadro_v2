import { Reservation } from "../models/reservation.js";
import type { Request, Response } from "express";
import type { IReservation } from "../types/reservation.js";

const RATE_PER_HOUR = 150;

export const createReservation = async (req: Request, res: Response) => {
  const { name, startTime, duration, contact, attendees } = req.body;
  try {
    const startDate = new Date(startTime);
    const durationNum = Number(duration);

    const localStartTime = startDate.toLocaleDateString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
    });

    const durationInMs = durationNum * 60 * 60 * 1000;
    const endDate = new Date(startDate.getTime() + durationInMs);

    const endTimeStr = `${endDate.getHours().toString().padStart(2, "0")}:${endDate.getMinutes().toString().padStart(2, "0")}`;

    const totalPrice = duration * RATE_PER_HOUR;

    const reservationData: Partial<IReservation> = {
      ...req.body,
      date: startDate,
      startTime: localStartTime,
      attendees: Number(req.body.attendees),
      duration: Number(req.body.duration),
      contact: String(contact),
      endTime: endTimeStr,
      totalPrice,
      status: "pending",
    };
    console.log("Saving this to DB:", reservationData);
    const reservation = new Reservation(reservationData);
    await reservation.save();
    res.status(201).json(reservation);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server error" });
  }
};
