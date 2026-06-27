import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import VelocityBar from "../../../ui/data-display/super-admin/financial_tab/VelocityBar";

export interface SpendingTier {
  id: string;
  name: string;
  amountText: string;
  percentage: number;
  opacity?: number;
}

interface SpendingTierRowProps {
  tier: SpendingTier;
}

export default function SpendingTierRow({ tier }: SpendingTierRowProps) {
  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-end",
          mb: 1,
        }}
      >
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: "#c4c7c8",
            textTransform: "uppercase",
            letterSpacing: "0.1em",
            fontWeight: 700,
          }}
        >
          {tier.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: "#ffffff",
          }}
        >
          {tier.amountText}
        </Typography>
      </Box>

      <VelocityBar
        value={tier.percentage}
        color={cueColors.primary}
        trackColor={cueColors.surfaceVariant}
        tier={tier}
      />
    </Box>
  );
}
