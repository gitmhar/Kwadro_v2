import { Box } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import Capacity from "../../components/admin/dashboard/Capacity";
import TableMonitorGrid from "../../components/admin/dashboard/TableMonitorGrid";

export default function Dashboard() {
  // const { user, role } = useAuth();
  return (
    // <hgroup>
    //   <h1>
    //     Hi! {role} {user?.displayName}
    //   </h1>
    //   <p>This is your dashboard!</p>
    // </hgroup>
    <Box
      sx={{
        maxWidth: "1450px",
        width: "100%",
        mx: "auto",
        px: { xs: 2, sm: 3, lg: 4 },
        mt: { xs: 2, sm: 3 }
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
