import { Box } from "@mui/material";
import TransactionKPI from "./TransactionKPI";
import RqPermission from "./RqPermission";

export default function Upper() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "1fr",
          md: "1.7fr 1fr",
        },
        gap: 3,
        alignItems: "stretch",
      }}
    >
      <TransactionKPI />
      <RqPermission />
    </Box>
  );
}
