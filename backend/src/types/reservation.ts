import { Document } from "mongoose";

export interface IReservation extends Document {
  // tableNumber: number;
  name: string;
  email: string;
  date: Date;
  startTime: string;
  duration: number;
  attendees: number;
  contact: string;
  endTime: string;
  totalPrice: number;
  status: "pending" | "confirmed" | "cancelled";
  //   client: Schema.Types.ObjectId;
}
