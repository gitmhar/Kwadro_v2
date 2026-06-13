import React, { useState } from "react";
import { Box, Typography } from "@mui/material";
import { cueColors } from "../executive/cueColors";
import { GridView } from "@mui/icons-material";

type TableStatus = "AVAILABLE" | "OFFLINE" | "MAINTENANCE";

interface TableOverride {
  id: string;
  status: TableStatus;
}

const initialTables: TableOverride[] = [
  { id: "T-01", status: "AVAILABLE" },
  { id: "T-02", status: "AVAILABLE" },
  { id: "T-03", status: "MAINTENANCE" },
  { id: "T-04", status: "AVAILABLE" },
  { id: "T-05", status: "OFFLINE" },
  { id: "T-06", status: "AVAILABLE" },
  { id: "T-07", status: "AVAILABLE" },
  { id: "T-08", status: "MAINTENANCE" },
];

export default function TableAvailabilityOverrides() {
  const [tables, setTables] = useState<TableOverride[]>(initialTables);

  const cycleStatus = (id: string) => {
    setTables((prev) =>
      prev.map((table) => {
        if (table.id === id) {
          let nextStatus: TableStatus = "AVAILABLE";
          if (table.status === "AVAILABLE") nextStatus = "OFFLINE";
          else if (table.status === "OFFLINE") nextStatus = "MAINTENANCE";
          return { ...table, status: nextStatus };
        }
        return table;
      }),
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
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
          flexDirection: { xs: "column", sm: "row" },
          justifyContent: "space-between",
          alignItems: { xs: "flex-start", sm: "center" },
          p: "16px",
          gap: "12px",
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
          <GridView sx={{ color: cueColors.primary }} />
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
            Table Availability Overrides
          </Typography>
        </Box>

        {/* Legend */}
        <Box sx={{ display: "flex", gap: "16px", flexWrap: "wrap" }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: cueColors.primary,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                color: cueColors.primary,
              }}
            >
              AVAILABLE
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: cueColors.surfaceBright,
                border: `1px solid ${cueColors.outlineVariant}`,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                color: cueColors.primary,
              }}
            >
              OFFLINE
            </Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Box
              sx={{
                width: "12px",
                height: "12px",
                backgroundColor: cueColors.error,
              }}
            />
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: "0.6875rem",
                fontWeight: 500,
                letterSpacing: "0.05em",
                lineHeight: 1.2,
                color: cueColors.primary,
              }}
            >
              MAINTENANCE
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Grid Content */}
      <Box sx={{ p: "24px" }}>
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: {
              xs: "repeat(2, 1fr)",
              sm: "repeat(4, 1fr)",
              md: "repeat(8, 1fr)",
            },
            gap: "16px",
          }}
        >
          {tables.map((table) => {
            // Determine styles based on status
            let statusColor = cueColors.primary;
            let statusBg = cueColors.primary;
            let statusBorder = "none";

            if (table.status === "OFFLINE") {
              statusColor = cueColors.onSurfaceVariant;
              statusBg = cueColors.surfaceBright;
              statusBorder = `1px solid ${cueColors.outlineVariant}`;
            } else if (table.status === "MAINTENANCE") {
              statusColor = cueColors.error;
              statusBg = cueColors.error;
            }

            return (
              <Box
                key={table.id}
                onClick={() => cycleStatus(table.id)}
                sx={{
                  aspectRatio: "1/1",
                  backgroundColor: cueColors.surfaceDim,
                  border: `1px solid ${cueColors.outlineVariant}`,
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  transition: "all 0.2s",
                  "&:hover": {
                    borderColor: cueColors.primary,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "0.6875rem",
                    fontWeight: 500,
                    letterSpacing: "0.05em",
                    lineHeight: 1.2,
                    mb: "8px",
                    color: statusColor,
                    opacity: table.status === "OFFLINE" ? 0.4 : 1,
                  }}
                >
                  {table.id}
                </Typography>
                <Box
                  sx={{
                    width: "24px",
                    height: "24px",
                    backgroundColor: statusBg,
                    border: statusBorder,
                  }}
                />
              </Box>
            );
          })}
        </Box>
      </Box>
    </Box>
  );
}
