import { Box, Button, Typography } from "@mui/material";
import AdminCard from "../../ui/cards/AdminCard";
import { getStatusConfig } from "../../../utils/constants/status.config";

interface TableMonitorCardProps {
  tableNumber: number;
  status?: string;
}

export default function TableMonitorCard({
  tableNumber,
  status = "Available",
}: TableMonitorCardProps) {
  const config = getStatusConfig(status);

  const pulseAnimation = {
    "@keyframes pulse": {
      "0%": { transform: "scale(0.95)", opacity: 0.8 },
      "50%": { transform: "scale(1)", opacity: 1 },
      "100%": { transform: "scale(0.95)", opacity: 0.8 },
    },
  };

  return (
    <AdminCard
      sx={{
        width: "100%",
        aspectRatio: "3 / 4",
        p: 2.5,
        borderRadius: 4,
        position: "relative",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxShadow: "none",
        transition: "transform 0.2s ease, box-shadow 0.2s ease",
        "&:hover": {
          transform: "translateY(-4px)",
          boxShadow: "0 6px 20px rgba(0, 0, 0, 0.04)",
        },
      }}
    >
      {/* Dot Indicator */}
      <Box
        sx={{
          position: "absolute",
          top: 20,
          right: 20,
          width: 10,
          height: 10,
          bgcolor: config.dot,
          borderRadius: "50%",
          boxShadow: `0 0 10px ${config.dot}`,
          ...pulseAnimation,
          animation:
            status === "available" ? "pulse 2s infinite ease-in-out" : "none",
        }}
      />

      <Typography
        variant="h3"
        sx={{
          fontWeight: 600,
          color: "#1a1a1a",
          fontSize: { xs: "2rem", sm: "2.5rem" },
        }}
      >
        {tableNumber < 10 ? `0${tableNumber}` : tableNumber}
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: 1.5 }}>
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
              color: config.text,
              mt: -0.5,
              fontSize: { xs: "0.9rem", sm: "1rem" },
            }}
          >
            {status}
          </Typography>
        </Box>

        <Button
          variant="contained"
          fullWidth
          sx={{
            bgcolor: "#000",
            color: "#fff",
            borderRadius: 2,
            py: 1.2,
            fontWeight: 700,
            fontSize: "0.75rem",
            "&:hover": { bgcolor: "#262626" },
          }}
        >
          ASSIGN
        </Button>
      </Box>
    </AdminCard>
  );
}
