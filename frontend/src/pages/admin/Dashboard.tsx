import { Box, Typography } from "@mui/material";
import { useAuth } from "../../context/AuthContext";
import Capacity from "../../components/admin/dashboard/Capacity";
import TableMonitorGrid from "../../components/admin/dashboard/TableMonitorGrid";
import TableMonitorCard from "../../components/admin/dashboard/TableMonitorCard";

export default function Dashboard() {
  // const { user, role } = useAuth();
  return (
    // <hgroup>
    //   <h1>
    //     Hi! {role} {user?.displayName}
    //   </h1>
    //   <p>This is your dashboard!</p>
    // </hgroup>
    <Box sx={{ maxWidth: "1450px", width: "100%", mx: "auto" }}>
      <Box mb={3}>
        <Capacity />
      </Box>
      <Box>
        <TableMonitorGrid />
      </Box>
    </Box>
  );
}
