import React from "react";
import { Box, Typography } from "@mui/material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import HeatmapChart from "../../../ui/charts/HeatmapCell";

export interface BehavioralHeatmapProps {
  title?: string;
  subtitle?: string;
  onCellClick?: (row: number, col: number, intensity: string) => void;
}

const tables = [
  "T-12",
  "T-11",
  "T-10",
  "T-09",
  "T-08",
  "T-07",
  "T-06",
  "T-05",
  "T-04",
  "T-03",
  "T-02",
  "T-01",
];
const hours24 = Array.from(
  { length: 24 },
  (_, i) => i.toString().padStart(2, "0") + ":00",
);

export default function BehavioralHeatmap({
  title = "Behavioral Reservation Heatmap",
  subtitle = "Density distribution by table / Peak activity clustering",
}: BehavioralHeatmapProps) {
  // 💡 Generate a valid 2D matrix (12 rows, each containing 24 values)
  const heatmapMatrixData = React.useMemo(() => {
    const matrix: number[][] = [];

    for (let r = 0; r < 12; r++) {
      const rowArr: number[] = [];
      for (let c = 0; c < 24; c++) {
        let intensity = Math.random() * 0.2; // Default low
        if (c > 18) {
          intensity = 0.6 + Math.random() * 0.4; // High peak
        } else if (c > 10 && c < 14) {
          intensity = 0.3 + Math.random() * 0.4; // Lunch rush
        }
        rowArr.push(Math.min(1.0, intensity));
      }
      matrix.push(rowArr);
    }
    return matrix;
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: "#1b1c1c",
        border: "1px solid #444748",
        p: 3,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      <SectionHeader
        variant="super-admin"
        titleFirst
        title={title}
        subtitle={subtitle}
        subtitleSx={{
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          fontWeight: 500,
          color: "#c4c7c8",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          mt: 0.5,
        }}
        rightElement={
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              border: "1px solid #444748",
              p: 1,
              backgroundColor: "#0d0e0f",
            }}
          >
            <Typography
              sx={{
                fontFamily: "JetBrains Mono, monospace",
                fontSize: "9px",
                color: "#c4c7c8",
              }}
            >
              WEAR/USAGE:
            </Typography>
            <Box sx={{ display: "flex", gap: 0.5 }}>
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.05)",
                }}
                title="Low"
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.2)",
                }}
                title="Moderate"
              />
              <Box
                sx={{
                  width: 12,
                  height: 12,
                  backgroundColor: "rgba(255, 255, 255, 0.5)",
                }}
                title="High"
              />
              <Box
                sx={{ width: 12, height: 12, backgroundColor: "#ffffff" }}
                title="Critical"
              />
            </Box>
          </Box>
        }
        sx={{ borderBottom: "none", mb: 0 }}
      />

      {/* 💡 Replaced old nested CSS grids with the dynamic chart */}
      <Box sx={{ mt: 2, width: "100%" }}>
        <HeatmapChart
          data={heatmapMatrixData}
          xAxisLabels={hours24}
          yAxisLabels={tables}
          // Only show key time labels to prevent overlapping text on small viewports
          xAxisTickInterval={(idx: number) =>
            [0, 4, 8, 12, 16, 20, 23].includes(idx)
          }
          tooltipFormatter={(params: any) => {
            const hourStr = hours24[params.value[0]];
            const tableStr = tables[11 - params.value[1]]; // Match original top-down sorting layout
            const densityVal = (params.value[2] * 100).toFixed(0);
            return `TABLE: ${tableStr}<br/>TIME SLOT: ${hourStr}<br/>DENSITY: ${densityVal}%`;
          }}
        />
      </Box>
    </Box>
  );
}
