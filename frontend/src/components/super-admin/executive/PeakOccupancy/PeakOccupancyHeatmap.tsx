import { Box } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import HeatmapLegend from "./HeatmapLegend";
import ScrollableContainer from "../../../ui/shared/ScrollableContainer";
import SectionHeader from "../../../ui/shared/SectionHeader";
import AdminCard from "../../../ui/cards/AdminCard";
import HeatmapChart from "../../../ui/charts/HeatmapCell";

// Generate mock density opacities for 7 days * 24 hours
const DAYS = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"];
const TOTAL_OPERATING_HOURS = 15;
const START_HOUR = 9;

// Deterministic mock opacity grid (seeded for consistency)
const operatingHoursLabels = Array.from(
  { length: TOTAL_OPERATING_HOURS },
  (_, i) => {
    const currentHour = START_HOUR + i;
    return `${currentHour.toString().padStart(2, "0")}:00`;
  },
);

const heatmapData: number[][] = DAYS.map((_, dayIdx) =>
  Array.from({ length: TOTAL_OPERATING_HOURS }).map((_, hourIdx) => {
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
          <HeatmapChart
            data={heatmapData}
            xAxisLabels={operatingHoursLabels}
            yAxisLabels={DAYS}
            // Optional: Render every second label index to keep horizontal presentation clean
            xAxisTickInterval={(idx) => idx % 2 === 0}
            tooltipFormatter={(params: any) => {
              const dayStr = DAYS[6 - params.value[1]]; // Correctly matches top-down mapping
              const hourStr = operatingHoursLabels[params.value[0]];
              const occupancyVal = (params.value[2] * 100).toFixed(0);
              return `DAY: ${dayStr}<br/>TIME WINDOW: ${hourStr}<br/>OCCUPANCY: ${occupancyVal}%`;
            }}
          />
        </Box>
      </ScrollableContainer>
    </AdminCard>
  );
}
