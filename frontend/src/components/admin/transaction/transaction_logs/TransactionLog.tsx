import { Download, Search } from "@mui/icons-material";
import {
  Avatar,
  Box,
  Button,
  InputAdornment,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminCard from "../../../ui/AdminCard";
import DataTable from "../../partials/DataTable";
import TransactionCardList from "./TransactionCardList";

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
      "Burat",
      true,
    ),
  ];
  return (
    <Box sx={{ my: 5 }}>
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
            mt: 2
          }}
        >
          <TextField
            placeholder="Search database by name, email or ID..."
            variant="standard"
            InputProps={{
              disableUnderline: true,
              startAdornment: (
                <InputAdornment position="start">
                  <Search sx={{ color: "#a3a3a3", fontSize: 20 }} />
                </InputAdornment>
              ),
            }}
            sx={{
              bgcolor: "#F3F3F3",
              borderRadius: "12px",
              px: 2,
              py: 1,
              width: { xs: "100%", md: "400px" },
              "& .MuiInputBase-input": {
                fontSize: "0.85rem",
                color: "#6B7280",
              },
            }}
          />
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
                  <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
                    <Avatar
                      sx={{
                        bgcolor: "#f0f0f0",
                        color: "#474747",
                        fontSize: "0.75rem",
                        fontWeight: 700,
                      }}
                    >
                      {row.customer
                        .split(" ")
                        .map((n) => n[0])
                        .join("")}
                    </Avatar>
                    <Box>
                      <Typography
                        sx={{
                          fontWeight: 700,
                          color: "#474747",
                          fontSize: "0.9rem",
                        }}
                      >
                        {row.customer}
                      </Typography>
                      <Typography
                        sx={{ color: "#a3a3a3", fontSize: "0.75rem" }}
                      >
                        {row.email}
                      </Typography>
                    </Box>
                  </Box>
                ),
              },
              {
                field: "table",
                headerName: "TABLE",
                render: (row) => (
                  <Typography sx={{ fontWeight: 700, color: "#474747" }}>
                    {row.table}
                  </Typography>
                ),
              },
              {
                field: "amount",
                headerName: "AMOUNT",
                render: (row) => (
                  <Typography sx={{ color: "#474747" }}>
                    {row.amount}
                  </Typography>
                ),
              },
              {
                field: "status",
                headerName: "STATUS",
                render: (row) => (
                  <Box
                    sx={{
                      display: "inline-block",
                      bgcolor: "#f0f0f0",
                      px: 1.5,
                      py: 0.5,
                      borderRadius: "20px",
                      fontSize: "0.65rem",
                      fontWeight: 800,
                      color: "#474747",
                      textTransform: "uppercase",
                    }}
                  >
                    {row.status}
                  </Box>
                ),
              },
              {
                field: "hasPermission",
                headerName: "Action",
                align: "right",
                render: (row) => (
                  <Box
                    sx={{ display: "flex", gap: 1, justifyContent: "flex-end" }}
                  >
                    <Button
                      variant="text"
                      disabled={row.hasPermission}
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
                      disabled={row.hasPermission}
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
