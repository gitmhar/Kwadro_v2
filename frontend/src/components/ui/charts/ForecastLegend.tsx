import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

interface ForecastLegendProps {
  historicalLabel?: string;
  predictiveLabel?: string;
  historicalColor?: string;
  predictiveColor?: string;
}

export default function ForecastLegend({
  historicalLabel = "HISTORICAL",
  predictiveLabel = "PREDICTIVE",
  historicalColor = cueColors.onSurfaceVariant,
  predictiveColor = cueColors.onSurfaceVariant,
}: ForecastLegendProps) {
  return (
    <Box sx={{ display: "flex", gap: 2, alignItems: "center" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box sx={{ width: 8, height: 8, backgroundColor: cueColors.primary }} />
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: historicalColor,
          }}
        >
          {historicalLabel}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <Box
          sx={{
            width: 8,
            height: 8,
            border: "1px dashed #ffffff",
            backgroundColor: "transparent",
          }}
        />
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: predictiveColor,
          }}
        >
          {predictiveLabel}
        </Typography>
      </Box>
    </Box>
  );
}
