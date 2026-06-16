import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import AlertItem, { type AlertItemProps } from "./AlertItem";
import AdminCard from "../../../ui/cards/AdminCard";
import SectionHeader from "../../../ui/shared/SectionHeader";
import ScrollableContainer from "../../../ui/shared/ScrollableContainer";

export default function HighRiskAlerts() {
  const alerts: (AlertItemProps & { id: string })[] = [
    {
      id: "1",
      type: "FAILED_PAYMENT",
      time: "14:02:11",
      message:
        "Location NYC-04: Multiple card declines detected at Table 08 (Auth Timeout).",
      buttonLabel: "INVESTIGATE",
    },
    {
      id: "2",
      type: "ABUSE_DETECTION",
      time: "13:45:00",
      message:
        "Systemic reservation cancellations from IP range: 192.168.1.XX. Bot pattern suspected.",
      buttonLabel: "BLOCK_RANGE",
    },
    {
      id: "3",
      type: "LATENCY_WARNING",
      time: "13:12:04",
      message:
        "Database Read/Write latency exceeding 400ms in Central-Europe-1 cluster.",
      buttonLabel: "VIEW_METRICS",
    },
  ];

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        p: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        width: "100%",
        overflow: "hidden",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Alert Header Banner */}
      <SectionHeader
        variant="super-admin"
        title="High-risk Alerts"
        statusBadge={`${alerts.length} ACTIVE`}
        statusBadgeSx={{
          backgroundColor: cueColors.error,
          color: cueColors.onError,
          fontSize: "10px",
          fontWeight: "bold",
        }}
        sx={{ backgroundColor: cueColors.surfaceContainerHigh, p: 2, mb: 0 }}
      />

      {/* Scrollable list */}
      <ScrollableContainer
        direction="vertical"
        maxHeight={{ xs: "350px", xl: "345px" }}
        sx={{ flexGrow: 1 }}
      >
        {alerts.map((alert) => (
          <AlertItem key={alert.id} {...alert} />
        ))}
      </ScrollableContainer>
    </AdminCard>
  );
}
