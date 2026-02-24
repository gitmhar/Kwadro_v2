import { useState } from "react";
import { createReservation } from "../../api/reservation";
import { useNavigate } from "react-router-dom";

export default function BookingForm({ selectedDate }: { selectedDate: Date }) {
  const [startTime, setStartTime] = useState("10:00");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    startTime: "",
    duration: "1",
    attendees: "1",
  });

  const navigate = useNavigate();

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

    const [hours, minutes] = startTime.split(":");
    const finalDateTime = new Date(selectedDate);
    finalDateTime.setHours(parseInt(hours), parseInt(minutes));

    const submissionData = {
      ...formData,
      startTime: finalDateTime.toISOString(),
      tableNumber: 1,
    };

    try {
      await createReservation(submissionData);
      console.log("Reservation successful!");
      navigate("/");
    } catch (error) {
      console.error("Unable to make schedule");
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
          className="form-control"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
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
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
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
      <div className="d-flex justify-content-end">
        <button type="submit" className="btn btn-dark">
          Submit
        </button>
      </div>
    </form>
  );
}
