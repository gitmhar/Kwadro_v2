import "react-calendar/dist/Calendar.css";
import AdminCard from "../../../ui/cards/AdminCard";
import Calendar from "react-calendar";
import { calendarStyleWrapper as CalendarWrapper } from "./style/BookingCalendar.styles";
import { useState } from "react";
import { Box, Button, Divider, Typography } from "@mui/material";
import { EventBusy } from "@mui/icons-material";
import SectionHeader from "../../../ui/shared/SectionHeader";

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
        bgcolor: "#F3F3F3",
        p: 3,
        borderRadius: "24px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100%",
        boxShadow: "none",
      }}
    >
      {/* Header */}
      <SectionHeader
        variant="admin"
        title="Blackout Dates"
        titleSx={{ color: "#474747", fontWeight: 700 }}
        textVariant="h6"
        rightElement={<EventBusy sx={{ color: "#474747" }} />}
        sx={{ flexDirection: "row", width: "100%", maxWidth: "400px", mb: 3 }}
      />

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
        <Divider sx={{ mb: 3, borderColor: "#E0E0E0" }} />
        <Typography
          variant="body2"
          sx={{
            color: "#8E8E8E",
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
            py: 1.6,
            borderRadius: "12px",
            borderColor: "#D1D1D1",
            color: "#474747",
            fontWeight: 700,
            fontSize: "0.75",
            letterSpacing: 1,
            textTransform: "uppercase",
            "&:hover": {
              borderColor: "#000",
              backgroundColor: "rgba(0,0,0,0.02)",
              boxShadow: "none",
            },
          }}
        >
          Update Restrictions
        </Button>
      </Box>
    </AdminCard>
  );
}
