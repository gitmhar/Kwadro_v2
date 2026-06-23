import React from "react";
import { Box, Typography } from "@mui/material";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface GrossRevenueCardProps {
  amount: string;
  changePercent: string;
  history: number[]; // percentage heights
}

export default function GrossRevenueCard({
  amount = "$142,890.42",
  changePercent = "+12.4%",
  history = [25, 50, 37.5, 75, 100, 62.5],
}: GrossRevenueCardProps) {
  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        padding: "24px",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
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
          Gross Revenue (24H)
        </Typography>
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
          {amount}
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          alignItems: "flex-end",
          justifyContent: "space-between",
          mt: "24px",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            color: "#4ade80",
            gap: "4px",
          }}
        >
          <TrendingUpIcon sx={{ fontSize: "16px" }} />
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.05em",
            }}
          >
            {changePercent}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            gap: "4px",
            height: "32px",
            alignItems: "flex-end",
          }}
        >
          {history.map((heightPct, idx) => (
            <Box
              key={idx}
              sx={{
                width: "4px",
                height: `${heightPct}%`,
                backgroundColor: cueColors.primary,
              }}
            />
          ))}
        </Box>
      </Box>
    </Box>
  );
}
