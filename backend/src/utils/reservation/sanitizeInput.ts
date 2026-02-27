import type { Request } from "express";
import type { SanitizedReservationInput } from "../../types/reservation.js";

export const sanitizeReservationInput = (
  body: Request["body"],
): SanitizedReservationInput => {
  return {
    tableNumber: Number(body.tableNumber),
    name: String(body.name).trim(),
    email: String(body.email ?? "").trim(),
    startTime: String(body.startTime),
    duration: Number(body.duration),
    contact: String(body.contact).trim(),
    attendees: Number(body.attendees),
  };
};
