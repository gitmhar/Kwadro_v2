import { Box } from "@mui/material";
import ReservationList from "../../components/admin/reservations/ReservationTable";
import AdminCalendar from "../../components/admin/reservations/AdminCalendar";
import SectionHeader from "../../components/admin/partials/SectionHeader";
import ArrivingSoon from "../../components/admin/reservations/arriving_soon/ArrivingSoon";
import ActiveBookings from "../../components/admin/reservations/active_bookings/ActiveBooking";

export default function Reservations() {
  return (
    <Box sx={{ maxWidth: "1450px", width: "100%", mx: "auto" }}>
      <SectionHeader
        title="Reservation"
        subtitle="Management"
        primaryBtnLabel="Generate Report"
      />
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          gap: 5,
          my: 3,
          width: "100%",
        }}
      >
        <Box sx={{ width: "100%" }}>
          <ReservationList />
        </Box>
        <Box>
          <AdminCalendar />
        </Box>
      </Box>
      <Box
        sx={{
          my: 3,
          width: "100%",
        }}
      >
        <Box>
          <ArrivingSoon />
        </Box>
      </Box>
      <Box
        sx={{
          my: 3,
          width: "100%",
        }}
      >
        <Box>
          <ActiveBookings />
        </Box>
      </Box>
    </Box>
  );
}
