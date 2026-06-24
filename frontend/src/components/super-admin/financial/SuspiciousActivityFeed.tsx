import { Box } from "@mui/material";
import CrisisAlertIcon from "@mui/icons-material/CrisisAlert";
import { keyframes } from "@mui/system";
import { cueColors } from "../../../theme/dashboard/cueColors";
import SectionHeader from "../../ui/shared/SectionHeader";
import SuspiciousActivityItem from "./SuspiciousActivityItem";

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
      description:
        "High-velocity micro-transactions from singular IP in Chicago. Pattern suggests node spoofing.",
      riskScore: 0.89,
      isCritical: true,
      actionText: "VIEW MAP",
    },
    {
      id: "2",
      type: "TERMINAL MISMATCH",
      node: "0x2D1F...E3D",
      description:
        "Physical location sensor discrepancy on Node-92. Audit recommended.",
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
      <SectionHeader
        variant="super-admin"
        title="Suspicious Activity"
        titleSx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "18px",
          fontWeight: 600,
          textTransform: "uppercase",
          color: cueColors.primary,
        }}
        rightElement={
          <CrisisAlertIcon
            sx={{
              color: "#ef4444",
              fontSize: "20px",
              animation: `${pulse} 2s infinite ease-in-out`,
            }}
          />
        }
        sx={{ borderBottom: "none", mb: 1.5 }}
      />

      {/* Activities List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {activities.map((item) => (
          <SuspiciousActivityItem
            key={item.id}
            item={item}
            onAction={onAction}
          />
        ))}
      </Box>
    </Box>
  );
}
