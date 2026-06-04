import { Box, Typography } from "@mui/material";
import { cueColors } from "./cueColors";
import AdminCard from "../../ui/cards/AdminCard";

export interface KpiCardProps {
  title: string;
  value: string;
  indicatorText: string;
  percentageFilled: number; // 0 to 100
  isErrorColor?: boolean;
}

export default function KpiCard({
  title,
  value,
  indicatorText,
  percentageFilled,
  isErrorColor = false,
}: KpiCardProps) {
  const highlightColor = isErrorColor ? cueColors.error : "#22c55e";
  const progressBg = isErrorColor
    ? "rgba(255, 180, 171, 0.2)"
    : "rgba(34, 197, 94, 0.2)";

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        p: "16px",
        border: `1px solid ${cueColors.outlineVariant}`,
        borderRadius: 0,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "11px",
          fontWeight: 500,
          color: cueColors.onSurfaceVariant,
          opacity: 0.7,
          mb: "8px",
          textTransform: "uppercase",
          wordBreak: "break-word",
        }}
      >
        {title}
      </Typography>
      <Typography
        sx={{
          fontFamily: "Inter, sans-serif",
          fontSize: { xs: "24px", sm: "28px", md: "32px" },
          fontWeight: 700,
          letterSpacing: "-0.02em",
          mb: "4px",
          color: isErrorColor ? cueColors.error : cueColors.primary,
        }}
      >
        {value}
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <Typography
          sx={{
            color: highlightColor,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            fontWeight: 500,
            whiteSpace: { xs: "normal", sm: "nowrap" }, 
            wordBreak: "keep-all", 
          }}
        >
          {indicatorText}
        </Typography>
        <Box
          sx={{
            height: "20px",
            flex: 1,
            backgroundColor: cueColors.surfaceDim,
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              top: 0,
              bottom: 0,
              left: 0,
              backgroundColor: progressBg,
              width: `${percentageFilled}%`,
            }}
          />
        </Box>
      </Box>
    </AdminCard>
  );
}
