import { Box } from "@mui/material";
import TransactionLog from "../../components/admin/transaction/transaction_logs/TransactionLog";
import Upper from "../../components/admin/transaction/overview/Upper";
import SysAudit from "../../components/admin/transaction/audit/SysAudit";

export default function Transaction() {
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
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <Upper />
      </Box>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <TransactionLog />
      </Box>
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <SysAudit />
      </Box>
    </Box>
  );
}
