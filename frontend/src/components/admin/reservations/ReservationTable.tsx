import {
  Box,
  Button,
  Chip,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AdminCard from "../../ui/AdminCard";
import { AccessTime, DeleteOutline } from "@mui/icons-material";

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
    createData("Client 6", "", "Table 04", "04-25-2026", "Delete"),
  ];
  return (
    <>
      {isMobile ? (
        <Stack spacing={2}>
          {tableData.map((row) => (
            // silpon view
            <AdminCard key={row.client} sx={{ p: 2.5 }}>
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "flex-start",
                  mb: 2,
                }}
              >
                <Box>
                  <Typography sx={{ fontWeight: 700, fontSize: "1.1rem" }}>
                    {row.client}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{
                      color: "#a3a3a3",
                      textTransform: "uppercase",
                      letterSpacing: 1,
                    }}
                  >
                    {row.membershipType || "Standard"}
                  </Typography>
                </Box>
                <Chip
                  label={row.table}
                  size="small"
                  sx={{
                    borderRadius: "8px",
                    fontWeight: 600,
                    bgcolor: "#f3f3f3",
                  }}
                />
              </Box>

              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: 1,
                  mb: 3,
                  color: "#666",
                }}
              >
                <AccessTime sx={{ fontSize: "1.1rem", color: "#a3a3a3" }} />
                <Typography variant="body2" sx={{ fontWeight: 500 }}>
                  {row.schedule}
                </Typography>
              </Box>

              <Button
                fullWidth
                variant="contained"
                startIcon={<DeleteOutline />}
                sx={{
                  bgcolor: "#fff5f5", // Light red background like your reference
                  color: "#d32f2f",
                  boxShadow: "none",
                  py: 1.5,
                  borderRadius: "12px",
                  fontWeight: 700,
                  "&:hover": { bgcolor: "#ffe0e0", boxShadow: "none" },
                }}
              >
                DELETE RESERVATION
              </Button>
            </AdminCard>
          ))}
        </Stack>
      ) : (
        // Desktop view
        <AdminCard
          sx={{ p: 0, overflow: "hidden", height: "100%", width: "100%" }}
        >
          <TableContainer>
            <Table>
              <TableHead>
                <TableRow>
                  {["CLIENT", "TABLE", "SCHEDULE", "ACTION"].map((head) => (
                    <TableCell
                      key={head}
                      sx={{
                        color: "#a3a3a3",
                        fontWeight: 700,
                        fontSize: "0.75rem",
                        letterSpacing: 1,
                        borderBottom: "1px solid #f0f0f0",
                        py: 3,
                      }}
                    >
                      {head}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {tableData.map((row) => (
                  <TableRow
                    key={row.client}
                    sx={{ "&:last-child td": { border: 0 } }}
                  >
                    {/* 1. CLIENT COLUMN */}
                    <TableCell sx={{ py: 3 }}>
                      <Typography sx={{ fontWeight: 700, color: "#000" }}>
                        {row.client}
                      </Typography>
                      <Typography variant="caption" sx={{ color: "#a3a3a3" }}>
                        {row.membershipType || "Standard"}
                      </Typography>
                    </TableCell>

                    {/* 2. TABLE COLUMN */}
                    <TableCell sx={{ fontWeight: 700, color: "#474747" }}>
                      {row.table}
                    </TableCell>

                    {/* 3. SCHEDULE COLUMN */}
                    <TableCell sx={{ color: "#474747", fontWeight: 500 }}>
                      {row.schedule}
                    </TableCell>

                    {/* 4. ACTION COLUMN */}
                    <TableCell>
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
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </AdminCard>
      )}
    </>
  );
}
