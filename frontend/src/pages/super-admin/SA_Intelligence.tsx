import React, { useState } from "react";
import { Box, Grid, Alert, Snackbar } from "@mui/material";
import { KpiCard } from "../../components/super-admin/intelligence/feature/KpiCard";
import { ForecastEngineChart } from "../../components/super-admin/intelligence/feature/ForecastEngineChart";
import {
  AiRecommendations,
  type Recommendation,
} from "../../components/super-admin/intelligence/feature/AiRecommendations";
import {
  WeeklyTrafficDistribution,
  type TrafficDataPoint,
} from "../../components/super-admin/intelligence/feature/WeeklyTrafficDistribution";
import { VipSpendingVelocity } from "../../components/super-admin/intelligence/feature/VipSpendingVelocity";
import { BehavioralHeatmap } from "../../components/super-admin/intelligence/feature/BehavioralHeatmap";

export const SA_Intelligence: React.FC = () => {
  // Container State Management
  const [trafficTab, setTrafficTab] = useState<"WTD" | "MTD">("WTD");
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const [recommendations, setRecommendations] = useState<Recommendation[]>([
    {
      id: "rec-1",
      type: "revenue",
      title: "Revenue Opportunity",
      description:
        "Increase dynamic pricing for Peak Table Demand Friday 20:00 - 23:00 (+15% projected yields).",
      icon: "rocket_launch",
      hasAction: true,
      actionText: "EXECUTE ACTION",
    },
    {
      id: "rec-2",
      type: "staff",
      title: "Staff Optimization",
      description:
        "Projected spillover in Lounge Area. Reassign 2 floor staff from Central Tables at 21:00.",
      icon: "group",
      hasAction: false,
    },
    {
      id: "rec-3",
      type: "asset",
      title: "Asset & Equipment Lifecycles",
      description:
        "Table 04 has hit 120 hours of active play this month. Felt leveling and cue tip replacement recommended within 48 hours.",
      icon: "build",
      hasAction: false,
    },
  ]);

  // KPI Static Data
  const kpis = [
    {
      title: "Return Booking Velocity",
      value: "0.824",
      badgeText: "82.4%",
      badgeVariant: "filled" as const,
      trendIcon: "trending_up",
      trendText: "+2.1% PREV PERIOD",
      trendColor: "#4caf50",
    },
    {
      title: "Predicted Demand",
      value: "1,482 Hours",
      badgeText: "T+72H",
      badgeVariant: "outlined" as const,
      trendIcon: "query_stats",
      trendText: "94% CONFIDENCE INTERVAL",
      trendColor: "#c4c7c8",
    },
    {
      title: "Member Tier Migration",
      value: "12.8%",
      badgeText: "EXPANSION",
      badgeVariant: "filled" as const,
      trendIcon: "person_add",
      trendText: "+48 NEW PREMIUM ACCOUNTS",
      trendColor: "#4caf50",
    },
    {
      title: "Peak Hour Utilization",
      value: "94.2%",
      badgeText: "ACTIVE",
      badgeVariant: "outlined" as const,
      trendIcon: "verified",
      trendText: "OPTIMAL ENGINE STATE",
      trendColor: "#ffffff",
    },
  ];

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

  // Actions & Events Handlers
  const handleExecuteAction = (id: string) => {
    const executedRec = recommendations.find((r) => r.id === id);
    if (executedRec) {
      setToastMessage(
        `Action Executed: "${executedRec.title}" has been successfully deployed.`,
      );
      // Remove action button or alter state to show executed state
      setRecommendations((prev) =>
        prev.map((r) =>
          r.id === id
            ? {
                ...r,
                hasAction: false,
                description: `${r.description} (DEPLOYED)`,
              }
            : r,
        ),
      );
    }
  };

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
      <Grid container spacing={3}>
        {kpis.map((kpi, index) => (
          <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
            <KpiCard {...kpi} />
          </Grid>
        ))}
      </Grid>

      {/* Middle Row: Forecast Engine & AI Recommendations */}
      <Grid container spacing={3} columns={10}>
        {/* Forecast Chart (Col Span 7 in 10-col grid) */}
        <Grid size={{ xs: 10, lg: 7 }}>
          <ForecastEngineChart />
        </Grid>

        {/* AI Recommendations (Col Span 3 in 10-col grid) */}
        <Grid size={{ xs: 10, lg: 3 }}>
          <AiRecommendations
            recommendations={recommendations}
            onExecuteAction={handleExecuteAction}
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
