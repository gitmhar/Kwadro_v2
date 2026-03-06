import type {
  IReservation,
  SanitizedReservationInput,
} from "../../types/reservation.js";

interface BuildReservationParams {
  input: SanitizedReservationInput;
  startDateTime: Date;
  endDateTime: Date;
  totalPrice: number;
  status: string;
  firebaseUid: string;
}

export const buildReservationData = ({
  input,
  startDateTime,
  endDateTime,
  totalPrice,
  firebaseUid,
}: BuildReservationParams): Partial<IReservation> => {
  return {
    name: input.name,
    email: input.email,
    contact: input.contact,
    attendees: input.attendees,
    duration: input.duration,
    tableNumber: input.tableNumber,

    // System-controlled fields (NOT from client)
    date: startDateTime,
    startTime: startDateTime,
    endTime: endDateTime,
    totalPrice,
    status: "pending",
    firebaseUid,
  };
};
