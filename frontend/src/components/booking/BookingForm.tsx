import { useState } from "react";
import { reservationServices } from "../../api/reservation";
import { useNavigate } from "react-router-dom";
import { checkOverlap } from "../../utils/booking/checkOverlap";
import type { CheckOverlap } from "../../types/booking";
import {
  isTooEarly,
  isTooLate,
  pastTheTime,
} from "../../utils/booking/timeUtils";
import { getAvailableDurations } from "../../utils/booking/availableDurations";
import { combineDateAndTime } from "../../utils/booking/dateUtils";

export default function BookingForm({
  selectedDate,
  tableNumber,
  getOperatingHours,
  busySlots,
}: {
  selectedDate: Date;
  tableNumber: number | null;
  getOperatingHours: (date: Date) => { open: number; close: number };
  busySlots: CheckOverlap[];
}) {
  const { open, close } = getOperatingHours(selectedDate);
  const [startTime, setStartTime] = useState(
    `${String(open).padStart(2, "0")}:00`,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    duration: "1",
    attendees: "1",
  });
  const [isLoading, setIsLoading] = useState(false);
  const durationHours = Number(formData.duration);
  const hasConflict = checkOverlap(
    startTime,
    durationHours,
    selectedDate,
    busySlots,
  );

  const isPastTime = pastTheTime(startTime, selectedDate);
  const tooEarly = isTooEarly(startTime, selectedDate);
  const tooLate = isTooLate(startTime, durationHours, selectedDate);

  const isBlocked = tooEarly || tooLate || isPastTime || hasConflict;

  const minTime = `${String(open).padStart(2, "0")}:00`;
  const maxTime = `${String(close - 1).padStart(2, "0")}:59`;

  const navigate = useNavigate();

  const durations = getAvailableDurations(startTime, selectedDate, busySlots);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>,
  ) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.SubmitEvent) => {
    e.preventDefault();

    if (isLoading || isBlocked) return;

    setIsLoading(true);

    const localDateTime = combineDateAndTime(selectedDate, startTime);

    console.log(localDateTime);

    const submissionData = {
      ...formData,
      startTime: localDateTime.toISOString(),
      tableNumber: tableNumber,
      paymentMethod: "stripe",
    };

    try {
      const data = await reservationServices.createReservation(submissionData);
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.log("Reservation created without payment!");
        navigate("/success");
      }
    } catch (error: any) {
      console.error(error.response.data.message);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="p-5 my-5" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="startTime" className="form-label">
          Start Time
        </label>
        <input
          type="time"
          id="startTime"
          className={`form-control ${isBlocked ? "is-invalid" : ""}`}
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          min={minTime}
          max={maxTime}
        />
        <label htmlFor="duration" className="form-label">
          Duration
        </label>
        <select
          className="form-select"
          name="duration"
          id="duration"
          value={formData.duration}
          onChange={handleChange}
        >
          {durations.map((d) => (
            <option key={d} value={d}>
              {d} {d === 1 ? "Hours" : "Hours"}
            </option>
          ))}
        </select>
      </div>
      <div className="mb-3 ">
        <label htmlFor="name" className="form-label">
          Name
        </label>
        <input
          type="text"
          className="form-control"
          name="name"
          id="name"
          value={formData.name}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label htmlFor="email" className="form-label">
          Email
        </label>
        <input
          type="email"
          className="form-control"
          name="email"
          id="email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="contact">
          Contact Number
        </label>
        <input
          type="text"
          className="form-control"
          name="contact"
          id="contact"
          maxLength={11}
          value={formData.contact}
          onChange={handleChange}
        />
      </div>
      <div className="mb-3">
        <label className="form-label" htmlFor="attendees">
          No. of Attendees
        </label>
        <input
          type="number"
          className="form-control"
          name="attendees"
          id="attendees"
          min={1}
          max={12}
          value={formData.attendees}
          onChange={handleChange}
        />
      </div>
      <div className="d-flex flex-column align-items-end">
        {isBlocked && (
          <p className="text-danger small fw-bold mb-2">
            ⚠️
            {tooLate
              ? `We close at ${close === 24 ? "12 MN" : close > 12 ? close - 12 + " PM" : close + " AM"}`
              : tooEarly
                ? `We open at ${open >= 12 ? (open === 12 ? "12 NN" : open - 12 + " PM") : open + " AM"}`
                : isPastTime
                  ? "You cannot book in the past!"
                  : "Slot Occupied!"}
          </p>
        )}

        <button
          type="submit"
          disabled={isBlocked === true || formData.name === ""}
          className={`btn ${isBlocked ? "btn-danger" : "btn-dark"}`}
          style={{ cursor: isBlocked ? "not-allowed" : "pointer" }}
        >
          {isLoading && (
            <span
              className="spinner-border spinner-border-sm"
              role="status"
              aria-hidden="true"
            ></span>
          )}
          {isLoading ? "Processing..." : isBlocked ? "Slot Occupied" : "Submit"}
        </button>
      </div>
    </form>
  );
}
