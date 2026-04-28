import { Avatar, Box, Button, Typography } from "@mui/material";
import AdminCard from "../../../ui/AdminCard";

export default function ABCards() {
  return (
    <AdminCard sx={{ p: 3, borderRadius: "24px", minWidth: "350px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start", // Changed to flex-start to align with the top of the text
          mb: 3,
        }}
      >
        {/* LEFT SIDE: Table info and Name */}
        <Box>
          <Typography
            sx={{
              color: "#a3a3a3",
              fontSize: "0.85rem",
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
              fontSize: { xs: "1rem", sm: "1.5rem" }, // Larger font for the name
              lineHeight: 1,
            }}
          >
            Alexander Sterling
          </Typography>
        </Box>

        {/* RIGHT SIDE: Vertical Duration Stack */}
        <Box sx={{ textAlign: "right" }}>
          <Typography
            sx={{
              color: "#a3a3a3",
              fontSize: "0.8rem",
              fontWeight: 600,
              textTransform: "uppercase",
            }}
          >
            Duration
          </Typography>
          <Typography
            sx={{
              color: "#1a1c1c",
              fontWeight: 800,
              fontSize: { xs: "1rem", sm: "1.2rem" },
            }}
          >
            42:15
          </Typography>
        </Box>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        {/* Avatar Group Placeholder */}
        <Box sx={{ display: "flex", ml: 1 }}>
          <Avatar
            sx={{
              width: 32,
              height: 32,
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
            py: { xs: 1.2, sm: 1.5 },
            px: 4,
            fontWeight: 700,
            fontSize: { xs: "0.75rem", sm: "0.85rem" },
            whiteSpace: "nowrap",
            textTransform: "none",
            "&:hover": { bgcolor: "#333" },
          }}
        >
          End Session
        </Button>
      </Box>
    </AdminCard>
  );
}
