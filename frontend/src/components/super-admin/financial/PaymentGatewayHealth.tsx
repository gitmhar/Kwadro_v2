import { Box, Typography, Grid } from "@mui/material";
import { keyframes } from "@mui/system";
import { cueColors } from "../../../theme/dashboard/cueColors";
import type { GatewayStatus } from "./GatewayHealthCard";
import GatewayHealthCard from "./GatewayHealthCard";
import AdminCard from "../../ui/cards/AdminCard";
import SectionHeader from "../../ui/shared/SectionHeader";

const pulse = keyframes`
  0% { opacity: 1; }
  50% { opacity: 0.4; }
  100% { opacity: 1; }
`;

const defaultGateways: GatewayStatus[] = [
  {
    id: "1",
    name: "Gateway 01: North Am",
    uptime: "99.9%",
    uptimeColor: "#4ade80",
    history: Array.from({ length: 8 }, (_, i) => ({
      status: "green" as const,
      active: i === 7,
    })),
  },
  {
    id: "2",
    name: "Gateway 02: Euro-C",
    uptime: "99.8%",
    uptimeColor: "#4ade80",
    history: Array.from({ length: 8 }, (_, i) => ({
      status: "green" as const,
      active: i === 7,
    })),
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
    history: Array.from({ length: 8 }, (_, i) => ({
      status: "green" as const,
      active: i === 7,
    })),
  },
];

export interface PaymentGatewayHealthProps {
  gateways?: GatewayStatus[];
}

export default function PaymentGatewayHealth({
  gateways = defaultGateways,
}: PaymentGatewayHealthProps) {
  return (
    <AdminCard
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        borderRadius: 0,
        padding: "24px",
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Header */}
      <SectionHeader
        variant="super-admin"
        title="PAYMENT GATEWAY HEALTH"
        titleSx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "18px",
          fontWeight: 600,
          textTransform: "uppercase",
          color: cueColors.primary,
        }}
        rightElement={
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
        }
        sx={{
          alignItems: { xs: "flex-start", sm: "center" },
          borderBottom: "none",
          mb: 1,
        }}
      />

      {/* Grid List */}
      <Grid container spacing={2} columns={12}>
        {gateways.map((gw) => (
          <Grid
            key={gw.id}
            size={{ xs: 12, md: 6, lg: 3 }}
            sx={{ boxSizing: "border-box" }}
          >
            <GatewayHealthCard gateway={gw} />
          </Grid>
        ))}
      </Grid>
    </AdminCard>
  );
}
