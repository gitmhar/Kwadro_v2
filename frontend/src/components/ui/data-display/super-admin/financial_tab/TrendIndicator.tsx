import { TrendingDown, TrendingUp } from "@mui/icons-material";
import { Box, Typography } from "@mui/material";

interface TrendIndicatorProps {
  value: string;
  direction?: "up" | "down";
  color?: string;
}

export default function TrendIndicator({
  value,
  direction = "up",
  color = direction === "up" ? "#4ADE80" : "#EF4444",
}: TrendIndicatorProps) {
  const Icon = direction === "up" ? TrendingUp : TrendingDown;

  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        color,
        gap: "4px",
      }}
    >
      <Icon sx={{ fontSize: "16px" }} />
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "11px",
          fontWeight: 500,
          letterSpacing: "0.05em",
        }}
      >
        {value}
      </Typography>
    </Box>
  );
}
