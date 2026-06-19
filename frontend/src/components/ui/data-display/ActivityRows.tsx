import { Avatar, Box, Typography } from "@mui/material";
import type { ReactNode } from "react";

interface ActivityRow {
  icon: ReactNode;
  title: string;
  description: string;
  timestamp: string;
}

export default function ActivityRow({
  icon,
  title,
  description,
  timestamp,
}: ActivityRow) {
  return (
    <Box sx={{ display: "flex", alignItems: "center", py: 2, gap: 2 }}>
      <Avatar
        sx={{
          bgcolor: "#FFFFFF",
          color: "1A1C1C",
          border: "1px solid #F0F0F0",
          width: 48,
          height: 48,
        }}
      >
        {icon}
      </Avatar>
      <Box sx={{ flex: 1 }}>
        <Typography
          sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1A1C1C" }}
        >
          {title}
        </Typography>
        <Typography
          sx={{ color: "#A3A3A3", fontSize: "0.85rem", fontWeight: 500 }}
        >
          {description}
        </Typography>
      </Box>
      <Typography
        sx={{ color: "#A3A3A3", fontSize: "0.75rem", fontWeight: 600 }}
      >
        {timestamp}
      </Typography>
    </Box>
  );
}
