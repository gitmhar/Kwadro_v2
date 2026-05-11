import { Box, Button } from "@mui/material";
import ReservationCardShell from "../../../ui/shared/ReservationCardShell";
import UserIdentity from "../../../ui/data-display/UserIdentity";

export default function ASCard() {
  return (
    <ReservationCardShell
      left={
        <UserIdentity name="Julian Schmidt" subtitle="TABLE 14 • 4 GUESTS" />
      }
      right={
        <Box
          sx={{
            bgcolor: "#f3f3f3",
            color: "#1a1c1c",
            px: 1.2,
            py: 0.6,
            borderRadius: "20px",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
            textAlign: "center",
          }}
        >
          In 15 Min
        </Box>
      }
      bottom={
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            gap: 1.5,
          }}
        >
          <Button
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#000",
              color: "#e2e2e2",
              borderRadius: "12px",
              py: { xs: 1.2, sm: 1.4 },
              fontWeight: 700,
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { bgcolor: "#262626", boxShadow: "none" },
            }}
          >
            Confirm Arrival
          </Button>
          <Button
            fullWidth
            variant="text"
            sx={{
              bgcolor: "#f3f3f3",
              color: "#474747",
              borderColor: "#e0e0e0",
              borderRadius: "12px",
              py: { xs: 1.2, sm: 1.4 },
              fontWeight: 700,
              fontSize: { xs: "0.75rem", sm: "0.8rem" },
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { bgcolor: "#f0f0f0", borderColor: "#ccc" },
            }}
          >
            Release Table
          </Button>
        </Box>
      }
    />
  );
}
