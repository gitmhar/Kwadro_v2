import { useState } from "react";
import { Box } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";
import { CalendarToday } from "@mui/icons-material";
import SectionHeader from "../../ui/shared/SectionHeader";
import StepperSetting from "../../ui/shared/StepperSetting";
import AdminCard from "../../ui/cards/AdminCard";

export default function ReservationPolicies() {
  const [cancellationWindow, setCancellationWindow] = useState(12.0);
  const [gracePeriod, setGracePeriod] = useState(15.0);
  const [maxGroupSize, setMaxGroupSize] = useState(6.0);

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "16px",
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      <SectionHeader
        variant="super-admin"
        icon={<CalendarToday />}
        title="Reservation Policy"
      />

      {/* Policies List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Policy 1: Cancellation Window */}
        <StepperSetting
          label="Cancellation Window"
          description="Hours before booking start"
          value={cancellationWindow}
          onIncrement={() => setCancellationWindow((prev) => prev + 1.0)}
          onDecrement={() =>
            setCancellationWindow((prev) => Math.max(0, prev - 1.0))
          }
        />

        {/* Policy 2: Grace Period */}
        <StepperSetting
          label="Grace Period"
          description="Minutes before auto-release"
          value={gracePeriod}
          onIncrement={() => setGracePeriod((prev) => prev + 1.0)}
          onDecrement={() => setGracePeriod((prev) => Math.max(0, prev - 1.0))}
        />

        {/* Policy 3: Max Group Size */}
        <StepperSetting
          label="Max Group Size"
          description="Per standard table booking"
          value={maxGroupSize}
          onIncrement={() => setMaxGroupSize((prev) => prev + 1.0)}
          onDecrement={() => setMaxGroupSize((prev) => Math.max(0, prev - 1.0))}
        />
      </Box>
    </AdminCard>
  );
}
