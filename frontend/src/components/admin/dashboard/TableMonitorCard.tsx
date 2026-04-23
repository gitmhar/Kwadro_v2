import { Box, Button, Typography } from "@mui/material";
import AdminCard from "../../ui/AdminCard";

interface TableMonitorCardProps {
  tableNumber: number;
}

export default function TableMonitorCard({
  tableNumber,
}: TableMonitorCardProps) {
  return (
    <AdminCard
      sx={{
        width: "100%",
        maxWidth: { xs: "100%", sm: 200, md: 220 },
        aspectRatio: "3 / 4",
        p: { xs: 2, sm: 3 },
        borderRadius: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: 1.5, sm: 2 },
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: { xs: 12, sm: 20 },
          right: { xs: 12, sm: 20 },
          width: { xs: 10, sm: 12 },
          height: { xs: 10, sm: 12 },
          bgcolor: "text.primary",
          borderRadius: "50%",
          boxShadow: "0 0 10px rgba(46, 204, 113, 0.4)",
          animation: "pulse 2s infinite ease-in-out",
          "@keyframes pulse": {
            "0%": { transform: "scale(0.95)", opacity: 0.8 },
            "50%": { transform: "scale(1)", opacity: 1 },
            "100%": { transform: "scale(0.95)", opacity: 0.8 },
          },
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          color: "#1a1a1a",
          fontSize: { xs: "2rem", sm: "2.8rem", md: "2.8rem" },
        }}
      >
        {tableNumber < 10 ? `0${tableNumber}` : tableNumber}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Box>
          <Typography
            variant="caption"
            sx={{ fontWeight: 700, color: "#a3a3a3", letterSpacing: 1 }}
          >
            STATUS
          </Typography>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              color: "text.primary",
              mt: -0.5,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            Available
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: 2,
            py: { xs: 1, sm: 1.5 },
            fontWeight: 800,
            fontSize: { xs: "0.7rem", sm: "0.75rem" },
            "&:hover": { bgcolor: "#333" },
          }}
        >
          ASSIGN
        </Button>
      </Box>
    </AdminCard>
  );
}
