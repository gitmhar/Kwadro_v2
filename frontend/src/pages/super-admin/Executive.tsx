import { Box, Grid } from "@mui/material";
import KpiCardsSection from "../../components/super-admin/executive/KPIs/KpiCardsSection";
import PeakOccupancyHeatmap from "../../components/super-admin/executive/PeakOccupancy/PeakOccupancyHeatmap";
import HighRiskAlerts from "../../components/super-admin/executive/HighRiskAlert/HighRiskAlerts";
import StaffActivitySnapshot from "../../components/super-admin/executive/StaffActivitySnapshot";

export default function Executive() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        pb: "40px",
        overflowX: "hidden",
      }}
    >
      {/* SECTION 1: KPI Summary cards */}
      <KpiCardsSection />

      {/* SECTION 2: Heatmap & Alerts 70/30 layout */}
      <Grid
        container
        spacing={2}
        columns={10}
        sx={{
          mb: "16px",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid
          size={{ xs: 10, xl: 7 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <PeakOccupancyHeatmap />
        </Grid>
        <Grid
          size={{ xs: 10, xl: 3 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <HighRiskAlerts />
        </Grid>
      </Grid>

      {/* SECTION 3: Timeline Snapshot */}
      <StaffActivitySnapshot />
    </Box>
  );
}
