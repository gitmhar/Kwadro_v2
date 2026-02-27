import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../utils/stylesheets/custom_calendar.css";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function BookingCalendar({
  selectedDate,
  setSelectedDate,
}: any) {
  const today = new Date();

  const tileClassName = ({ date: tileDate, view }: any) => {
    if (view === "month") {
      if (
        tileDate.getDate() === today.getDate() &&
        tileDate.getMonth() === today.getMonth() &&
        tileDate.getFullYear() === today.getFullYear()
      ) {
        return "today-highlight";
      }
    }
    return null;
  };

  const handleDateChange = (value: Value) => {
    if (value instanceof Date) setSelectedDate(value);
  };

  return (
    <div className="d-flex justify-content-center py-5 my-5">
      <Calendar
        value={selectedDate}
        onChange={handleDateChange}
        minDate={new Date()}
        tileClassName={tileClassName}
      />
    </div>
  );
}
