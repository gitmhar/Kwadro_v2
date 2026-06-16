import React from "react";
import { Box, Typography, Button, Grid } from "@mui/material";
import { cueColors } from "../../theme/dashboard/cueColors";
import GlobalPricingRules from "../../components/super-admin/operations/GlobalPricingRules/GlobalPricingRules";
import TableAvailabilityOverrides from "../../components/super-admin/operations/TableAvailability/TableAvailabilityOverrides";
import ReservationPolicies from "../../components/super-admin/operations/ReservationPolicies";
import HolidayBlackoutScheduling from "../../components/super-admin/operations/HolidayBlackout/HolidayBlackoutScheduling";
import BookingAutomationRules from "../../components/super-admin/operations/BookingAutomationRules";

export default function Operations() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "24px",
        pb: "40px",
        overflowX: "hidden",
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", md: "flex-end" },
          gap: "16px",
          mb: "8px",
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              fontWeight: 500,
              letterSpacing: "0.05em",
              color: cueColors.primary,
              opacity: 0.6,
              textTransform: "uppercase",
              mb: "4px",
            }}
          >
            Operational Logic Layer
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "2rem",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              textTransform: "uppercase",
              color: cueColors.primary,
            }}
          >
            Operations Control
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "12px",
            width: { xs: "100%", sm: "auto" },
          }}
        >
          <Button
            variant="outlined"
            sx={{
              flex: { xs: 1, sm: "none" },
              borderColor: cueColors.outlineVariant,
              color: cueColors.primary,
              borderRadius: 0,
              px: "24px",
              py: "8px",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              fontWeight: 500,
              textTransform: "uppercase",
              "&:hover": {
                borderColor: cueColors.primary,
                backgroundColor: cueColors.surfaceBright,
              },
            }}
          >
            REVERT LOGS
          </Button>
          <Button
            variant="contained"
            sx={{
              flex: { xs: 1, sm: "none" },
              backgroundColor: cueColors.primary,
              color: cueColors.background,
              borderRadius: 0,
              px: "24px",
              py: "8px",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: cueColors.primary,
                opacity: 0.9,
                boxShadow: "none",
              },
            }}
          >
            DEPLOY CHANGES
          </Button>
        </Box>
      </Box>

      {/* Main Grid Layout */}
      <Grid
        container
        spacing={3}
        columns={12}
        sx={{
          maxWidth: "1600px",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        {/* 1. Global Pricing Rules */}
        <Grid size={{ xs: 12 }} sx={{ width: "100%", boxSizing: "border-box" }}>
          <GlobalPricingRules />
        </Grid>

        {/* 2. Table Availability Overrides */}
        <Grid size={{ xs: 12 }} sx={{ width: "100%", boxSizing: "border-box" }}>
          <TableAvailabilityOverrides />
        </Grid>

        {/* 3. Reservation Policies */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <ReservationPolicies />
        </Grid>

        {/* 4 & 5. Holiday & Blackout Scheduling */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
          <HolidayBlackoutScheduling />
        </Grid>

        {/* 6. Booking Automation Rules */}
        <Grid size={{ xs: 12 }} sx={{ width: "100%", boxSizing: "border-box" }}>
          <BookingAutomationRules />
        </Grid>
      </Grid>
    </Box>
  );
}
