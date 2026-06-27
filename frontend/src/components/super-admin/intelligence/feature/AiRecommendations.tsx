import { Box, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import type { Recommendation } from "./RecommendationCard";
import RecommendationCard from "./RecommendationCard";
import { Build, Group, RocketLaunch } from "@mui/icons-material";

export interface AiRecommendationsProps {
  recommendations?: Recommendation[];
  onExecuteAction?: (id: string) => void;
}

const defaultRecommendations: Recommendation[] = [
  {
    id: "rec-1",
    type: "revenue",
    title: "Revenue Opportunity",
    description:
      "Increase dynamic pricing for Peak Table Demand Friday 20:00 - 23:00 (+15% projected yields).",
    icon: <RocketLaunch />,
    hasAction: true,
    actionText: "EXECUTE ACTION",
  },
  {
    id: "rec-2",
    type: "staff",
    title: "Staff Optimization",
    description:
      "Projected spillover in Lounge Area. Reassign 2 floor staff from Central Tables at 21:00.",
    icon: <Group />,
    hasAction: false,
  },
  {
    id: "rec-3",
    type: "asset",
    title: "Asset & Equipment Lifecycles",
    description:
      "Table 04 has hit 120 hours of active play this month. Felt leveling and cue tip replacement recommended within 48 hours.",
    icon: <Build />,
    hasAction: false,
  },
];

export default function AiRecommendations({
  recommendations = defaultRecommendations,
  onExecuteAction,
}: AiRecommendationsProps) {
  return (
    <AdminCard
      sx={{
        backgroundColor: "#1b1c1c",
        border: "1px solid #444748",
        borderRadius: 0,
        p: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ p: 3, borderBottom: "1px solid #444748" }}>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "11px",
            fontWeight: 700,
            color: "#ffffff",
            textTransform: "uppercase",
            letterSpacing: "0.05em",
          }}
        >
          AI Recommendations
        </Typography>
      </Box>

      <Box
        sx={{
          flex: 1,
          overflowY: "auto",
          p: 2,
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        {recommendations.map((rec) => (
          <RecommendationCard
            key={rec.id}
            recommendation={rec}
            onAction={onExecuteAction}
          />
        ))}
      </Box>
    </AdminCard>
  );
}
