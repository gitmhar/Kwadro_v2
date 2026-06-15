import React from "react";
import { Box, Typography, Button } from "@mui/material";
import VerifiedUserIcon from "@mui/icons-material/VerifiedUser";
import { cueColors } from "../../../theme/dashboard/cueColors";

export default function MfaEnforcementCard() {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "20px",
        position: "relative",
        overflow: "hidden",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Header */}
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
          MFA Enforcement
        </Typography>
        <VerifiedUserIcon
          sx={{ color: cueColors.primary, fontSize: "1.25rem" }}
        />
      </Box>

      {/* Metric */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "4px" }}>
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
          98.2%
        </Typography>

        {/* Progress Bar */}
        <Box
          sx={{
            width: "100%",
            height: "4px",
            backgroundColor: cueColors.surfaceVariant,
            mt: "8px",
          }}
        >
          <Box
            sx={{
              width: "98.2%",
              height: "100%",
              backgroundColor: cueColors.primary,
            }}
          />
        </Box>
      </Box>

      {/* Footer */}
      <Box
        sx={{
          mt: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.625rem",
            fontWeight: 500,
            color: "#4ade80",
            letterSpacing: "0.05em",
          }}
        >
          2,104 / 2,142 PROTECTED
        </Typography>
        <Button
          variant="text"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.625rem",
            fontWeight: 500,
            color: cueColors.onSurfaceVariant,
            textDecoration: "underline",
            p: 0,
            minWidth: "auto",
            textTransform: "uppercase",
            "&:hover": {
              color: cueColors.primary,
              backgroundColor: "transparent",
            },
          }}
        >
          VIEW UNSECURED
        </Button>
      </Box>
    </Box>
  );
}
