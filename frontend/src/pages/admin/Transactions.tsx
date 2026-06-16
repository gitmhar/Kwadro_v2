import { Box } from "@mui/material";
import TransactionLog from "../../components/admin/transaction/transaction_logs/TransactionLog";
import Upper from "../../components/admin/transaction/overview/Upper";
import SysAudit from "../../components/admin/transaction/audit/SysAudit";

export default function Transaction() {
  return (
    <Box sx={{ maxWidth: "1450px", width: "100%", mx: "auto" }}>
      <Box>
        <Upper />
      </Box>
      <Box>
        <TransactionLog />
      </Box>
      <Box>
        <SysAudit />
      </Box>
    </Box>
  );
}
