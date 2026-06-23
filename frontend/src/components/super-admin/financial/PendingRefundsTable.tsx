import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import AssignmentReturnIcon from "@mui/icons-material/AssignmentReturn";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface RefundTransaction {
  id: string;
  terminal: string;
  amount: string;
}

export interface PendingRefundsTableProps {
  transactions: RefundTransaction[];
  onApprove: (id: string) => void;
}

export default function PendingRefundsTable({
  transactions = [
    { id: "TXN_99201-B", terminal: "LV-NODE-03", amount: "$420.00" },
    { id: "TXN_99288-C", terminal: "TK-SHINJUKU", amount: "$15.50" },
  ],
  onApprove,
}: PendingRefundsTableProps) {
  const pendingCount = String(transactions.length).padStart(2, "0");

  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Header Panel */}
      <Box
        sx={{
          p: "16px",
          borderBottom: "1px solid #2E2E2E",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: cueColors.surfaceContainerLow,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <AssignmentReturnIcon sx={{ color: cueColors.primary, fontSize: "20px" }} />
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "18px",
              fontWeight: 600,
              textTransform: "uppercase",
              color: cueColors.primary,
            }}
          >
            Audit Queue: Pending Refunds
          </Typography>
        </Box>
        <Box
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
            fontWeight: 500,
            backgroundColor: cueColors.primary,
            color: "#000000",
            px: "8px",
            py: "2px",
            letterSpacing: "0.05em",
          }}
        >
          {pendingCount} PENDING
        </Box>
      </Box>

      {/* Table Container */}
      <TableContainer>
        <Table sx={{ width: "100%", borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow sx={{ backgroundColor: "#000000" }}>
              <TableCell
                sx={{
                  borderBottom: "1px solid #2E2E2E",
                  px: "24px",
                  py: "16px",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: cueColors.primary,
                  opacity: 0.5,
                }}
              >
                Transaction
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #2E2E2E",
                  px: "24px",
                  py: "16px",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: cueColors.primary,
                  opacity: 0.5,
                }}
              >
                Terminal
              </TableCell>
              <TableCell
                sx={{
                  borderBottom: "1px solid #2E2E2E",
                  px: "24px",
                  py: "16px",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: cueColors.primary,
                  opacity: 0.5,
                }}
              >
                Amount
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  borderBottom: "1px solid #2E2E2E",
                  px: "24px",
                  py: "16px",
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  textTransform: "uppercase",
                  color: cueColors.primary,
                  opacity: 0.5,
                }}
              >
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow
                key={txn.id}
                sx={{
                  "&:hover": { backgroundColor: cueColors.surfaceBright },
                  transition: "background-color 150ms ease",
                }}
              >
                <TableCell
                  sx={{
                    borderBottom: "1px solid #2E2E2E",
                    px: "24px",
                    py: "16px",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "11px",
                    fontWeight: 700,
                    color: cueColors.primary,
                  }}
                >
                  {txn.id}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #2E2E2E",
                    px: "24px",
                    py: "16px",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "12px",
                    color: cueColors.primary,
                    opacity: 0.7,
                  }}
                >
                  {txn.terminal}
                </TableCell>
                <TableCell
                  sx={{
                    borderBottom: "1px solid #2E2E2E",
                    px: "24px",
                    py: "16px",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "11px",
                    color: cueColors.primary,
                  }}
                >
                  {txn.amount}
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "1px solid #2E2E2E", px: "24px", py: "16px" }}>
                  <Button
                    onClick={() => onApprove && onApprove(txn.id)}
                    sx={{
                      backgroundColor: cueColors.primary,
                      color: "#000000",
                      px: "12px",
                      py: "4px",
                      borderRadius: 0,
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "10px",
                      fontWeight: 700,
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                      },
                    }}
                  >
                    APPROVE
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
