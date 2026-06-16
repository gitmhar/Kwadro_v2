import { Download } from "@mui/icons-material";
import {
  Box,
  Button,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import DataTable from "../../../ui/data-display/DataTable";
import TransactionCardList from "./TransactionCardList";
import SearchInput from "../../../ui/inputs/SearchInput";
import UserIdentity from "../../../ui/data-display/UserIdentity";
import {
  TRANSACTION_STATUS_CONFIG,
  type TransactionStatus,
} from "../../../../utils/constants/transactionStatus";
import StatusChip from "../../../ui/data-display/StatusChip";

function createData(
  customer: string,
  email: string,
  table: string,
  amount: string,
  status: string,
  hasPermission: boolean,
) {
  return { customer, email, table, amount, status, hasPermission };
}

const getStatusColor = (status: string) => {
  switch (status.toLowerCase()) {
    case "paid":
      return { bg: "#ECFDF5", text: "#059669" };
    case "pending":
      return { bg: "#FFFBEB", text: "#D97706" };
    case "flagged":
      return { bg: "#FEF2F2", text: "#DC2626" };
    default:
      return { bg: "#F3F4F6", text: "#374151" };
  }
};

export default function TransactionLog() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const tableData = [
    createData(
      "Client 1",
      "client#1@billiard.com",
      "Table 01",
      "$1,250.00",
      "Paid",
      false,
    ),
    createData(
      "Client 2",
      "client#2@billiard.com",
      "Table 07",
      "$11660.00",
      "Pending",
      false,
    ),
    createData(
      "Client 3",
      "client#3@billiard.com",
      "Table 05",
      "$61650.00",
      "Paid",
      false,
    ),
    createData(
      "Client 4",
      "client#4@billiard.com",
      "Table 03",
      "$62630.00",
      "Flagged",
      false,
    ),
    createData(
      "Client 5",
      "client#5@billiard.com",
      "Table 11",
      "$3.00",
      "Paid",
      false,
    ),
  ];
  return (
    <Box sx={{ my: 4 }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h4" sx={{ fontWeight: 600 }}>
            Transaction Log
          </Typography>
          <Typography variant="subtitle1">
            Real-time ledger of all venue commercial activities.
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: 2,
            justifyContent: "flex-end",
            alignItems: "center",
            mt: 2,
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
      </Box>
      {isMobile ? (
        <TransactionCardList tableData={tableData} />
      ) : (
        <AdminCard sx={{ p: 0 }}>
          <DataTable
            columns={[
              {
                field: "customer",
                headerName: "CUSTOMER",
                render: (row) => (
                  <UserIdentity name={row.customer} email={row.email} />
                ),
              },
              {
                field: "table",
                headerName: "TABLE",
                render: (row) => (
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
                render: (row) => (
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
                render: (row) => {
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
                render: (row) => (
                  <Box
                    sx={{ display: "flex", gap: 1, justifyContent: "center" }}
                  >
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
            ]}
            data={tableData}
          />
        </AdminCard>
      )}
    </Box>
  );
}
