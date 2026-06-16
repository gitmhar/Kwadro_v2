import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import HeatmapCell from "./HeatmapCell";
import HeatmapLegend from "./HeatmapLegend";
import ScrollableContainer from "../../../ui/shared/ScrollableContainer";
import SectionHeader from "../../../ui/shared/SectionHeader";
import AdminCard from "../../../ui/cards/AdminCard";

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
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        p: { xs: "16px", sm: "24px" },
        height: "100%",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Heatmap Title & Legend Bar */}
      <SectionHeader
        variant="super-admin"
        title="Peak Occupancy Heatmap"
        subtitle="Temporal utilization density per hour/day"
        titleFirst
        rightElement={<HeatmapLegend />}
        sx={{ borderBottom: "none" }}
      />

      {/* Heatmap Cells */}
      <ScrollableContainer
        direction="horizontal"
        minWidth={{ xs: "100%", md: "700px" }}
      >
        {/* Main Matrix Container - Full Width */}
        <Box sx={{ flexGrow: 1, minWidth: 0, width: "100%" }}>
          <HeatmapCell data={heatmapData} />
        </Box>
      </ScrollableContainer>
    </AdminCard>
  );
}
