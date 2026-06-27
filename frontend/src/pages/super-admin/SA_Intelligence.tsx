import React, { useState } from "react";
import { Box, Grid, Alert, Snackbar } from "@mui/material";

import WeeklyTrafficDistribution from "../../components/super-admin/intelligence/feature/WeeklyTrafficDistribution";
import AiRecommendations from "../../components/super-admin/intelligence/feature/AiRecommendations";
import BehavioralHeatmap from "../../components/super-admin/intelligence/feature/BehavioralHeatmap";
import ForecastEngine from "../../components/super-admin/intelligence/feature/ForecastEngine";
import VipSpendingVelocity from "../../components/super-admin/intelligence/feature/VipSpendingVelocity";
import IntelKpiGrid from "../../components/super-admin/intelligence/feature/IntelKpiGrid";
import type { TrafficDataPoint } from "../../components/super-admin/intelligence/feature/WeeklyTrafficChart";

export const SA_Intelligence: React.FC = () => {
  // Container State Management
  const [trafficTab, setTrafficTab] = useState<"WTD" | "MTD">("WTD");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // WTD vs MTD data configurations
  const wtdData: TrafficDataPoint[] = [
    { label: "MON", value: 40, borderAlpha: 0.2 },
    { label: "TUE", value: 55, borderAlpha: 0.3 },
    { label: "WED", value: 50, borderAlpha: 0.3 },
    { label: "THU", value: 65, borderAlpha: 0.5 },
    { label: "FRI", value: 95, isHighlighted: true },
    { label: "SAT", value: 85, borderAlpha: 0.7 },
    { label: "SUN", value: 60, borderAlpha: 0.4 },
  ];

  const mtdData: TrafficDataPoint[] = [
    { label: "WEEK 1", value: 70, borderAlpha: 0.4 },
    { label: "WEEK 2", value: 80, borderAlpha: 0.6 },
    { label: "WEEK 3", value: 95, isHighlighted: true },
    { label: "WEEK 4", value: 60, borderAlpha: 0.4 },
  ];

  const handleHeatmapCellClick = (
    row: number,
    col: number,
    intensity: string,
  ) => {
    const tableNum = 12 - row;
    const hour = col.toString().padStart(2, "0");
    setToastMessage(
      `Selected Node Status - Table T-${tableNum.toString().padStart(2, "0")} at ${hour}:00 (Intensity: ${intensity})`,
    );
  };

  return (
    <Box
      component="main"
      sx={{
        p: 4,
        width: "100%",
        maxWidth: "1600px",
        mx: "auto",
        boxSizing: "border-box",
        backgroundColor: "#121414", // bg-background
        color: "#e3e2e2", // text-on-background
        minHeight: "calc(100vh - 64px)",
        overflowY: "auto",
        display: "flex",
        flexDirection: "column",
        gap: 3,
      }}
    >
      {/* Top Row: KPI Cards */}
      <IntelKpiGrid />

      {/* Middle Row: Forecast Engine & AI Recommendations */}
      <Grid container spacing={3} columns={10}>
        {/* Forecast Chart (Col Span 7 in 10-col grid) */}
        <Grid size={{ xs: 10, lg: 7 }}>
          <ForecastEngine />
        </Grid>

        {/* AI Recommendations (Col Span 3 in 10-col grid) */}
        <Grid size={{ xs: 10, lg: 3 }}>
          <AiRecommendations
            onExecuteAction={(title) =>
              setToastMessage(
                `Action Executed: "${title}" has been successfully deployed.`,
              )
            }
          />
        </Grid>
      </Grid>

      {/* Bottom Row: Traffic Distribution & VIP Spending */}
      <Grid container spacing={3}>
        <Grid size={{ xs: 12, md: 6 }}>
          <WeeklyTrafficDistribution
            data={trafficTab === "WTD" ? wtdData : mtdData}
            activeTab={trafficTab}
            onTabChange={setTrafficTab}
          />
        </Grid>
        <Grid size={{ xs: 12, md: 6 }}>
          <VipSpendingVelocity
            onInsightsClick={() =>
              setToastMessage("Navigating to Detailed VIP Segment Insights...")
            }
          />
        </Grid>
      </Grid>

      {/* Bottom Span: Behavioral Heatmap */}
      <Box>
        <BehavioralHeatmap onCellClick={handleHeatmapCellClick} />
      </Box>

      {/* Action Confirmation Toast */}
      <Snackbar
        open={toastMessage !== null}
        autoHideDuration={4000}
        onClose={() => setToastMessage(null)}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
      >
        <Alert
          onClose={() => setToastMessage(null)}
          severity="success"
          variant="filled"
          sx={{
            backgroundColor: "#ffffff",
            color: "#121414",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            borderRadius: 0,
            "& .MuiAlert-icon": {
              color: "#121414",
            },
          }}
        >
          {toastMessage}
        </Alert>
      </Snackbar>
    </Box>
  );
};
export default SA_Intelligence;
