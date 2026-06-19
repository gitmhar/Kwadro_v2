import { Download } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import DataTable, { type Column } from "../../../ui/data-display/DataTable";
import SearchInput from "../../../ui/inputs/SearchInput";
import UserIdentity from "../../../ui/data-display/UserIdentity";
import {
  TRANSACTION_STATUS_CONFIG,
  type TransactionStatus,
} from "../../../../utils/constants/transactionStatus";
import StatusChip from "../../../ui/data-display/StatusChip";
import type { TransactionData } from "./features/TransactionMobileCard";
import SectionHeader from "../../../ui/shared/SectionHeader";
import TransactionCardList from "./features/TransactionCardList";

const tableData: TransactionData[] = [
  {
    customer: "Client 1",
    email: "client#1@billiard.com",
    table: "Table 01",
    amount: "$1,250.00",
    status: "Paid",
    hasPermission: false,
  },
  {
    customer: "Client 2",
    email: "client#2@billiard.com",
    table: "Table 07",
    amount: "$11660.00",
    status: "Pending",
    hasPermission: false,
  },
  {
    customer: "Client 3",
    email: "client#3@billiard.com",
    table: "Table 05",
    amount: "$61650.00",
    status: "Paid",
    hasPermission: false,
  },
  {
    customer: "Client 4",
    email: "client#4@billiard.com",
    table: "Table 03",
    amount: "$62630.00",
    status: "Flagged",
    hasPermission: false,
  },
  {
    customer: "Client 5",
    email: "client#5@billiard.com",
    table: "Table 11",
    amount: "$3.00",
    status: "Paid",
    hasPermission: false,
  },
];

const desktopColumns: Column<TransactionData>[] = [
  {
    field: "customer",
    headerName: "CUSTOMER",
    render: (row: TransactionData) => (
      <UserIdentity name={row.customer} email={row.email} />
    ),
  },
  {
    field: "table",
    headerName: "TABLE",
    render: (row: TransactionData) => (
      <Typography
        sx={{
          fontWeight: 700,
          color: "#474747",
          fontSize: "0.85rem",
        }}
      >
        {row.table}
      </Typography>
    ),
  },
  {
    field: "amount",
    headerName: "AMOUNT",
    render: (row: TransactionData) => (
      <Typography
        sx={{
          fontWeight: 700,
          color: "#474747",
          fontSize: "0.85rem",
        }}
      >
        {row.amount}
      </Typography>
    ),
  },
  {
    field: "status",
    headerName: "STATUS",
    render: (row: TransactionData) => {
      const statusStyle =
        TRANSACTION_STATUS_CONFIG[
          row.status.toLowerCase() as TransactionStatus
        ];
      return (
        <StatusChip
          label={row.status}
          bg={statusStyle.bg}
          color={statusStyle.text}
        />
      );
    },
  },
  {
    field: "hasPermission",
    headerName: "Action",
    align: "center",
    render: (row: TransactionData) => (
      <Box sx={{ display: "flex", gap: 1, justifyContent: "center" }}>
        <Button
          variant="text"
          disabled={!row.hasPermission}
          sx={{
            "&.Mui-disabled": {
              pointerEvents: "auto",
              cursor: "not-allowed",
            },
          }}
        >
          <Typography
            variant="caption"
            sx={{
              color: row.hasPermission ? "#d1d1d1" : "#a3a3a3",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            ISSUE REFUND
          </Typography>
        </Button>

        <Button
          variant="text"
          disabled={!row.hasPermission}
          sx={{
            "&.Mui-disabled": {
              pointerEvents: "auto",
              cursor: "not-allowed",
            },
            "&:hover": {},
          }}
          onClick={() => console.log("Edit", row.customer)}
        >
          <Typography
            variant="caption"
            sx={{
              color: "#d4d4d4",
              fontWeight: 600,
              letterSpacing: 1,
            }}
          >
            EDIT RECORD
          </Typography>
        </Button>
      </Box>
    ),
  },
];

export default function TransactionLog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  return (
    <Box sx={{ my: 4 }}>
      <Box sx={{ mb: 3 }}>
        <SectionHeader
          variant="admin"
          titleFirst
          title="Transaction Log"
          textVariant="h4"
          subtitle="Real-time ledger of all venue commercial activities"
          subtitleSx={{
            letterSpacing: "none",
            textTransform: "none",
            fontWeight: 500,
            fontSize: "1rem",
          }}
          rightElement={
            <Box
              sx={{
                display: "flex",
                gap: 2,
                alignItems: "center",
              }}
            >
              <SearchInput placeholder="Search database by name, email or ID..." />
              <Button
                variant="contained"
                startIcon={<Download />}
                sx={{
                  bgcolor: "#000000",
                  px: 3,
                  borderRadius: 2,
                  width: { xs: "50%", sm: "auto" },
                  whiteSpace: "nowrap",
                }}
              >
                EXPORT
              </Button>
            </Box>
          }
        />
      </Box>
      {isMobile ? (
        <TransactionCardList tableData={tableData} />
      ) : (
        <AdminCard sx={{ p: 0 }}>
          <DataTable columns={desktopColumns} data={tableData} />
        </AdminCard>
      )}
    </Box>
  );
}
