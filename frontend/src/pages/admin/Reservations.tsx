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
        px: { xs: 1, sm: 2, lg: 0 },
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
      <SectionHeader
        title="Reservation"
        subtitle="Management"
        primaryBtnLabel="Generate Report"
      />

      {/* Main Management Panel */}
      <Grid
        container
        spacing={{ xs: 2, sm: 3, md: 4 }}
        sx={{ mt: { xs: 1, sm: 2 }, alignItems: "stretch" }}
      >
        <Grid size={{ xs: 12, md: 8 }}>
          <ReservationList />
        </Grid>

        <Grid size={{ xs: 12, md: 4 }}>
          <AdminCalendar />
        </Grid>
      </Grid>

      {/* Secondary Operational Priorities */}
      <Box
        sx={{
          mt: { xs: 4, sm: 6 },
          display: "flex",
          flexDirection: "column",
          gap: { xs: 4, sm: 6 },
          width: "100%",
          overflow: "hidden",
        }}
      >
        <ArrivingSoon />
        <ActiveBookings />
      </Box>
    </Box>
  );
}
