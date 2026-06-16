import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

interface LegendItem {
  label: string;
  color: string;
  border?: string;
}

const legendItems: LegendItem[] = [
  {
    label: "AVAILABLE",
    color: cueColors.primary,
  },
  {
    label: "OFFLINE",
    color: cueColors.surfaceBright,
    border: `1px solid ${cueColors.outlineVariant}`,
  },
  {
    label: "MAINTENANCE",
    color: cueColors.error,
  },
];

export default function StatusLegend() {
  return (
    <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
      {legendItems.map((item) => (
        <Box
          key={item.label}
          sx={{ display: "flex", alignItems: "center", gap: "8px" }}
        >
          <Box
            sx={{
              width: "12px",
              height: "12px",
              backgroundColor: item.color,
              border: item.border || "none",
            }}
          />
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              lineHeight: 1.2,
              color: cueColors.primary,
            }}
          >
            {item.label}
          </Typography>
        </Box>
      ))}
    </Box>
  );
}
