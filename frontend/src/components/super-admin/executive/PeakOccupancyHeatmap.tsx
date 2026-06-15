import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";
import HeatmapCell from "./HeatmapCell";

// Generate mock density opacities for 7 days * 24 hours
const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const TOTAL_OPERATING_HOURS = 15;

// Deterministic mock opacity grid (seeded for consistency)
const heatmapData: number[][] = DAYS.map((_, dayIdx) =>
  Array.from({ length: TOTAL_OPERATING_HOURS }).map((_, hourIdx) => {
    // Generate a pseudo-random value between 0.1 and 1.0 based on day and hour indexes
    const factor = Math.sin(dayIdx + hourIdx * 0.5) * 0.45 + 0.55;
    return Math.max(0.05, Math.min(1.0, parseFloat(factor.toFixed(2))));
  }),
);

export default function PeakOccupancyHeatmap() {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: { xs: "16px", sm: "24px" },
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Heatmap Title & Legend Bar */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "flex-end" },
          gap: 2,
          mb: "24px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "11px",
              letterSpacing: "0.05em",
              fontWeight: "bold",
              color: cueColors.onSurface,
              textTransform: "uppercase",
            }}
          >
            Peak Occupancy Heatmap
          </Typography>
          <Typography
            sx={{
              fontSize: "10px",
              fontFamily: '"JetBrains Mono", monospace',
              color: cueColors.onSurfaceVariant,
              textTransform: "uppercase",
            }}
          >
            Temporal utilization density per hour/day
          </Typography>
        </Box>

        {/* Custom cyberpunk Legend block */}
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
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: cueColors.surfaceDim,
              }}
            />
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.2)",
              }}
            />
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.4)",
              }}
            />
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.6)",
              }}
            />
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: "rgba(255, 255, 255, 0.8)",
              }}
            />
            <Box
              sx={{ width: "12px", height: "12px", backgroundColor: "#ffffff" }}
            />
          </Box>
          <Typography
            sx={{ fontSize: "9px", fontFamily: '"JetBrains Mono", monospace' }}
          >
            100%
          </Typography>
        </Box>
      </Box>

      {/* Grid Canvas Wrapper with Overflow handle */}
      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          pb: "8px",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
          "&::-webkit-scrollbar": { height: "4px" },
          "&::-webkit-scrollbar-track": { background: cueColors.surface },
          "&::-webkit-scrollbar-thumb": { background: "#2E2E2E" },
        }}
      >
        <Box
          sx={{
            minWidth: { xs: "100%", md: "700px" },
            display: "flex",
            width: "100%",
            boxSizing: "border-box",
          }}
        >
          {/* Main Matrix Container - Full Width */}
          <Box sx={{ flexGrow: 1, minWidth: 0, width: "100%" }}>
            <HeatmapCell data={heatmapData} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
