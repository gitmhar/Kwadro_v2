import { Avatar, Box, Button, Typography } from "@mui/material";
import ReservationCardShell from "../../../ui/shared/ReservationCardShell";

export default function ABCard() {
  return (
    <ReservationCardShell
      left={
        <Box>
          <Typography
            sx={{
              color: "#a3a3a3",
              fontSize: "0.75rem",
              letterSpacing: 1,
              textTransform: "uppercase",
              fontWeight: 600,
              mb: 0.5,
            }}
          >
            Table 08
          </Typography>
          <Typography
            sx={{
              fontWeight: 800,
              color: "#1a1c1e",
              fontSize: { xs: "1rem", sm: "1.4rem" },
              lineHeight: 1,
            }}
          >
            Alexander Sterling
          </Typography>
        </Box>
      }
      right={
        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: "#a3a3a3",
              fontSize: "0.7rem",
              fontWeight: 600,
              textTransform: "uppercase",
              letterSpacing: 1,
            }}
          >
            Duration
          </Typography>
          <Typography
            sx={{
              color: "#1a1c1c",
              fontWeight: 800,
              fontSize: { xs: "1rem", sm: "1.1rem" },
            }}
          >
            42:15
          </Typography>
        </Box>
      }
      bottom={
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          {/* Avatar Group Placeholder */}
          <Box sx={{ display: "flex", ml: 0.5 }}>
            <Avatar
              sx={{
                width: 34,
                height: 34,
                bgcolor: "#f0f0f0",
                border: "2px solid #fff",
              }}
            />
            <Avatar
              sx={{
                width: 32,
                height: 32,
                bgcolor: "#e0e0e0",
                border: "2px solid #fff",
                ml: -1,
              }}
            />
          </Box>

          <Button
            variant="contained"
            sx={{
              bgcolor: "#000",
              color: "#e2e2e2",
              borderRadius: "12px",
              py: 1.2,
              px: 2.5,
              fontWeight: 700,
              fontSize: { xs: "0.75rem", sm: "0.85rem" },
              whiteSpace: "nowrap",
              textTransform: "none",
              boxShadow: "none",
              "&:hover": { bgcolor: "#262626", boxShadow: "none" },
            }}
          >
            End Session
          </Button>
        </Box>
      }
    />
  );
}
