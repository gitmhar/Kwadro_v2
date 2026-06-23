import React from "react";
import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@mui/system";
import { cueColors } from "../../../theme/dashboard/cueColors";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

export interface GatewayHistoryItem {
  status: "green" | "yellow" | "red";
  active: boolean;
}

export interface GatewayStatus {
  id: string;
  name: string;
  uptime: string;
  uptimeColor: string;
  history: GatewayHistoryItem[];
}

export interface PaymentGatewayHealthProps {
  gateways?: GatewayStatus[];
}

export default function PaymentGatewayHealth({
  gateways = [
    {
      id: "1",
      name: "Gateway 01: North Am",
      uptime: "99.9%",
      uptimeColor: "#4ade80",
      history: [
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: true },
      ],
    },
    {
      id: "2",
      name: "Gateway 02: Euro-C",
      uptime: "99.8%",
      uptimeColor: "#4ade80",
      history: [
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: true },
      ],
    },
    {
      id: "3",
      name: "Gateway 03: Asia-P",
      uptime: "84.2%",
      uptimeColor: "#f59e0b",
      history: [
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "red", active: false },
        { status: "yellow", active: false },
        { status: "yellow", active: false },
        { status: "yellow", active: false },
        { status: "yellow", active: false },
        { status: "yellow", active: true },
      ],
    },
    {
      id: "4",
      name: "Master Sync Node",
      uptime: "STABLE",
      uptimeColor: "#4ade80",
      history: [
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: false },
        { status: "green", active: true },
      ],
    },
  ],
}: PaymentGatewayHealthProps) {
  const getBarColor = (status: "green" | "yellow" | "red", active: boolean) => {
    const colors = {
      green: "#4ade80",
      yellow: "#f59e0b",
      red: "#ef4444",
    };
    const baseColor = colors[status] || colors.green;
    return active ? baseColor : `${baseColor}66`; // adds opacity (40% hex is ~66)
  };

  return (
    <Box
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        padding: "24px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          gap: "16px",
          mb: "24px",
        }}
      >
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "18px",
            fontWeight: 600,
            textTransform: "uppercase",
            color: cueColors.primary,
          }}
        >
          Payment Gateway Health
        </Typography>

        {/* Legend */}
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#4ade80",
              }}
            />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "11px",
                color: cueColors.primary,
                opacity: 0.5,
              }}
            >
              OPERATIONAL
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "8px",
                height: "8px",
                borderRadius: "50%",
                backgroundColor: "#f59e0b",
                animation: `${pulse} 2s infinite ease-in-out`,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "11px",
                color: cueColors.primary,
                opacity: 0.5,
              }}
            >
              DEGRADED
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Grid List */}
      <Grid container spacing={2} columns={12}>
        {gateways.map((gw) => (
          <Grid key={gw.id} size={{ xs: 12, md: 6, lg: 3 }} sx={{ boxSizing: "border-box" }}>
            <Box
              sx={{
                p: "16px",
                border: "1px solid #2E2E2E",
                backgroundColor: cueColors.surfaceContainerLow,
                boxSizing: "border-box",
              }}
            >
              {/* GW Top Info */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  mb: "12px",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "10px",
                    color: cueColors.primary,
                    opacity: 0.5,
                    textTransform: "uppercase",
                  }}
                >
                  {gw.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "10px",
                    fontWeight: 700,
                    color: gw.uptimeColor,
                  }}
                >
                  {gw.uptime}
                </Typography>
              </Box>

              {/* GW Bottom Bar History */}
              <Box sx={{ display: "flex", gap: "4px", height: "24px" }}>
                {gw.history.map((hist, idx) => (
                  <Box
                    key={idx}
                    sx={{
                      flex: 1,
                      backgroundColor: getBarColor(hist.status, hist.active),
                    }}
                  />
                ))}
              </Box>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
