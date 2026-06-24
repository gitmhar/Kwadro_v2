import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface GatewayHistoryItem {
  status: "green" | "yellow" | "red";
  active: boolean;
}

export interface GatewayStatus {
  id: string;
  name: string;
  uptime: string;
  uptimeColor: string;
  history: GatewayHistoryItem[];
}

interface GatewayHistoryCardProps {
  gateway: GatewayStatus;
}

const statusColors = {
  green: "#4ADE80",
  yellow: "#F59E0B",
  red: "#EF4444",
};

function getBarColor(status: "green" | "yellow" | "red", active: boolean) {
  const baseColor = statusColors[status];
  return active ? baseColor : `${baseColor}66`;
}

export default function GatewayHealthCard({
  gateway,
}: GatewayHistoryCardProps) {
  return (
    <Box
      sx={{
        p: "16px",
        border: "1px solid #2E2E2E",
        backgroundColor: cueColors.surfaceContainerLow,
        boxSizing: "border-box",
      }}
    >
      {/* Name + Uptime*/}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "12px",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            color: cueColors.primary,
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          {gateway.name}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            fontWeight: 700,
            color: gateway.uptimeColor,
          }}
        >
          {gateway.uptime}
        </Typography>
      </Box>

      {/* Gateway Bottom Bar History */}
      <Box sx={{ display: "flex", gap: "4px", height: "24px" }}>
        {gateway.history.map((hist, idx) => (
          <Box
            key={idx}
            sx={{
              flex: 1,
              backgroundColor: getBarColor(hist.status, hist.active),
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
