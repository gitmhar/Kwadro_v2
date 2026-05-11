import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminCard from "../../ui/cards/AdminCard";
import { AccessTime, DeleteOutline } from "@mui/icons-material";
import DataTable from "../../ui/data-display/DataTable";
import ReservationCardShell from "../../ui/shared/ReservationCardShell";
import UserIdentity from "../../ui/data-display/UserIdentity";

function createData(
  client: string,
  membershipType: string,
  table: string,
  schedule: string,
  action: string,
) {
  return { client, membershipType, table, schedule, action };
}

export default function ReservationList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const tableData = [
    createData("Client 1", "Elite Member", "Table 03", "04-25-2026", "Delete"),
    createData("Client 2", "VIP", "Table 02", "04-25-2026", "Delete"),
    createData("Client 3", "Walk-in", "Table 01", "04-25-2026", "Delete"),
    createData("Client 4", "VIP", "Table 05", "04-25-2026", "Delete"),
    createData("Client 5", "", "Table 04", "04-25-2026", "Delete"),
    createData("Client 6", "", "Table 02", "06-25-2026", "Delete"),
    createData("Client 7", "", "Table 07", "05-22-2026", "Delete"),
    createData("Client 8", "", "Table 01", "05-21-2026", "Delete"),
  ];
  return (
    <>
      {isMobile ? (
        // Silpon View
        <Stack spacing={2}>
          {tableData.map((row) => (
            <ReservationCardShell
              key={row.client}
              left={
                <UserIdentity
                  name={row.client}
                  subtitle={row.membershipType || "Standard"}
                />
              }
              right={
                <>
                  <Chip
                    label={row.table}
                    size="small"
                    sx={{
                      borderRadius: "8px",
                      fontWeight: 600,
                      bgcolor: "#f3f3f3",
                      color: "#1a1c1c",
                    }}
                  />
                </>
              }
              bottom={
                <>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      gap: 1.2,
                      mb: 3,
                      color: "#666",
                    }}
                  >
                    <AccessTime sx={{ fontSize: "1.1rem", color: "#a3a3a3" }} />
                    <Typography
                      variant="body2"
                      sx={{ fontWeight: 700, color: "#474747" }}
                    >
                      {row.schedule}
                    </Typography>
                  </Box>

                  <Button
                    fullWidth
                    variant="contained"
                    startIcon={<DeleteOutline />}
                    sx={{
                      bgcolor: "#fff1f1",
                      color: "#e11d48",
                      boxShadow: "none",
                      py: 1.5,
                      borderRadius: "12px",
                      fontWeight: 800,
                      fontSize: "0.75rem",
                      "&:hover": { bgcolor: "#ffe2e2", boxShadow: "none" },
                    }}
                  >
                    DELETE RESERVATION
                  </Button>
                </>
              }
            />
          ))}
        </Stack>
      ) : (
        // Desktop view
        <AdminCard
          sx={{
            p: 0,
            overflow: "hidden",
            border: "1px solid #f0f0f0",
            boxShadow: "none",
            borderRadius: "24px",
            height: "auto",
          }}
        >
          <DataTable
            columns={[
              {
                field: "client",
                headerName: "CLIENT",
                render: (row) => (
                  <Box>
                    <Typography sx={{ fontWeight: 700, color: "#000" }}>
                      {row.client}
                    </Typography>
                    <Typography variant="caption" sx={{ color: "#a3a3a3" }}>
                      {row.membershipType || "Standard"}
                    </Typography>
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
                field: "schedule",
                headerName: "SCHEDULE",
                render: (row) => (
                  <Typography sx={{ color: "#474747" }}>
                    {row.schedule}
                  </Typography>
                ),
              },
              {
                field: "action",
                headerName: "ACTION",
                render: (row) => (
                  <IconButton
                    size="small"
                    sx={{
                      border: "1px solid #e0e0e0",
                      borderRadius: "8px",
                      color: "#a3a3a3",
                    }}
                  >
                    <DeleteOutline fontSize="small" />
                  </IconButton>
                ),
              },
            ]}
            data={tableData}
          />
        </AdminCard>
      )}
    </>
  );
}
