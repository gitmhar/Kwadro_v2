import React, { useState } from "react";
import { Box, Typography, ButtonBase } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";
import { CalendarToday, ExpandLess, ExpandMore } from "@mui/icons-material";

export default function ReservationPolicies() {
  const [cancellationWindow, setCancellationWindow] = useState(12.0);
  const [gracePeriod, setGracePeriod] = useState(15.0);
  const [maxGroupSize, setMaxGroupSize] = useState(6.0);

  const formatVal = (val: number) => {
    return val.toFixed(1).padStart(4, "0");
  };

  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "16px",
        width: "100%",
        boxSizing: "border-box",
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: "24px",
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          pb: "12px",
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <CalendarToday sx={{ color: cueColors.primary }} />
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "0.6875rem",
              fontWeight: 700,
              textTransform: "uppercase",
              letterSpacing: "0.05em",
              color: cueColors.primary,
              margin: 0,
            }}
          >
            Reservation Policy
          </Typography>
        </Box>
      </Box>

      {/* Policies List */}
      <Box sx={{ display: "flex", flexDirection: "column", gap: "16px" }}>
        {/* Policy 1: Cancellation Window */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
            borderBottom: `1px dashed ${cueColors.outlineVariant}`,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.875rem",
                lineHeight: 1.5,
                fontWeight: 600,
                color: cueColors.onSurface,
              }}
            >
              Cancellation Window
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.75rem",
                color: cueColors.onSurfaceVariant,
                opacity: 0.6,
              }}
            >
              Hours before booking start
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                color: cueColors.primary,
                minWidth: "50px",
                textAlign: "right",
              }}
            >
              {formatVal(cancellationWindow)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <ExpandLess
                onClick={() => setCancellationWindow((prev) => prev + 1.0)}
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1rem",
                  color: cueColors.primary,
                  opacity: 0.6,
                  "&:hover": { opacity: 1 },
                }}
              />

              <ExpandMore
                onClick={() =>
                  setCancellationWindow((prev) => Math.max(0, prev - 1.0))
                }
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1rem",
                  color: cueColors.primary,
                  opacity: 0.6,
                  "&:hover": { opacity: 1 },
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Policy 2: Grace Period */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
            borderBottom: `1px dashed ${cueColors.outlineVariant}`,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.875rem",
                lineHeight: 1.5,
                fontWeight: 600,
                color: cueColors.onSurface,
              }}
            >
              Grace Period
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.75rem",
                color: cueColors.onSurfaceVariant,
                opacity: 0.6,
              }}
            >
              Minutes before auto-release
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                color: cueColors.primary,
                minWidth: "50px",
                textAlign: "right",
              }}
            >
              {formatVal(gracePeriod)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <ExpandLess
                onClick={() => setGracePeriod((prev) => prev + 1.0)}
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1rem",
                  color: cueColors.primary,
                  opacity: 0.6,
                  "&:hover": { opacity: 1 },
                }}
              />
              <ExpandMore
                onClick={() => setGracePeriod((prev) => prev - 1.0)}
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1rem",
                  color: cueColors.primary,
                  opacity: 0.6,
                  "&:hover": { opacity: 1 },
                }}
              />
            </Box>
          </Box>
        </Box>

        {/* Policy 3: Max Group Size */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            py: "8px",
            borderBottom: `1px dashed ${cueColors.outlineVariant}`,
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.875rem",
                lineHeight: 1.5,
                fontWeight: 600,
                color: cueColors.onSurface,
              }}
            >
              Max Group Size
            </Typography>
            <Typography
              sx={{
                fontFamily: '"Inter", sans-serif',
                fontSize: "0.75rem",
                color: cueColors.onSurfaceVariant,
                opacity: 0.6,
              }}
            >
              Per standard table booking
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "1rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                color: cueColors.primary,
                minWidth: "50px",
                textAlign: "right",
              }}
            >
              {formatVal(maxGroupSize)}
            </Typography>
            <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
              <ExpandLess
                onClick={() => setMaxGroupSize((prev) => prev + 1.0)}
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1rem",
                  color: cueColors.primary,
                  opacity: 0.6,
                  "&:hover": { opacity: 1 },
                }}
              />
              <ExpandMore
                onClick={() => setMaxGroupSize((prev) => prev - 1.0)}
                className="material-symbols-outlined"
                sx={{
                  fontSize: "1rem",
                  color: cueColors.primary,
                  opacity: 0.6,
                  "&:hover": { opacity: 1 },
                }}
              />
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
