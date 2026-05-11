import { Box, Typography } from "@mui/material";

export default function ScheduleBlock({
  time,
  status,
  type,
}: {
  time: string;
  status: string;
  type: "reserved" | "available" | "pending";
}) {
  const statusColors = {
    reserved: { main: "#f44336", bg: "rgba(255, 152, 0, 0.1)" },
    pending: { main: "#ff9800", bg: "rgba(244, 67, 54, 0.1)" },
    available: { main: "#4eff08", bg: "rgba(36, 204, 104, 0.1)" },
  };

  const activeColor = statusColors[type].main;
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        bgcolor: "#111315",
        borderRadius: "50px",

        // Responsive padding
        px: { xs: 2, sm: 3 },
        py: { xs: 1, sm: 1.5 },

        mb: 2,
        position: "relative",
        border: "1px solid rgba(255, 255, 255, 0.05)",

        "&::before": {
          content: '""',
          position: "absolute",
          left: { xs: "10px", sm: "16px" },
          height: { xs: "14px", sm: "20px" },
          width: "4px",
          borderRadius: "4px",
          bgcolor: activeColor,
          boxShadow: `0 0 8px ${activeColor}`,
        },
      }}
    >
      <Typography
        variant="body1"
        sx={{
          color: "white",
          fontWeight: 600,
          ml: { xs: 1.5, sm: 2 },
          letterSpacing: "0.5px",
          fontSize: { xs: "0.8rem", sm: "0.95rem", md: "1rem" },
        }}
      >
        {time}
      </Typography>

      <Typography
        variant="caption"
        sx={{
          color: activeColor,
          fontWeight: 900,
          letterSpacing: "1px",
          textTransform: "uppercase",
          bgcolor: statusColors[type].bg,
          px: { xs: 1, sm: 1.5 },
          py: { xs: 0.3, sm: 0.5 },
          borderRadius: "12px",
          fontSize: { xs: "0.6rem", sm: "0.7rem" },
        }}
      >
        {status}
      </Typography>
    </Box>
  );
}
