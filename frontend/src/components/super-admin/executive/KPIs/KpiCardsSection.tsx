import { Grid } from "@mui/material";
import KpiCard, { type KpiCardProps } from "./KpiCard";

interface KpiCardSectionProps {
  kpis?: KpiCardProps[];
}

const defaultKpis: KpiCardProps[] = [
  {
    title: "TOTAL REVENUE",
    value: "$284.5K",
    indicatorText: "+14.2%",
    percentageFilled: 75,
  },
  {
    title: "RESERVATION CONV RATE",
    value: "68.4%",
    indicatorText: "+2.1%",
    percentageFilled: 66.6,
  },
  {
    title: "SYSTEM HEALTH",
    value: "99.98",
    indicatorText: "OPTIMAL",
    percentageFilled: 100,
  },
  {
    title: "FAILED PAYMENTS",
    value: "12",
    indicatorText: "+4 CRITICAL",
    percentageFilled: 25,
    isErrorColor: true,
  },
];

export default function KpiCardsSection({
  kpis = defaultKpis,
}: KpiCardSectionProps) {
  return (
    <Grid
      container
      spacing={2}
      sx={{
        mb: "16px",
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {kpis.map((kpi, idx) => (
        <Grid
          key={idx}
          size={{ xs: 12, md: 6, lg: 3 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <KpiCard {...kpi} />
        </Grid>
      ))}
    </Grid>
  );
}
