import { useState } from "react";
import { Box, Grid } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import { Sell } from "@mui/icons-material";
import AdminCard from "../../../ui/cards/AdminCard";
import PricingInput from "./PricingInput";
import ToggleSetting from "./ToggleSetting";
import SectionHeader from "../../../ui/shared/SectionHeader";

export default function GlobalPricingRules() {
  const [baseRate, setBaseRate] = useState("28.00");
  const [proPremium, setProPremium] = useState("12.00");
  const [memberDiscount, setMemberDiscount] = useState(true);
  const [autoRounding, setAutoRounding] = useState(true);

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        p: "16px",
        width: "100%",
        boxSizing: "border-box",
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      <SectionHeader
        icon={<Sell />}
        title="Global Pricing Rules"
        statusBadge="STATUS: ACTIVE"
        variant="super-admin"
      />

      {/* Grid Content */}
      <Grid
        container
        spacing={4}
        columns={12}
        sx={{ width: "100%", boxSizing: "border-box" }}
      >
        {/* Left column */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Base Hourly Rate */}
            <PricingInput
              label="Base Hourly Rate"
              description="Global default for standard tables"
              prefix="₱"
              value={baseRate}
              onChange={setBaseRate}
            />
            {/* Pro Table Premium */}
            <PricingInput
              label="Pro Table Premium"
              description="Additional hourly surcharge"
              prefix="+"
              value={proPremium}
              onChange={setProPremium}
            />
          </Box>
        </Grid>

        {/* Right column */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            width: "100%",
            boxSizing: "border-box",
            borderLeft: {
              xs: "none",
              md: `1px solid ${cueColors.outlineVariant}`,
            },
            pl: { xs: 0, md: "32px" },
            pt: { xs: "24px", md: 0 },
          }}
        >
          <Box sx={{ display: "flex", flexDirection: "column", gap: "24px" }}>
            {/* Member Discounting */}
            <ToggleSetting
              label="Member Discounting"
              checked={memberDiscount}
              onChange={setMemberDiscount}
            />

            {/* Auto-rounding */}
            <ToggleSetting
              label="Auto-rounding (0.25)"
              checked={autoRounding}
              onChange={setAutoRounding}
            />
          </Box>
        </Grid>
      </Grid>
    </AdminCard>
  );
}
