import { Box } from "@mui/material";
import Capacity from "../../components/admin/dashboard/Capacity";
import TableMonitorGrid from "../../components/admin/dashboard/TableMonitorGrid";

export default function Dashboard() {
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
      <Box sx={{ mb: 4 }}>
        <Capacity />
      </Box>
      <Box>
        <TableMonitorGrid />
      </Box>
    </Box>
  );
}
