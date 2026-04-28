import { Box } from "@mui/material";
import TransactionKPI from "./TransactionKPI";
import RqPermission from "./RqPermission";

export default function Upper() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        gap: 4,
        // alignItems: "stretch",
      }}
    >
      <Box sx={{ flex: { xs: "1 1 auto", md: "3" } }}>
        <TransactionKPI />
      </Box>

      <Box sx={{ flex: { xs: "1 1 auto", md: "1" } }}>
        <RqPermission />
      </Box>
    </Box>
  );
}
