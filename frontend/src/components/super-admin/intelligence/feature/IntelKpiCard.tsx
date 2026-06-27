import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import AdminCard from "../../../ui/cards/AdminCard";
import type { ReactNode } from "react";

export interface KpiCardProps {
  id: string;
  title: string;
  value: string;
  badgeText: string;
  badgeVariant?: "filled" | "outlined";
  trendIcon: ReactNode;
  trendText: string;
  trendColor: string;
}

export default function KpiCard({
  title,
  value,
  badgeText,
  badgeVariant = "filled",
  trendIcon,
  trendText,
  trendColor,
}: KpiCardProps) {
  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        p: { xs: 2, sm: 2.5 },
        position: "relative",
        transition: "background-color 0.2s, border-color 0.2s",
        "&:hover": {
          backgroundColor: cueColors.surfaceContainerHigh,
          borderColor: cueColors.outline,
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 2,
        }}
      >
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            letterSpacing: "0.05em",
            fontWeight: 500,
            color: cueColors.onSurfaceVariant,
            textTransform: "uppercase",
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            fontSize: "clamp(0.65rem, 1.5vw, 0.8rem)",
            fontFamily: "JetBrains Mono, monospace",
            color:
              badgeVariant === "filled"
                ? cueColors.surface
                : cueColors.onSurfaceVariant,
            backgroundColor:
              badgeVariant === "filled" ? cueColors.primary : "transparent",
            border:
              badgeVariant === "outlined"
                ? `1px solid ${cueColors.outlineVariant}`
                : "none",
            px: 1,
            py: 0.25,
            fontWeight: 500,
          }}
        >
          {badgeText}
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: "clamp(1.75rem, 5vw, 2.25rem)",
          fontWeight: 700,
          color: cueColors.primary,
          letterSpacing: "-0.02em",
          lineHeight: 1.1,
        }}
      >
        {value}
      </Typography>

      <Box sx={{ display: "flex", alignItems: "center", gap: 0.5, mt: 1 }}>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: trendColor,
          }}
        >
          {trendIcon}
        </Box>
        <Typography
          sx={{
            fontFamily: "JetBrains Mono, monospace",
            fontSize: "clamp(0.65rem, 1.2vw, 0.75rem)",
            color: trendColor,
          }}
        >
          {trendText}
        </Typography>
      </Box>
    </AdminCard>
  );
}
