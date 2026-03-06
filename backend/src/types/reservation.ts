import { Document } from "mongoose";

export interface IReservation extends Document {
  tableNumber: number;
  name: string;
  email: string;
  date: Date;
  startTime: Date;
  duration: number;
  attendees: number;
  contact: string;
  endTime: Date;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
  stripeSessionId: string;
  firebaseUid: string;
}

export interface SanitizedReservationInput {
  tableNumber: number;
  name: string;
  email: string; // MUST be string (not optional)
  startTime: string;
  duration: number;
  contact: string;
  attendees: number;
}
