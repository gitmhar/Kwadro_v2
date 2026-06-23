import React from "react";
import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface NetCashflowCardProps {
  velocity: string;
  percentage: number;
}

export default function NetCashflowCard({
  velocity = "$4.2k/hr",
  percentage = 65,
}: NetCashflowCardProps) {
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
          Net Cashflow Velocity
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
          {velocity}
        </Typography>
      </Box>

      <Box sx={{ mt: "24px" }}>
        <Box
          sx={{
            backgroundColor: cueColors.surfaceContainer,
            height: "6px",
            width: "100%",
            position: "relative",
          }}
        >
          <Box
            sx={{
              position: "absolute",
              left: 0,
              top: 0,
              height: "100%",
              backgroundColor: cueColors.primary,
              width: `${percentage}%`,
            }}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            mt: "8px",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            opacity: 0.4,
            textTransform: "uppercase",
          }}
        >
          <span>min flow</span>
          <span>peak capacity</span>
        </Box>
      </Box>
    </Box>
  );
}
