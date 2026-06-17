import { Box, Grid } from "@mui/material";
import {
  CachedOutlined,
  CalendarMonthOutlined,
  SensorsOutlined,
  TrendingUp,
} from "@mui/icons-material";
import AnalyticsMetricCard from "../../../ui/data-display/AnalyticsMetricCard";
import StressMetricCard from "../../../ui/data-display/StressMetricCard";

export default function AnalyticsCard() {
  return (
    <Grid container spacing={3}>
      {/* Total Bookings */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", alignItems: "stretch" }}
      >
        <AnalyticsMetricCard
          title="Total Bookings"
          value="1,234"
          icon={<CalendarMonthOutlined sx={{ fontSize: "1.6rem" }} />}
          trend={
            <>
              <TrendingUp sx={{ fontSize: "1rem", color: "#22C55E" }} />
              <Box component="span" sx={{ color: "#22C55E" }}>
                +12%
              </Box>{" "}
              from last month
            </>
          }
        />
      </Grid>
      {/* Active Sessions */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", alignItems: "stretch" }}
      >
        <AnalyticsMetricCard
          title="Active Sessions"
          value="42"
          icon={<SensorsOutlined sx={{ fontSize: "1.6rem" }} />}
          trend={
            <>
              <CachedOutlined sx={{ fontSize: "1rem" }} /> Live Updates
            </>
          }
        />
      </Grid>

      {/* Demand Pressure */}
      <Grid
        size={{ xs: 12, md: 4 }}
        sx={{ display: "flex", alignItems: "stretch" }}
      >
        <StressMetricCard
          title="Demand Pressure"
          value="+32%"
          icon={<TrendingUp sx={{ fontSize: "1.6rem" }} />}
          stressLabel="ELEVATED"
          stressLevel={62}
        />
      </Grid>
    </Grid>
  );
}
