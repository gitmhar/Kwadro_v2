import { Box } from "@mui/material";

interface StatusDotProps {
  color: string;
  size?: number;
  animated?: boolean;
  position?: "absolute" | "static";
  top?: number;
  right?: number;
  sx?: object;
}

export default function StatusDot({
  color,
  size = 10,
  animated = false,
  position = "static",
  top,
  right,
  sx,
}: StatusDotProps) {
  return (
    <Box
      sx={{
        position,
        top,
        right,
        width: size,
        height: size,
        bgcolor: color,
        borderRadius: "50%",
        boxShadow: `0 0 10px ${color}`,
        ...(animated && { animation: "pulse 2s infinite ease-in-out" }),
        "@keyframes pulse": {
          "0%": { transform: "scale(0.95)", opacity: 0.8 },
          "50%": { transform: "scale(1)", opacity: 1 },
          "100%": { transform: "scale(0.95)", opacity: 0.8 },
        },
        ...sx,
      }}
    />
  );
}
