import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";

const gradientSteps = [
  cueColors.surfaceDim,
  "rgba(255, 255, 255, 0.2)",
  "rgba(255, 255, 255, 0.4)",
  "rgba(255, 255, 255, 0.6)",
  "rgba(255, 255, 255, 0.8)",
  "#ffffff",
];

export default function HeatmapLegend() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        gap: "4px",
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: "9px",
        color: cueColors.onSurfaceVariant,
      }}
    >
      <Typography
        sx={{ fontSize: "9px", fontFamily: '"JetBrains Mono", monospace' }}
      >
        0%
      </Typography>
      <Box sx={{ display: "flex", gap: "2px" }}>
        {gradientSteps.map((color, i) => (
          <Box
            key={i}
            sx={{
              width: "12px",
              height: "12px",
              backgroundColor: color,
            }}
          />
        ))}
      </Box>
      <Typography
        sx={{ fontSize: "9px", fontFamily: '"JetBrains Mono", monospace' }}
      >
        100%
      </Typography>
    </Box>
  );
}
