import { Box, Grid } from "@mui/material";
import ReservationList from "../../components/admin/reservations/ReservationTable";
import AdminCalendar from "../../components/admin/reservations/calendar/AdminCalendar";
import SectionHeader from "../../components/ui/shared/SectionHeader";
import ArrivingSoon from "../../components/admin/reservations/arriving_soon/ArrivingSoon";
import ActiveBookings from "../../components/admin/reservations/active_bookings/ActiveBooking";

export default function Reservations() {
  return (
    <Box
      sx={{
        maxWidth: "1450px",
        width: "100%",
        mx: "auto",
        px: { xs: 2, sm: 3, lg: 4 },
      }}
    >
      {/* Header */}
      <SectionHeader
        title="Reservation"
        subtitle="Management"
        primaryBtnLabel="Generate Report"
      />

      {/* Main Management Panel */}
      <Grid container spacing={4} sx={{ mt: 2, alignItems: "stretch" }}>
        <Grid size={{ xs: 12, md: 8 }}>
          <ReservationList />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AdminCalendar />
        </Grid>
      </Grid>

      {/* Secondary Operational Priorities */}
      <Box sx={{ mt: 6, display: "flex", flexDirection: "column", gap: 6 }}>
        <ArrivingSoon />
        <ActiveBookings />
      </Box>
    </Box>
  );
}
