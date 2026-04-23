import "react-calendar/dist/Calendar.css";
import AdminCard from "../../ui/AdminCard";
import Calendar from "react-calendar";
import { calendarStyleWrapper as CalendarWrapper } from "../../../theme/calendarStyleWrapper";
import { useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { EventBusy } from "@mui/icons-material";

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

export default function AdminCalendar() {
  const [selectedDate, setSelectedDate] = useState(new Date());
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
    <AdminCard
      sx={{
        bgcolor: "#f3f3f3",
        p: 3,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "100%",
          maxWidth: "400px",
          mb: 2,
        }}
      >
        <Typography variant="h6" sx={{ fontWeight: 700, color: "#474747" }}>
          Blackout Dates
        </Typography>
        <EventBusy sx={{ color: "#474747" }} />
      </Box>

      {/* Calendar */}
      <CalendarWrapper>
        <Calendar
          tileClassName={tileClassName}
          value={selectedDate}
          onChange={handleDateChange}
        />
      </CalendarWrapper>

      {/* Footer */}
      <Box
        sx={{ mt: 3, width: "100%", maxWidth: "400px", textAlign: "center" }}
      >
        <Divider sx={{ mb: 3, borderColor: "#e0e0e0" }} />
        <Typography
          variant="body2"
          sx={{
            color: "#8e8e8e",
            lineHeight: 1.5,
            mb: 3,
            fontSize: "0.85rem",
          }}
        >
          Selected dates will be unavailable for all booking platforms and
          walk-in staff.
        </Typography>

        {/* Button */}

        <Button
          fullWidth
          variant="outlined"
          sx={{
            py: 1.5,
            borderRadius: "12px",
            borderColor: "#d1d1d1",
            color: "#474747",
            fontWeight: 700,
            letterSpacing: 1,
            textTransform: "uppercase",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "rgba(0,0,0,0.02)",
            },
          }}
        >
          Update Restrictions
        </Button>
      </Box>
    </AdminCard>
  );
}
