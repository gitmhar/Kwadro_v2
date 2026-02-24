import { Schema, model, Document } from "mongoose";
import type { IReservation } from "../types/reservation.js";

const ReservationSchema = new Schema<IReservation>(
  {
    // tableNumber: {
    //   type: Number,
    //   required: true,
    //   min: 1,
    // },
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
    },
    startTime: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
      min: 0.5,
    },
    endTime: {
      type: String,
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

export const Reservation = model<IReservation>(
  "Reservation",
  ReservationSchema,
);
