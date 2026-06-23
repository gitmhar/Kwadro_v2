import { Box, Typography, Button } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { keyframes } from "@mui/system";
import { cueColors } from "../../../theme/dashboard/cueColors";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export interface ActivityItem {
  id: string;
  type: string;
  node: string;
  description: string;
  riskScore: number;
  isCritical: boolean;
  actionText: string;
  opacity?: number;
}

export interface SuspiciousActivityFeedProps {
  activities: ActivityItem[];
  onAction: (id: string, actionType: string) => void;
}

export default function SuspiciousActivityFeed({
  activities = [
    {
      id: "1",
      type: "UNUSUAL CUSTOMER ACTIVITY",
      node: "0x8F4A...B2C",
      description: "High-velocity micro-transactions from singular IP in Chicago. Pattern suggests node spoofing.",
      riskScore: 0.89,
      isCritical: true,
      actionText: "VIEW MAP",
    },
    {
      id: "2",
      type: "TERMINAL MISMATCH",
      node: "0x2D1F...E3D",
      description: "Physical location sensor discrepancy on Node-92. Audit recommended.",
      riskScore: 0.64,
      isCritical: false,
      actionText: "DISMISS",
      opacity: 0.6,
    },
  ],
  onAction,
}: SuspiciousActivityFeedProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        padding: "24px",
        height: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "24px",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "18px",
            fontWeight: 600,
            textTransform: "uppercase",
            color: cueColors.primary,
          }}
        >
          Suspicious Activity
        </Typography>
        <CrisisAlertIcon
          sx={{
            color: "#ef4444",
            fontSize: "20px",
            animation: `${pulse} 2s infinite ease-in-out`,
          }}
        />
      </Box>

      {/* Activities List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {activities.map((item) => (
          <Box
            key={item.id}
            sx={{
              p: "12px",
              backgroundColor: cueColors.surfaceContainerLow,
              border: "1px solid #2E2E2E",
              opacity: item.opacity ?? 1,
              boxSizing: "border-box",
            }}
          >
            {/* Item Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: "8px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                  fontWeight: 700,
                  color: item.isCritical ? "#ef4444" : "#f59e0b", // red-500 or yellow-500
                }}
              >
                {item.type}
              </Typography>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                  color: cueColors.primary,
                  opacity: 0.4,
                }}
              >
                {item.node}
              </Typography>
            </Box>

            {/* Description */}
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "12px",
                lineHeight: 1.5,
                color: cueColors.primary,
                opacity: 0.7,
                mb: "12px",
              }}
            >
              {item.description}
            </Typography>

            {/* Footer */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "10px",
                    color: cueColors.primary,
                    opacity: 0.4,
                    textTransform: "uppercase",
                  }}
                >
                  Risk Score
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "12px",
                    fontWeight: 700,
                    color: item.isCritical ? "#ef4444" : "#f59e0b",
                  }}
                >
                  {item.riskScore.toFixed(2)}
                </Typography>
              </Box>

              <Button
                variant="text"
                onClick={() => onAction && onAction(item.id, item.actionText)}
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                  fontWeight: 700,
                  color: cueColors.primary,
                  textDecoration: "underline",
                  p: 0,
                  minWidth: "auto",
                  "&:hover": {
                    textDecoration: "underline",
                    backgroundColor: "transparent",
                    opacity: 0.8,
                  },
                }}
              >
                {item.actionText}
              </Button>
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
