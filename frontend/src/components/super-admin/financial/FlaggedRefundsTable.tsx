import React from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
} from "@mui/material";
import FlagIcon from "@mui/icons-material/Flag";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface FlaggedTransaction {
  id: string;
  terminal: string;
  amount: string;
}

export interface FlaggedRefundsTableProps {
  transactions: FlaggedTransaction[];
  onInvestigate: (id: string) => void;
}

export default function FlaggedRefundsTable({
  transactions = [
    { id: "TXN_99245-A", terminal: "LON-CENTRAL", amount: "$1,200.00" },
  ],
  onInvestigate,
}: FlaggedRefundsTableProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        borderLeft: "4px solid #ef4444", // red-500 equivalent
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
          backgroundColor: "rgba(239, 68, 68, 0.1)", // red-950/20 equivalent
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <FlagIcon sx={{ color: "#ef4444", fontSize: "20px" }} />
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "18px",
              fontWeight: 600,
              textTransform: "uppercase",
              color: "#ef4444",
            }}
          >
            Flagged Refunds
          </Typography>
        </Box>
        <Box
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
            fontWeight: 500,
            backgroundColor: "#ef4444",
            color: "#000000",
            px: "8px",
            py: "2px",
            letterSpacing: "0.05em",
          }}
        >
          CRITICAL AUDIT
        </Box>
      </Box>

      {/* Table Container */}
      <TableContainer>
        <Table sx={{ width: "100%", borderCollapse: "collapse" }}>
          <TableBody>
            {transactions.map((txn) => (
              <TableRow
                key={txn.id}
                sx={{
                  backgroundColor: "rgba(239, 68, 68, 0.05)",
                  "&:hover": { backgroundColor: "rgba(239, 68, 68, 0.1)" },
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
                    color: "#fecaca", // red-200 equivalent
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
                    color: "#fecaca",
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
                    fontWeight: 700,
                    color: "#fecaca",
                  }}
                >
                  {txn.amount}
                </TableCell>
                <TableCell align="right" sx={{ borderBottom: "1px solid #2E2E2E", px: "24px", py: "16px" }}>
                  <Button
                    onClick={() => onInvestigate && onInvestigate(txn.id)}
                    sx={{
                      border: "1px solid #ef4444",
                      backgroundColor: "transparent",
                      color: "#ef4444",
                      px: "12px",
                      py: "4px",
                      borderRadius: 0,
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "10px",
                      fontWeight: 700,
                      boxShadow: "none",
                      "&:hover": {
                        backgroundColor: "#ef4444",
                        color: "#000000",
                      },
                    }}
                  >
                    INVESTIGATE
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
