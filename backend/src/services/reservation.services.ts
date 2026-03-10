import type Stripe from "stripe";
import { getIO } from "../config/socket.js";
import { Reservation } from "../models/reservation.js";
import mongoose from "mongoose";

export const findReservationConflict = async (
  tableNumber: number,
  start: Date,
  end: Date,
  excludeId?: string,
) => {
  const query: any = {
    tableNumber,
    status: { $in: ["pending", "paid"] },
    $and: [{ startTime: { $lt: end } }, { endTime: { $gt: start } }],
  };

  if (excludeId) {
    query._id = { $ne: new mongoose.Types.ObjectId(excludeId) };
  }

  return Reservation.findOne(query);
};

export const findBusySlots = async (
  tableNumber: number,
  startOfDay: Date,
  endOfDay: Date,
) => {
  return Reservation.find({
    tableNumber,
    status: { $in: ["pending", "paid"] },
    startTime: { $gte: startOfDay, $lte: endOfDay },
  })
    .select("startTime endTime")
    .sort({ startTime: 1 });
};

export const findActiveReservations = async () => {
  const now = new Date();
  return Reservation.find({
    endTime: { $gt: now },
    status: { $in: ["pending", "paid"] },
  }).sort({ startTime: 1 });
};

