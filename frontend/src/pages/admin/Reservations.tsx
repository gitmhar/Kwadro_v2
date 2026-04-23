import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import ReservationList from "../../components/admin/reservations/ReservationTable";
import AdminCalendar from "../../components/admin/reservations/AdminCalendar";
import CustomerCRM from "../../components/admin/reservations/CustomerCRM";
import SectionHeader from "../../components/admin/partials/SectionHeader";
import { Add, Campaign } from "@mui/icons-material";

export default function Reservations() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ maxWidth: "1550px", width: "100%", mx: "auto" }}>
      <SectionHeader
        title="Reservation"
        subtitle="Management"
        primaryBtnLabel="Generate Report"
        secondaryBtnLabel="Manual Booking"
        primaryBtnIcon
        secondaryBtnIcon={<Add />}
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
      <SectionHeader
        title="Customer CRM"
        subtitle="Intelligence"
        primaryBtnLabel="Export CSV"
        secondaryBtnLabel="Send Email Blast"
        primaryBtnIcon=""
        secondaryBtnIcon={<Campaign />}
        hideOnButtonMobile={true}
      />
      <Box
        sx={{
          my: 3,
          width: "100%",
        }}
      >
        <Box>
          <CustomerCRM />
        </Box>
      </Box>
    </Box>
  );
}
