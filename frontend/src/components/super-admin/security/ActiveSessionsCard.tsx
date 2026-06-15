import React from "react";
import { Box, Typography } from "@mui/material";
import GroupsIcon from "@mui/icons-material/Groups";
import { cueColors } from "../../../theme/dashboard/cueColors";

export default function ActiveSessionsCard() {
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
          Active Sessions
        </Typography>
        <GroupsIcon sx={{ color: cueColors.primary, fontSize: "1.25rem" }} />
      </Box>

      <Box sx={{ display: "flex", alignItems: "baseline", gap: "8px" }}>
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
          42
        </Typography>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.6875rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: cueColors.onSurfaceVariant,
            textTransform: "uppercase",
          }}
        >
          Node Clusters
        </Typography>
      </Box>

      <Box sx={{ mt: "16px", display: "flex", gap: "16px" }}>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "#4ade80",
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.625rem",
              fontWeight: 500,
              color: cueColors.onSurface,
            }}
          >
            38 STABLE
          </Typography>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center", gap: "6px" }}>
          <Box
            sx={{
              width: "6px",
              height: "6px",
              backgroundColor: "#eab308",
              flexShrink: 0,
            }}
          />
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.625rem",
              fontWeight: 500,
              color: cueColors.onSurface,
            }}
          >
            4 WARNING
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
