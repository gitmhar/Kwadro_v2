import { Box, Typography } from "@mui/material";
import { cueColors } from "./cueColors";
import HeatmapCell from "./HeatmapCell";

// Generate mock density opacities for 7 days * 24 hours
const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const DAYS_FULL = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

// Deterministic mock opacity grid (seeded for consistency)
const heatmapData: number[][] = DAYS.map((_, dayIdx) =>
  Array.from({ length: 24 }).map((_, hourIdx) => {
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
        p: "24px",
        height: "100%",
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
          "&::-webkit-scrollbar": { height: "4px" },
          "&::-webkit-scrollbar-track": { background: cueColors.surface },
          "&::-webkit-scrollbar-thumb": { background: "#2E2E2E" },
        }}
      >
        <Box sx={{ minWidth: "700px", display: "flex", width: "100%" }}>
          {/* Left Hand: Y Axis Day Labels */}
          <Box sx={{ width: "48px", pt: "24px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              {DAYS.map((day) => (
                <Box
                  key={day}
                  sx={{
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "9px",
                    color: cueColors.onSurfaceVariant,
                  }}
                >
                  {day}
                </Box>
              ))}
            </Box>
          </Box>

          {/* Right Hand: Matrices */}
          <Box sx={{ flexGrow: 1 }}>
            {/* Top Hand: Hour Labels */}
            <Box
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(24, 1fr)",
                gap: "2px",
                mb: "8px",
              }}
            >
              {Array.from({ length: 24 }).map((_, i) => (
                <Typography
                  key={i}
                  sx={{
                    textAlign: "center",
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "9px",
                    color: cueColors.onSurfaceVariant,
                  }}
                >
                  {i}h
                </Typography>
              ))}
            </Box>

            {/* Matrix Data Grid */}
            <Box sx={{ display: "flex", flexDirection: "column", gap: "2px" }}>
              <HeatmapCell data={heatmapData} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
