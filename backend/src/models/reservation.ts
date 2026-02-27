import { Schema, model, Document } from "mongoose";
import type { IReservation } from "../types/reservation.js";

const ReservationSchema = new Schema<IReservation>(
  {
    tableNumber: {
      type: Number,
      required: [true, "Please select a table"],
      min: [1, "Table number must be at least 1"],
      max: [8, "We only have 8 tables available"],
    },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      match: [/^\S+@\S+\.\S+$/, "Please use a valid email"],
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: Date,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 0.5,
    },
    endTime: {
      type: Date,
      required: true,
    },
    contact: {
      type: String,
      required: true,
    },
    attendees: {
      type: Number,
      required: true,
    },
    totalPrice: {
      type: Number,
      required: true,
    },
    status: {
      type: String,
      enum: ["pending", "confirmed", "cancelled"],
      default: "pending",
    },
    // client: {
    //   type: Schema.Types.ObjectId,
    //   ref: "User",
    //   required: true,
    // },
  },
  { timestamps: true },
);

ReservationSchema.index({ tableNumber: 1, date: 1 });

export const Reservation = model<IReservation>(
  "Reservation",
  ReservationSchema,
);
