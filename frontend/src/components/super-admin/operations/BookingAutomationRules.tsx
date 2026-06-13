import React, { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Switch,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import { cueColors } from "../executive/cueColors";
import { SmartToy } from "@mui/icons-material";

// Sleek retro rectangular toggle switch to match .op-toggle / .op-slider
const OpToggle = styled(Switch)(() => ({
  width: 44,
  height: 24,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 3,
    transitionDuration: "200ms",
    "&.Mui-checked": {
      transform: "translateX(20px)",
      "& + .MuiSwitch-track": {
        backgroundColor: "#ffffff",
        opacity: 1,
        border: 0,
      },
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 16,
    height: 16,
    borderRadius: 0,
    backgroundColor: "#8e9192",
  },
  "& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb": {
    backgroundColor: "#000000",
  },
  "& .MuiSwitch-track": {
    borderRadius: 0,
    backgroundColor: "#2E2E2E",
    opacity: 1,
    border: "1px solid #444748",
    boxSizing: "border-box",
  },
}));

interface AutomationRule {
  trigger: string;
  logic: string;
  enabled: boolean;
  boldLogic?: boolean;
}

const initialRules: AutomationRule[] = [
  {
    trigger: "NO_SHOW_DETECTED",
    logic: "Charge 50% deposit + blackmark user",
    enabled: true,
  },
  {
    trigger: "UNPAID_RES_EXPIRED",
    logic: "Auto-cancel unpaid reservations (15m window)",
    enabled: true,
    boldLogic: true,
  },
  {
    trigger: "CURFEW_9PM_TRIGGER",
    logic: "Disable walk-ins after 9PM",
    enabled: true,
  },
  {
    trigger: "VIP_PRESENCE_DETECT",
    logic: "Auto-assign table-12 on arrival",
    enabled: true,
  },
];

export default function BookingAutomationRules() {
  const [rules, setRules] = useState<AutomationRule[]>(initialRules);

  const toggleRule = (index: number) => {
    setRules((prev) =>
      prev.map((rule, idx) =>
        idx === index ? { ...rule, enabled: !rule.enabled } : rule,
      ),
    );
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
          <SmartToy sx={{ color: cueColors.primary }} />
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
            Booking Automation Rules
          </Typography>
        </Box>
      </Box>

      {/* Table Container */}
      <TableContainer sx={{ overflowX: "auto", width: "100%" }}>
        <Table sx={{ minWidth: "500px", width: "100%" }}>
          <TableHead>
            <TableRow>
              <TableCell
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: cueColors.primary,
                  opacity: 0.6,
                  borderBottom: `1px solid ${cueColors.outlineVariant}`,
                  pb: "16px",
                  pt: 0,
                  px: 0,
                  textAlign: "left",
                }}
              >
                RULE TRIGGER
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: cueColors.primary,
                  opacity: 0.6,
                  borderBottom: `1px solid ${cueColors.outlineVariant}`,
                  pb: "16px",
                  pt: 0,
                  px: 0,
                  textAlign: "left",
                }}
              >
                ACTION LOGIC
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "0.6875rem",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: cueColors.primary,
                  opacity: 0.6,
                  borderBottom: `1px solid ${cueColors.outlineVariant}`,
                  pb: "16px",
                  pt: 0,
                  px: 0,
                  textAlign: "right",
                }}
              >
                ENABLED
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rules.map((rule, idx) => {
              const isLast = idx === rules.length - 1;
              const borderStyle = isLast
                ? "none"
                : `1px solid ${cueColors.outlineVariant}`;

              return (
                <TableRow key={rule.trigger}>
                  <TableCell
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: "0.6875rem",
                      fontWeight: 500,
                      letterSpacing: "0.05em",
                      lineHeight: 1.2,
                      color: cueColors.primary,
                      borderBottom: borderStyle,
                      py: "16px",
                      px: 0,
                    }}
                  >
                    {rule.trigger}
                  </TableCell>
                  <TableCell
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.875rem",
                      fontWeight: rule.boldLogic ? 700 : 400,
                      color: cueColors.onSurface,
                      opacity: rule.boldLogic ? 1 : 0.7,
                      borderBottom: borderStyle,
                      py: "16px",
                      px: 0,
                    }}
                  >
                    {rule.logic}
                  </TableCell>
                  <TableCell
                    align="right"
                    sx={{
                      borderBottom: borderStyle,
                      py: "16px",
                      px: 0,
                    }}
                  >
                    <OpToggle
                      checked={rule.enabled}
                      onChange={() => toggleRule(idx)}
                    />
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}
