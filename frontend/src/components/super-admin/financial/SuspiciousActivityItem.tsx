import { Box, Button, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

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

interface SuspiciousActivityItemProps {
  item: ActivityItem;
  onAction: (id: string, actionType: string) => void;
}

export default function SuspiciousActivityItem({
  item,
  onAction,
}: SuspiciousActivityItemProps) {
  const severityColor = item.isCritical ? "#EF4444" : "F59E0B";

  return (
    <Box
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
            color: severityColor, 
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
              color: severityColor,
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
  );
}
