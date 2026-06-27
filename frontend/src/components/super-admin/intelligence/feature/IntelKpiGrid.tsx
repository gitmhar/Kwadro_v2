import { Grid } from "@mui/material";
import KpiCard, { type KpiCardProps } from "./IntelKpiCard";
import {
  PersonAdd,
  QueryStats,
  TrendingUp,
  Verified,
} from "@mui/icons-material";

// KPI Static Data
const defaultKpis: KpiCardProps[] = [
  {
    id: "kpi-1",
    title: "Return Velocity",
    value: "0.824",
    badgeText: "82.4%",
    badgeVariant: "filled" as const,
    trendIcon: <TrendingUp sx={{ fontSize: "14px"}}/>,
    trendText: "+2.1% PREV PERIOD",
    trendColor: "#4caf50",
  },
  {
    id: "kpi-2",
    title: "Forecast Demand",
    value: "1,482 Hr",
    badgeText: "T+72H",
    badgeVariant: "outlined" as const,
    trendIcon: <QueryStats sx={{ fontSize: "14px"}}/>,
    trendText: "CI ACCURACY: 94%",
    trendColor: "#c4c7c8",
  },
  {
    id: "kpi-3",
    title: "Tier  Migration",
    value: "12.8%",
    badgeText: "EXPAND",
    badgeVariant: "filled" as const,
    trendIcon: <PersonAdd sx={{ fontSize: "14px"}}/>,
    trendText: "+48 PREMIUM ACCTS",
    trendColor: "#4caf50",
  },
  {
    id: "kpi-4",
    title: "Peak Efficiency",
    value: "94.2%",
    badgeText: "ACTIVE",
    badgeVariant: "outlined" as const,
    trendIcon: <Verified sx={{ fontSize: "14px"}}/>,
    trendText: "STATUS: NOMINAL",
    trendColor: "#ffffff",
  },
];

interface IntelKpiGridProps {
  kpis?: KpiCardProps[];
}

export default function IntelKpiGrid({
  kpis = defaultKpis,
}: IntelKpiGridProps) {
  return (
    <Grid container spacing={3}>
      {kpis.map((kpi, index) => (
        <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
          <KpiCard {...kpi} />
        </Grid>
      ))}
    </Grid>
  );
}
