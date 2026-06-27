import { Box, Grid } from "@mui/material";
import FinancialMetricCard from "./FinancialMetricCard";
import { cueColors } from "../../../theme/dashboard/cueColors";
import TrendIndicator from "../../ui/data-display/super-admin/financial_tab/TrendIndicator";
import MiniBarChart from "../../ui/charts/MiniBarChart";
import VelocityBar from "../../ui/data-display/super-admin/financial_tab/VelocityBar";

const history = [25, 50, 37.5, 75, 100, 62.5];
const trend = [
  { heightPercent: 40, isHighlight: false },
  { heightPercent: 60, isHighlight: false },
  { heightPercent: 85, isHighlight: true },
  { heightPercent: 55, isHighlight: false },
  { heightPercent: 70, isHighlight: false },
  { heightPercent: 95, isHighlight: true },
  { heightPercent: 50, isHighlight: false },
];

export default function FinancialKpiGrid() {
  return (
    <Grid container spacing={3}>
      {/* Gross Revenue */}
      <Grid size={{ xs: 12, md: 4 }}>
        <FinancialMetricCard
          label="Gross Revenue (24H)"
          value="$142,890.42"
          renderFooter={
            <Box
              sx={{
                display: "flex",
                alignItems: "flex-end",
                justifyContent: "space-between",
                mt: "24px",
              }}
            >
              <TrendIndicator value="+12.4%" />
              <MiniBarChart
                data={history}
                color={cueColors.primary}
                maxValue={100}
              />
            </Box>
          }
        />
      </Grid>

      {/* Net Cashflow Velocity */}
      <Grid size={{ xs: 12, md: 4 }}>
        <FinancialMetricCard
          label="Net Cashflow Velocity"
          value="$4.2k/hr"
          renderFooter={
            <VelocityBar
              value={75}
              minLabel="MIN FLOW"
              maxLabel="PEAK CAPACITY"
            />
          }
        />
      </Grid>

      {/* PROFITABILITY TREND */}
      <Grid size={{ xs: 12, md: 4 }}>
        <FinancialMetricCard
          label="PROFITABILITY TREND"
          value="88.4%"
          badge={
            <Box
              sx={{
                px: "8px",
                py: "4px",
                backgroundColor: "rgba(255, 255, 255, 0.1)",
                border: "1px solid rgba(255, 255, 255, 0.2)",
                fontSize: "10px",
                fontFamily: '"JetBrains Mono", monospace',
                color: cueColors.primary,
                letterSpacing: "0.05em",
              }}
            >
              TARGET REACHED
            </Box>
          }
          renderFooter={
            <Box sx={{ mt: "24px" }}>
              <MiniBarChart
                data={trend.map((t) => t.heightPercent)}
                height={40}
                barWidth={undefined}
                gap={8}
                color={cueColors.surfaceVariant}
                highlightColor={cueColors.primary}
                highlightIndices={trend
                  .map((t, i) => (t.isHighlight ? i : 1))
                  .filter((i) => i >= 0)}
                maxValue={100}
                flexBars
              />
            </Box>
          }
        />
      </Grid>
    </Grid>
  );
}
