import { useState } from "react";
import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";
import { GridView } from "@mui/icons-material";
import AdminCard from "../../../ui/cards/AdminCard";
import SectionHeader from "../../../ui/shared/SectionHeader";
import StatusLegend from "../../../ui/shared/StatusLegend";
import TableStatusGridItem from "./TableStatusGridItem";

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
          const statusOrder: TableStatus[] = [
            "AVAILABLE",
            "MAINTENANCE",
            "OFFLINE",
          ];
          const currentIdx = statusOrder.indexOf(table.status);
          const nextIdx = (currentIdx + 1) % statusOrder.length;
          return { ...table, status: statusOrder[nextIdx] };
        }
        return table;
      }),
    );
  };

  return (
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        width: "100%",
        boxSizing: "border-box",
        borderRadius: 0,
        p: 0,
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      <SectionHeader
        variant="super-admin"
        icon={<GridView sx={{ color: cueColors.primary }} />}
        title="Table Availability Overrides"
        rightElement={<StatusLegend />}
        sx={{
          alignItems: { xs: "flex-start", sm: "center" },
          p: "16px",
          gap: "12px",
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          mb: 0
        }}
      />

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
          {tables.map((table) => (
            <TableStatusGridItem
              key={table.id}
              table={table}
              onClick={cycleStatus}
            />
          ))}
        </Box>
      </Box>
    </AdminCard>
  );
}
