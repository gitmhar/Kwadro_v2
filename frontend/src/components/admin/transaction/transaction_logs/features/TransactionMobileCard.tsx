import { Box, Button, IconButton, Typography } from "@mui/material";
import {
  TRANSACTION_STATUS_CONFIG,
  type TransactionStatus,
} from "../../../../../utils/constants/transactionStatus";
import UserIdentity from "../../../../ui/data-display/UserIdentity";
import StatusChip from "../../../../ui/data-display/StatusChip";
import { Edit } from "@mui/icons-material";

export interface TransactionData {
  customer: string;
  email: string;
  table: string;
  amount: string;
  status: string;
  hasPermission: boolean;
}

interface TransactionMobileCardProps {
  transaction: TransactionData;
}

export default function TransactionMobileCard({
  transaction,
}: TransactionMobileCardProps) {
  const statusStyle =
    TRANSACTION_STATUS_CONFIG[
      transaction.status.toLowerCase() as TransactionStatus
    ];

  return (
    <Box
      sx={{
        p: 3,
        borderRadius: "24px",
        bgcolor: "#FFFFFF",
        border: "1px solid #F0F0F0",
        boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.02)",
      }}
    >
      {/* Top Row: Identity & Amount */}
      <Box sx={{ display: "flex", justifyContent: "space-between", mb: 3 }}>
        <UserIdentity
          name={transaction.customer}
          subtitle={`${transaction.table} • 14:20 PM`}
        />
        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{ fontWeight: 800, fontSize: "1.1rem", color: "#1a1c1c" }}
          >
            {transaction.amount}
          </Typography>
          <StatusChip
            label={transaction.status}
            bg={statusStyle.bg}
            color={statusStyle.text}
          />
        </Box>
      </Box>
      <Box sx={{ height: "1px", bgcolor: "#F0F0F0", mb: 3 }} />
      {/* Bottom Row: Action Buttons */}
      <Box sx={{ display: "flex", gap: 1.5 }}>
        <Button
          fullWidth
          variant="contained"
          disableElevation
          disabled={!transaction.hasPermission}
          sx={{
            bgcolor: "#1A1C1C",
            color: "#fff",
            borderRadius: "12px",
            py: 1.5,
            fontSize: "0.75rem",
            fontWeight: 700,
            textTransform: "none",
            "&.Mui-disabled": {
              bgcolor: "#F5F5F5",
              color: "#CCCCCC",
              pointerEvents: "auto",
              cursor: "not-allowed",
            },
          }}
        >
          Issue Refund
        </Button>

        <IconButton
          disabled={!transaction.hasPermission}
          sx={{
            bgcolor: "#F5F5F5",
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
              color: transaction.hasPermission ? "#000000" : "#CCCCCC",
            }}
          />
        </IconButton>
      </Box>
    </Box>
  );
}
