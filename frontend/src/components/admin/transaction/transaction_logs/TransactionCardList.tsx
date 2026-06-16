import { Box, Typography, Stack, Button, IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import UserIdentity from "../../../ui/data-display/UserIdentity";
import {
  TRANSACTION_STATUS_CONFIG,
  type TransactionStatus,
} from "../../../../utils/constants/transactionStatus";
import StatusChip from "../../../ui/data-display/StatusChip";

interface TransactionRow {
  customer: string;
  email: string;
  table: string;
  amount: string;
  status: string;
  hasPermission: boolean;
}

export default function TransactionCardList({
  tableData,
}: {
  tableData: TransactionRow[];
}) {
  return (
    <Stack spacing={2} sx={{ mt: 2 }}>
      {tableData.map((row, i) => {
        const statusStyle =
          TRANSACTION_STATUS_CONFIG[
            row.status.toLowerCase() as TransactionStatus
          ];
        return (
          <Box
            key={i}
            sx={{
              p: 3,
              borderRadius: "24px",
              bgcolor: "#fff",
              border: "1px solid #f0f0f0",
              boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
            }}
          >
            {/* Top Row: Identity & Amount */}
            <Box
              sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}
            >
              <UserIdentity
                name={row.customer}
                subtitle={`${row.table} • 14:20 PM`}
              />

              <Box sx={{ textAlign: "right" }}>
                <Typography
                  sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1c1c" }}
                >
                  {row.amount}
                </Typography>
                <StatusChip
                  label={row.status}
                  bg={statusStyle.bg}
                  color={statusStyle.text}
                />
              </Box>
            </Box>

            <Box sx={{ height: "1px", bgcolor: "#f0f0f0", mb: 3 }} />

            {/* Bottom Row: Action Buttons */}
            <Box sx={{ display: "flex", gap: 1.5 }}>
              <Button
                fullWidth
                variant="contained"
                disableElevation
                disabled={!row.hasPermission}
                sx={{
                  bgcolor: "#1a1c1c",
                  color: "#fff",
                  borderRadius: "12px",
                  py: 1.5,
                  fontSize: "0.75rem",
                  fontWeight: 700,
                  textTransform: "none",
                  "&.Mui-disabled": {
                    bgcolor: "#f5f5f5",
                    color: "#cccccc",
                    pointerEvents: "auto",
                    cursor: "not-allowed",
                  },
                }}
              >
                Issue Refund
              </Button>

              <IconButton
                disabled={!row.hasPermission}
                sx={{
                  bgcolor: "#f5f5f5",
                  borderRadius: "12px",
                  width: 48,
                  height: 48,
                  "&.Mui-disabled": {
                    pointerEvents: "auto",
                    cursor: "not-allowed",
                  },
                }}
              >
                <Edit
                  sx={{
                    fontSize: 18,
                    color: row.hasPermission ? "#000" : "#cccccc",
                  }}
                />
              </IconButton>
            </Box>
          </Box>
        );
      })}
    </Stack>
  );
}
