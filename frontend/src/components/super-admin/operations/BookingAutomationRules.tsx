import { useState } from "react";
import {
  Box,
  Typography,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";
import { SmartToy } from "@mui/icons-material";
import AdminCard from "../../ui/cards/AdminCard";
import { OpToggle } from "../../ui/shared/OpToggle";
import DataTable, { type Column } from "../../ui/data-display/DataTable";
import SectionHeader from "../../ui/shared/SectionHeader";

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

const columns: Column<AutomationRule>[] = [
  {
    field: "trigger",
    headerName: "RULE TRIGGER",
    render: (row: any) => (
      <span
        style={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "0.6875rem",
          fontWeight: 500,
          letterSpacing: "0.05em",
          lineHeight: 1.2,
          color: cueColors.primary,
        }}
      >
        {row.trigger}
      </span>
    ),
  },
  {
    field: "logic",
    headerName: "ACTION LOGIC",
    render: (row: any) => (
      <span
        style={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "0.875rem",
          fontWeight: row.boldLogic ? 700 : 400,
          color: cueColors.onSurface,
          opacity: row.boldLogic ? 1 : 0.7,
        }}
      >
        {row.logic}
      </span>
    ),
  },
  {
    field: "enabled",
    headerName: "ENABLED",
    align: "right",
    render: (row, _col, toggleFn) => (
      <OpToggle checked={row.enabled} onChange={() => toggleFn?.(row)} />
    ),
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
    <AdminCard
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "16px",
        borderRadius: 0,
        width: "100%",
        boxSizing: "border-box",
        transition: "background-color 150ms ease-in-out",
        "&:hover": {
          backgroundColor: "#232424",
        },
      }}
    >
      {/* Header bar */}
      
      <SectionHeader
        icon={<SmartToy sx={{ color: cueColors.primary }} />}
        title="Booking Automation Rules"
        variant="super-admin"
      />

      {/* Table Container */}
      <DataTable<AutomationRule>
        columns={columns}
        data={rules}
        headerSx={{
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
        }}
        cellSx={(row, col) => {
          return {
            pb: "16px",
            pt: "16px",
            px: 0,
            borderBottom: `1px solid ${cueColors.outlineVariant}`,
          };
        }}
        rowDivider={`1px solid ${cueColors.outlineVariant}`}
        tableSx={{ minWidth: 500 }}
      />
    </AdminCard>
  );
}
