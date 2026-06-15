import React, { useState } from "react";
import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from "@mui/material";
import LogoutIcon from "@mui/icons-material/Logout";
import SecurityIcon from "@mui/icons-material/Security";
import { cueColors } from "../../../theme/dashboard/cueColors";

type ViewMode = "LIVE" | "HISTORIC";

interface LoginAttempt {
  timestamp: string;
  user: string;
  ip: string;
  device: string;
  status: "AUTHORIZED" | "FAILURE";
  statusCode?: string;
  threat?: boolean;
}

const attempts: LoginAttempt[] = [
  {
    timestamp: "14:02:44.201",
    user: "j.smith@cue.ops",
    ip: "192.158.42.1",
    device: "macOS 14.2 / Chrome 120",
    status: "AUTHORIZED",
  },
  {
    timestamp: "14:01:12.882",
    user: "unknown@guest",
    ip: "103.22.102.14",
    device: "Ubuntu / Python-requests",
    status: "FAILURE",
    statusCode: "401",
    threat: true,
  },
  {
    timestamp: "13:58:30.551",
    user: "m.chen@cue.hq",
    ip: "192.158.42.104",
    device: "iOS 17.2 / Mobile App",
    status: "AUTHORIZED",
  },
  {
    timestamp: "13:55:12.003",
    user: "r.vance@cue.audit",
    ip: "172.16.0.44",
    device: "Windows 11 / Edge",
    status: "AUTHORIZED",
  },
];

const monoSx = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: "0.6875rem",
  fontWeight: 500,
  letterSpacing: "0.05em",
};

const headerCellSx = {
  ...monoSx,
  fontSize: "0.6875rem",
  fontWeight: 700,
  letterSpacing: "0.08em",
  textTransform: "uppercase" as const,
  color: cueColors.primary,
  opacity: 0.6,
  backgroundColor: cueColors.surfaceContainerHigh,
  borderBottom: `1px solid ${cueColors.outlineVariant}`,
  py: "12px",
  px: "16px",
};

export default function LoginAttemptMonitoring() {
  const [view, setView] = useState<ViewMode>("LIVE");
  const [hoveredRow, setHoveredRow] = useState<number | null>(null);

  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        boxSizing: "border-box",
      }}
    >
      {/* Card Header */}
      <Box
        sx={{
          p: "16px",
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{ ...monoSx, fontWeight: 700, color: cueColors.primary }}
        >
          LOGIN ATTEMPT MONITORING
        </Typography>
        <Box sx={{ display: "flex", gap: "8px" }}>
          {(["LIVE", "HISTORIC"] as ViewMode[]).map((v) => (
            <Button
              key={v}
              onClick={() => setView(v)}
              variant="outlined"
              size="small"
              sx={{
                ...monoSx,
                fontSize: "0.625rem",
                px: "8px",
                py: "4px",
                borderRadius: 0,
                borderColor: cueColors.outlineVariant,
                color: cueColors.primary,
                backgroundColor:
                  view === v ? cueColors.surfaceBright : "transparent",
                minWidth: "auto",
                "&:hover": {
                  backgroundColor: cueColors.surfaceBright,
                  borderColor: cueColors.outlineVariant,
                },
              }}
            >
              {v}
            </Button>
          ))}
        </Box>
      </Box>

      {/* Table */}
      <Box sx={{ overflowX: "auto" }}>
        <Table sx={{ width: "100%", borderCollapse: "collapse" }}>
          <TableHead>
            <TableRow>
              {[
                "Timestamp",
                "User Entity",
                "Source IP",
                "Device / OS",
                "Status",
                "Actions",
              ].map((col, i) => (
                <TableCell
                  key={col}
                  align={i === 5 ? "right" : "left"}
                  sx={headerCellSx}
                >
                  {col}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {attempts.map((row, idx) => {
              const isHovered = hoveredRow === idx;
              const rowBg = row.threat
                ? "rgba(255, 180, 171, 0.04)"
                : "transparent";

              return (
                <TableRow
                  key={idx}
                  onMouseEnter={() => setHoveredRow(idx)}
                  onMouseLeave={() => setHoveredRow(null)}
                  sx={{
                    backgroundColor: isHovered
                      ? cueColors.surfaceBright
                      : rowBg,
                    transition: "background-color 150ms ease-in-out",
                    borderBottom: `1px solid ${cueColors.outlineVariant}`,
                    cursor: "default",
                  }}
                >
                  {/* Timestamp */}
                  <TableCell
                    sx={{
                      ...monoSx,
                      fontSize: "0.75rem",
                      color: cueColors.onSurface,
                      py: "12px",
                      px: "16px",
                      border: "none",
                    }}
                  >
                    {row.timestamp}
                  </TableCell>

                  {/* User */}
                  <TableCell
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.875rem",
                      color: cueColors.onSurface,
                      py: "12px",
                      px: "16px",
                      border: "none",
                    }}
                  >
                    {row.user}
                  </TableCell>

                  {/* IP */}
                  <TableCell
                    sx={{
                      ...monoSx,
                      fontSize: "0.75rem",
                      color: row.threat ? cueColors.error : cueColors.onSurface,
                      py: "12px",
                      px: "16px",
                      border: "none",
                    }}
                  >
                    {row.ip}
                  </TableCell>

                  {/* Device */}
                  <TableCell
                    sx={{
                      fontFamily: '"Inter", sans-serif',
                      fontSize: "0.6875rem",
                      color: cueColors.onSurfaceVariant,
                      py: "12px",
                      px: "16px",
                      border: "none",
                    }}
                  >
                    {row.device}
                  </TableCell>

                  {/* Status Badge */}
                  <TableCell sx={{ py: "12px", px: "16px", border: "none" }}>
                    <Box
                      component="span"
                      sx={{
                        display: "inline-block",
                        px: "8px",
                        py: "2px",
                        ...monoSx,
                        fontSize: "0.625rem",
                        color:
                          row.status === "AUTHORIZED"
                            ? "#4ade80"
                            : cueColors.error,
                        backgroundColor:
                          row.status === "AUTHORIZED"
                            ? "rgba(74, 222, 128, 0.1)"
                            : "rgba(255, 180, 171, 0.1)",
                        border: `1px solid ${
                          row.status === "AUTHORIZED"
                            ? "rgba(74, 222, 128, 0.2)"
                            : "rgba(255, 180, 171, 0.2)"
                        }`,
                      }}
                    >
                      {row.status === "FAILURE"
                        ? `FAILURE (${row.statusCode})`
                        : "AUTHORIZED"}
                    </Box>
                  </TableCell>

                  {/* Actions */}
                  <TableCell
                    sx={{
                      py: "12px",
                      px: "16px",
                      border: "none",
                      textAlign: "right",
                    }}
                  >
                    {row.threat ? (
                      <SecurityIcon
                        sx={{
                          fontSize: "1rem",
                          color: cueColors.error,
                          cursor: "pointer",
                          verticalAlign: "middle",
                        }}
                        titleAccess="Block IP"
                      />
                    ) : (
                      <LogoutIcon
                        sx={{
                          fontSize: "1rem",
                          color: cueColors.onSurfaceVariant,
                          opacity: isHovered ? 1 : 0,
                          transition: "opacity 150ms ease-in-out",
                          cursor: "pointer",
                          verticalAlign: "middle",
                          "&:hover": { color: cueColors.error },
                        }}
                        titleAccess="Force Logout"
                      />
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
