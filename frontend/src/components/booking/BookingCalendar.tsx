import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";
import "../../utils/stylesheets/custom_calendar.css";
import { Box, Stack, Typography } from "@mui/material";
import SelectedDatePill from "./shared/SelectedDatePill";

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

  const formattedDate = selectedDate.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        py: { xs: 2, sm: 3 },
        my: { xs: 1, sm: 3 },
        width: "100%",
        textAlign: "center",
      }}
    >
      <Stack
        spacing={{ xs: 1.5, sm: 2 }}
        sx={{
          width: "100%",
          maxWidth: "400px",
          alignItems: "center",
          mx: "auto",
        }}
      >
        <Box
          sx={{
            width: { xs: "100%", sm: "auto" },
            position: "relative",
          }}
        >
          <Typography
            className="choose-date-title"
            variant="caption"
            sx={{
              position: "absolute",
              top: "12px",
              left: { xs: "0", sm: "0" },
              color: "#9c9c9c",
              fontWeight: "900",
              textTransform: "uppercase",
              letterSpacing: "1px",
              fontSize: "0.85rem",
              zIndex: 1,
            }}
          >
            Choose Date
          </Typography>
          <Calendar
            value={selectedDate}
            onChange={handleDateChange}
            minDate={new Date()}
            tileClassName={tileClassName}
            navigationLabel={({ date }) => (
              <Typography
                sx={{
                  fontWeight: "bold",
                  color: "white",
                  fontSize: { xs: "0.8rem", sm: "1rem" },
                  whiteSpace: "nowrap",
                }}
              >
                {date.toLocaleDateString("en-US", {
                  month: "long",
                  year: "numeric",
                })}
              </Typography>
            )}
            prev2Label={null}
            next2Label={null}
          />
        </Box>
        <Box sx={{ width: "100%", maxWidth: "350px" }}>
          <SelectedDatePill dateString={formattedDate} />
        </Box>
      </Stack>
    </Box>
  );
}
