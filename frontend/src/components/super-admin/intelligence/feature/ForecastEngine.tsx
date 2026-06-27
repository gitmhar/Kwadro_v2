import { Box} from "@mui/material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import ForecastLegend from "../../../ui/charts/ForecastLegend";
import type { ForecastDataPoint } from "../../../ui/charts/ForecastChart";
import ForecastEngineChart from "../../../ui/charts/ForecastChart";

// Mock Dataset
const defaultForecastData: ForecastDataPoint[] = [
  { time: "08:00", historical: 120 },
  { time: "10:00", historical: 150 },
  { time: "12:00", historical: 130 },
  { time: "16:00", historical: 180 },
  { time: "20:00", historical: 160 },
  {
    time: "22:00",
    historical: 200,
    predictive: 200,
    confidenceLower: 240,
    confidenceUpper: 240,
  },
  {
    time: "00:00",
    predictive: 210,
    confidenceLower: 170,
    confidenceUpper: 250,
  },
  {
    time: "04:00",
    predictive: 260,
    confidenceLower: 210,
    confidenceUpper: 310,
  },
  {
    time: "08:00 (T+24)",
    predictive: 290,
    confidenceLower: 230,
    confidenceUpper: 350,
  },
];

interface ForecastEngineProps {
  data: ForecastDataPoint[];
}

export default function ForecastEngine({
  data = defaultForecastData,
}: ForecastEngineProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#1b1c1c",
        border: "1px solid #444748",
        p: 3,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <SectionHeader
        variant="super-admin"
        titleFirst
        title="Forecast Engine: Demand Projection"
        subtitle="Multi-nodal analysis / Hourly granularity"
        subtitleSx={{
          fontFamily: "Inter, sans-serif",
          fontSize: "11px",
          color: "#c4c7c8",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          mt: 0.5,
        }}
        rightElement={<ForecastLegend />}
        sx={{ borderBottom: "none", mb: 1 }}
      />

      <Box
        sx={{
          flex: 1,
          width: "100%",
          minHeight: "220px",
          position: "relative",
        }}
      >
        <ForecastEngineChart data={data} />
      </Box>
    </Box>
  );
}
