import React from "react";
import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface ProfitabilityCardProps {
  percentage: string;
  statusText: string;
  history: { heightPercent: number; isHighlight: boolean }[];
}

export default function ProfitabilityCard({
  percentage = "88.4%",
  statusText = "TARGET REACHED",
  history = [
    { heightPercent: 40, isHighlight: false },
    { heightPercent: 60, isHighlight: false },
    { heightPercent: 85, isHighlight: true },
    { heightPercent: 55, isHighlight: false },
    { heightPercent: 70, isHighlight: false },
    { heightPercent: 95, isHighlight: true },
    { heightPercent: 50, isHighlight: false },
  ],
}: ProfitabilityCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: cueColors.onSurfaceVariant,
            textTransform: "uppercase",
            mb: "8px",
          }}
        >
          Profitability Trend
        </Typography>
        <Box sx={{ display: "flex", alignItems: "center", gap: "16px", mt: "8px" }}>
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: cueColors.primary,
              lineHeight: 1.2,
            }}
          >
            {percentage}
          </Typography>
          <Box
            sx={{
              px: "8px",
              py: "4px",
              backgroundColor: "rgba(255, 255, 255, 0.1)",
              border: "1px solid rgba(255, 255, 255, 0.2)",
              fontSize: "10px",
              fontFamily: '"JetBrains Mono", monospace',
              color: cueColors.primary,
              letterSpacing: "0.05em",
            }}
          >
            {statusText}
          </Box>
        </Box>
      </Box>

      <Box
        sx={{
          mt: "24px",
          display: "flex",
          gap: "8px",
          height: "40px",
          alignItems: "flex-end",
          overflow: "hidden",
        }}
      >
        {history.map((bar, idx) => (
          <Box
            key={idx}
            sx={{
              flex: 1,
              height: `${bar.heightPercent}%`,
              backgroundColor: bar.isHighlight ? cueColors.primary : cueColors.surfaceVariant,
            }}
          />
        ))}
      </Box>
    </Box>
  );
}
