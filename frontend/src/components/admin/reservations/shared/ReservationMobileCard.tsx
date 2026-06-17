import { Box, Button, Typography } from "@mui/material";
import type { ReservationRow } from "../../../../types/reservationRow";
import StatusChip from "../../../ui/data-display/StatusChip";
import UserIdentity from "../../../ui/data-display/UserIdentity";
import ReservationCardShell from "../../../ui/shared/ReservationCardShell";
import { AccessTime, DeleteOutline } from "@mui/icons-material";

interface ReservationMobileCardProps {
  reservation: ReservationRow;
  onDelete?: (id: string) => void;
}

export default function ReservationMobileCard({
  reservation,
  onDelete,
}: ReservationMobileCardProps) {
  return (
    <ReservationCardShell
      left={
        <UserIdentity
          name={reservation.client}
          subtitle={reservation.membershipType || "Standard"}
        />
      }
      right={
        <StatusChip
          label={reservation.table}
          bg="#F3F3F3"
          color="#1A1C1C"
          sx={{ borderRadius: "8px", px: 1, height: "24px" }}
        />
      }
      bottom={
        <>
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1.2,
              mb: 3,
              color: "#666666",
            }}
          >
            <AccessTime sx={{ fontSize: "1.1rem", color: "#A3A3A3" }} />
            <Typography
              variant="body2"
              sx={{ fontWeight: 700, color: "#474747" }}
            >
              {reservation.schedule}
            </Typography>
          </Box>
          <Button
            fullWidth
            variant="contained"
            startIcon={<DeleteOutline />}
            onClick={() => onDelete?.(reservation.id)}
            sx={{
              bgcolor: "#FFF1F1",
              color: "#E11D48",
              boxShadow: "none",
              py: 1.5,
              borderRadius: "12px",
              fontWeight: 800,
              fontSize: "0.75rem",
              "&:hover": { bgcolor: "#FFE2E2", boxShadow: "none" },
            }}
          >
            DELETE RESERVATION
          </Button>
        </>
      }
    />
  );
}
