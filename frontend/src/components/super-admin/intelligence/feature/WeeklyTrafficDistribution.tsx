import { Box } from "@mui/material";
import WeeklyTrafficChart, {
  type TrafficDataPoint,
} from "./WeeklyTrafficChart";
import SectionHeader from "../../../ui/shared/SectionHeader";
import TabToggle from "../../../ui/inputs/TabToggle";
import AdminCard from "../../../ui/cards/AdminCard";
import { cueColors } from "../../../../theme/dashboard/cueColors";

export interface WeeklyTrafficDistributionProps {
  title?: string;
  data?: TrafficDataPoint[];
  activeTab?: "WTD" | "MTD";
  onTabChange?: (tab: "WTD" | "MTD") => void;
}

const defaultWeeklyData: TrafficDataPoint[] = [
  { label: "MON", value: 40, borderAlpha: 0.2 },
  { label: "TUE", value: 55, borderAlpha: 0.3 },
  { label: "WED", value: 50, borderAlpha: 0.3 },
  { label: "THU", value: 65, borderAlpha: 0.5 },
  { label: "FRI", value: 95, isHighlighted: true },
  { label: "SAT", value: 85, borderAlpha: 0.7 },
  { label: "SUN", value: 60, borderAlpha: 0.4 },
];

export default function WeeklyTrafficDistribution({
  data = defaultWeeklyData,
  activeTab = "WTD",
  onTabChange,
}: WeeklyTrafficDistributionProps) {
  const handleTabChange = (tab: string) => {
    onTabChange?.(tab as "WTD" | "MTD");
  };

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        p: 3,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      {/* Header and Toggle Filter*/}
      <SectionHeader
        variant="super-admin"
        title="Weekly Traffic Distribution"
        rightElement={
          <TabToggle
            options={["WTD", "MTD"]}
            value={activeTab}
            onChange={handleTabChange}
          />
        }
        sx={{ borderBottom: "none" }}
      />

      {/* Bar graph */}

      <WeeklyTrafficChart data={data} />
    </AdminCard>
  );
}
