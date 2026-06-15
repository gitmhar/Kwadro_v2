import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";
import AlertItem, { type AlertItemProps } from "./AlertItem";

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
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
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
      <Box
        sx={{
          p: "16px",
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          backgroundColor: cueColors.surfaceContainerHigh,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
            fontWeight: "bold",
            color: cueColors.onSurface,
          }}
        >
          HIGH-RISK ALERTS
        </Typography>
        <Box
          sx={{
            backgroundColor: cueColors.error,
            color: cueColors.onError,
            fontSize: "10px",
            fontWeight: "bold",
            px: "8px",
            py: "2px",
          }}
        >
          {alerts.length} ACTIVE
        </Box>
      </Box>

      {/* Scrollable list */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          maxHeight: { xs: "350px", xl: "344px" },
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-track": { background: cueColors.surface },
          "&::-webkit-scrollbar-thumb": { background: "#2E2E2E" },
        }}
      >
        {alerts.map((alert) => (
          <AlertItem key={alert.id} {...alert} />
        ))}
      </Box>
    </Box>
  );
}
