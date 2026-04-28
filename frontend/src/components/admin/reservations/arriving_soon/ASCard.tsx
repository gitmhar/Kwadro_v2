import { Avatar, Box, Button, Typography } from "@mui/material";
import AdminCard from "../../../ui/AdminCard";

export default function ASCard() {
  return (
    <AdminCard sx={{ p: { xs: 2, sm: 2 }, borderRadius: "24px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          gap: { xs: 2, sm: 0 },
          mb: 3,
        }}
      >
        {/* LEFT SIDE: Avatar and Text */}
        <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
          <Avatar
            sx={{
              bgcolor: "#f0f0f0",
              color: "#474747",
              width: { xs: 40, sm: 48 },
              height: { xs: 40, sm: 48 },
              fontWeight: 700,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            JS
          </Avatar>
          <Box>
            <Typography
              sx={{
                fontWeight: 800,
                color: "#1a1c1e",
                fontSize: { xs: "1rem", sm: "1.1rem" },
                lineHeight: 1.2,
              }}
            >
              Julian Schmidt
            </Typography>
            <Typography
              sx={{
                color: "#a3a3a3",
                fontSize: { xs: "0.75rem", sm: "0.85rem" },
                fontWeight: 600,
              }}
            >
              TABLE 14 • 4 GUESTS
            </Typography>
          </Box>
        </Box>

        {/* RIGHT SIDE: The Chip */}
        <Box
          sx={{
            bgcolor: "#f3f3f3",
            color: "#1a1c1c",
            px: { xs: 1.2, sm: 1.5 },
            py: 0.5,
            alignSelf: { xs: "flex-start", sm: "center" },
            borderRadius: "20px",
            fontSize: { xs: "0.65rem", sm: "0.75rem" },
            fontWeight: 800,
            textTransform: "uppercase",
            letterSpacing: "0.5px",
          }}
        >
          In 15 Min
        </Box>
      </Box>

      {/* BUTTONS SECTION */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          gap: 2,
        }}
      >
        <Button
          fullWidth
          variant="contained"
          sx={{
            bgcolor: "#000",
            color: "#e2e2e2",
            borderRadius: "12px",
            py: { xs: 1.2, sm: 1.5 },
            fontWeight: 700,
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            whiteSpace: "nowrap",
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
            borderRadius: "12px",
            py: { xs: 1.2, sm: 1.5 },
            fontWeight: 700,
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            whiteSpace: "nowrap",
          }}
        >
          Release Table
        </Button>
      </Box>
    </AdminCard>
  );
}
