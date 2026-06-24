import type { ReactNode } from "react";
import AdminCard from "../../ui/cards/AdminCard";
import { Box, Button, Typography } from "@mui/material";
import DataTable, { type Column } from "../../ui/data-display/DataTable";

export interface RefundTransaction {
  id: string;
  terminal: string;
  amount: string;
}

interface RefundAuditTableProps {
  icon: ReactNode;
  title: string;
  badgeLabel: string;
  accentColor: string;
  textColor: string;
  headerBg: string;
  rowHoverBg: string;
  rowBg?: string;
  actionLabel: string;
  actionVariant: "filled" | "outlined";
  showHeaderRow?: boolean;
  transactions: RefundTransaction[];
  onAction: (id: string) => void;
}

export default function RefundAuditTable({
  icon,
  title,
  badgeLabel,
  accentColor,
  textColor,
  headerBg,
  rowHoverBg,
  rowBg,
  actionLabel,
  actionVariant,
  showHeaderRow = true,
  transactions,
  onAction,
}: RefundAuditTableProps) {
  const columns: Column<RefundTransaction>[] = [
    {
      field: "id",
      headerName: "Transaction",
      render: (row) => row.id, 
    },
    {
      field: "terminal",
      headerName: "Terminal",
    },
    {
      field: "amount",
      headerName: "Amount",
    },
    {
      headerName: "Action",
      align: "right",
      render: (row) => (
        <Button
          onClick={() => onAction(row.id)}
          sx={{
            ...(actionVariant === "filled"
              ? {
                  backgroundColor: accentColor,
                  color: "#000000",
                }
              : {
                  border: `1px solid ${accentColor}`,
                  backgroundColor: "transparent",
                  color: accentColor,
                }),
            px: "12px",
            py: "4px",
            borderRadius: 0,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            fontWeight: 700,
            boxShadow: "none",
            "&:hover":
              actionVariant === "filled"
                ? { backgroundColor: "rgba(255, 255, 255, 0.8)" }
                : { backgroundColor: accentColor, color: "#000000" },
          }}
        >
          {actionLabel}
        </Button>
      ),
    },
  ];

  return (
    <AdminCard
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        borderRadius: 0,
        p: 0,
        boxSizing: "border-box",
        width: "100%",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: "16px",
          borderBottom: "1px solid #2E2E2E",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: headerBg,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
          <Box sx={{ color: accentColor, display: "flex" }}>{icon}</Box>
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "18px",
              fontWeight: 600,
              textTransform: "uppercase",
              color: accentColor,
            }}
          >
            {title}
          </Typography>
        </Box>
        <Box
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
            fontWeight: 500,
            backgroundColor: accentColor,
            color: "#000000",
            px: "8px",
            py: "2px",
            letterSpacing: "0.05em",
          }}
        >
          {badgeLabel}
        </Box>
      </Box>

      {/* Table */}

      <DataTable
        columns={columns}
        data={transactions}
        rowDivider="1px solid #2E2E2E"
        tableSx={{
          width: "100%",
          borderCollapse: "collapse",
          minWidth: "auto", 
          "& MuiTableHead-root": {
            display: showHeaderRow ? "table-header-group" : "none",
          },
          "& .MuiTableHead-root .MuiTableRow-root": {
            backgroundColor: "#000000",
          },
          "& .MuiTableBody-root .MuiTableRow-root": {
            backgroundColor: rowBg,
            transition: "background-color 150ms ease",
            "&:hover": {
              backgroundColor: rowHoverBg,
            },
          },
        }}
        headerSx={{
          borderBottom: "1px solid #2E2E2E",
          px: "24px",
          py: "16px",
          fontFamily: '"Inter", sans-serif',
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.08em",
          textTransform: "uppercase",
          color: textColor,
          opacity: 0.5,
        }}
        // Dynamic structural cells properties mapping configuration values
        cellSx={(row, col) => ({
          borderBottom: "1px solid #2E2E2E",
          px: "24px",
          py: "16px",
          fontFamily: '"JetBrains Mono", monospace',
          color: textColor,
          fontSize: col.field === "terminal" ? "12px" : "11px",
          fontWeight: col.field === "terminal" ? 400 : 700,
          opacity: col.field === "terminal" ? 0.7 : 1,
        })}
      />
    </AdminCard>
  );
}
