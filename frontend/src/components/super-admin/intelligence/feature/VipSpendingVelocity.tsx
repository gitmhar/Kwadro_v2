import { Box } from "@mui/material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import { Insights } from "@mui/icons-material";
import SpendingTierRow, { type SpendingTier } from "./SpendingTierRow";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import AdminCard from "../../../ui/cards/AdminCard";

export interface VipSpendingVelocityProps {
  tiers?: SpendingTier[];
  onInsightsClick?: () => void;
}

const defaultTiers: SpendingTier[] = [
  {
    id: "platinum",
    name: "Platinum Tier",
    amountText: "$4,280 AVG / NODE",
    percentage: 85,
    opacity: 1,
  },
  {
    id: "gold",
    name: "Gold Tier",
    amountText: "$2,140 AVG / NODE",
    percentage: 55,
    opacity: 0.6,
  },
  {
    id: "silver",
    name: "Silver Tier",
    amountText: "$1,020 AVG / NODE",
    percentage: 25,
    opacity: 0.3,
  },
  {
    id: "basic",
    name: "Basic Tier",
    amountText: "$500 AVG / NODE",
    percentage: 10,
    opacity: 0.1,
  },
];

export default function VipSpendingVelocity({
  tiers = defaultTiers,
  onInsightsClick,
}: VipSpendingVelocityProps) {
  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainerLow, // surface-container-low
        border: `1px solid ${cueColors.outlineVariant}`, // outline-variant
        borderRadius: 0,
        p: 3,
        display: "flex",
        flexDirection: "column",
        boxSizing: "border-box",
        height: "100%",
      }}
    >
      <SectionHeader
        variant="super-admin"
        title="VIP Spending Velocity"
        rightElement={
          <Box
            className="material-symbols-outlined"
            onClick={onInsightsClick}
            sx={{
              fontSize: "14px",
              color: "#c4c7c8",
              cursor: "pointer",
              transition: "color 0.15s",
              "&:hover": {
                color: "#ffffff",
              },
            }}
          >
            <Insights />
          </Box>
        }
        sx={{ borderBottom: "none", mb: 1 }}
      />

      <Box sx={{ display: "flex", flexDirection: "column", gap: 3 }}>
        {tiers.map((tier) => (
          <SpendingTierRow key={tier.id} tier={tier} />
        ))}
      </Box>
    </AdminCard>
  );
}
