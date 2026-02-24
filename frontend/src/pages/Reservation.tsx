import { useState } from "react";
import BookingCalendar from "../components/services/BookingCalendar";
import BookingForm from "../components/services/BookingForm";

export default function Reservation() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());

  return (
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6">
          <BookingCalendar
            selectedDate={selectedDate}
            setSelectedDate={setSelectedDate}
          />
        </div>
        <div className="col-12 col-lg-6">
          <BookingForm selectedDate={selectedDate}/>
        </div>
      </div>
    </div>
  );
}
