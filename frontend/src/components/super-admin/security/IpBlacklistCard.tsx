import React from "react";
import { Box, Typography } from "@mui/material";
import BlockIcon from "@mui/icons-material/Block";
import { cueColors } from "../../../theme/dashboard/cueColors";

export default function IpBlacklistCard() {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "20px",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: "24px",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: cueColors.primary,
            opacity: 0.5,
            textTransform: "uppercase",
          }}
        >
          IP Blacklist
        </Typography>
        <BlockIcon sx={{ color: cueColors.error, fontSize: "1.25rem" }} />
      </Box>

      <Box sx={{ display: "flex", flexDirection: "column" }}>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "2rem",
            fontWeight: 700,
            letterSpacing: "-0.02em",
            lineHeight: 1,
            color: cueColors.primary,
          }}
        >
          814
        </Typography>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: cueColors.primary,
            opacity: 0.7,
            mt: "4px",
            textTransform: "uppercase",
          }}
        >
          Blocked in 24H
        </Typography>
      </Box>

      <Box sx={{ mt: "16px" }}>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.625rem",
              fontWeight: 500,
              color: cueColors.onSurface,
            }}
          >
            LAST: 204.11.23.4 (HKG)
          </Typography>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.625rem",
              fontWeight: 500,
              color: cueColors.error,
            }}
          >
            CRITICAL BRUTE
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
