import { Box, Button, Typography } from "@mui/material";
import type { ReactNode } from "react";

export interface Recommendation {
  id: string;
  type: "revenue" | "staff" | "asset" | string;
  title: string;
  description: string;
  icon?: ReactNode;
  hasAction?: boolean;
  actionText?: string;
}

interface RecommendationCardProps {
  recommendation: Recommendation;
  onAction?: (id: string) => void;
}

export default function RecommendationCard({
  recommendation,
  onAction,
}: RecommendationCardProps) {
  const isRevenue = recommendation.type === "revenue";

  return (
    <Box
      sx={{
        p: 2,
        border: "1px solid #444748",
        backgroundColor: isRevenue
          ? "rgba(52, 53, 53, 0.5)"
          : "rgba(52, 53, 53, 0.3)",
        transition: "border-color 0.15s ease-in-out",
        "&:hover": {
          borderColor: isRevenue ? "#ffffff" : "#8e9192",
        },
      }}
    >
      {/* Icon & Title */}
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            fontSize: "14px",
            color: isRevenue ? "#ffffff" : "#c4c7c8",
          }}
        >
          {recommendation.icon}
        </Box>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            color: isRevenue ? "#ffffff" : "#c4c7c8",
            textTransform: "uppercase",
            fontWeight: 500,
          }}
        >
          {recommendation.title}
        </Typography>
      </Box>

      {/* Description */}
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: "13px",
          lineHeight: "1.4",
          color: "#e3e2e2",
          mb: recommendation.hasAction ? 2 : 0,
        }}
      >
        {recommendation.description}
      </Typography>

      {recommendation.hasAction && (
        <Button
          onClick={() => onAction?.(recommendation.id)}
          fullWidth
          sx={{
            py: 1,
            backgroundColor: "#ffffff",
            color: "#121414",
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "10px",
            fontWeight: 700,
            borderRadius: 0,
            letterSpacing: "0.08em",
            boxShadow: "none",
            "&:hover": {
              backgroundColor: "rgba(255, 255, 255, 0.9)",
              boxShadow: "none",
            },
          }}
          variant="contained"
        >
          {recommendation.actionText || "EXECUTE ACTION"}
        </Button>
      )}
    </Box>
  );
}
