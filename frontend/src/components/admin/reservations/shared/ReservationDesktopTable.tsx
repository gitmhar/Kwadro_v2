import { Box, IconButton, Typography } from "@mui/material";
import type { ReservationRow } from "../../../../types/reservationRow";
import AdminCard from "../../../ui/cards/AdminCard";
import DataTable from "../../../ui/data-display/DataTable";
import { DeleteOutline } from "@mui/icons-material";

interface ReservationDesktopTableProps {
  reservations: ReservationRow[];
  onDelete?: (id: string) => void;
}

export default function ReservationDesktopTable({
  reservations,
  onDelete,
}: ReservationDesktopTableProps) {
  return (
    <AdminCard
      sx={{
        p: 0,
        overflow: "hidden",
        border: "1px solid #F0F0F0",
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
            render: (row: ReservationRow) => (
              <Box>
                <Typography sx={{ fontWeight: 700, color: "#000000" }}>
                  {row.client}
                </Typography>
                <Typography variant="caption" sx={{ color: "#A3A3A3" }}>
                  {row.membershipType || "Standard"}
                </Typography>
              </Box>
            ),
          },
          {
            field: "table",
            headerName: "TABLE",
            render: (row: ReservationRow) => (
              <Typography sx={{ fontWeight: 700, color: "#474747" }}>
                {row.table}
              </Typography>
            ),
          },
          {
            field: "schedule",
            headerName: "SCHEDULE",
            render: (row: ReservationRow) => (
              <Typography sx={{ color: "#474747" }}>{row.schedule}</Typography>
            ),
          },
          {
            field: undefined,
            headerName: "ACTION",
            render: (row: ReservationRow) => (
              <IconButton
                onClick={() => onDelete?.(row.id)}
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
        data={reservations}
      />
    </AdminCard>
  );
}
