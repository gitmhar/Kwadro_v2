import { Box } from "@mui/material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import ABGrid from "./ABGrid";

export default function ActiveBookings() {
  return (
    <Box>
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <SectionHeader title="Active Bookings" subtitle="Real-Time" />
      </Box>
      <Box>
        <ABGrid />
      </Box>
    </Box>
  );
}
