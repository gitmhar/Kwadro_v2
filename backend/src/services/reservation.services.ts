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
