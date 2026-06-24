import { Box, Typography } from "@mui/material";
import type { ReactNode } from "react";
import { cueColors } from "../../../theme/dashboard/cueColors";
import AdminCard from "../../ui/cards/AdminCard";

interface FinancialMetricCardProps {
  label: string;
  value: string;
  badge?: ReactNode;
  renderFooter: ReactNode;
}

export default function FinancialMetricCard({
  label,
  value,
  badge,
  renderFooter,
}: FinancialMetricCardProps) {
  return (
    <AdminCard
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        borderRadius: 0,
        padding: "24px",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        boxSizing: "border-box",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "11px",
            fontWeight: 500,
            letterSpacing: "0.05em",
            color: cueColors.onSurfaceVariant,
            textTransform: "uppercase",
            mb: "8px",
          }}
        >
          {label}
        </Typography>
        <Box
          sx={{ display: "flex", alignItems: "center", gap: "16px", mt: "8px" }}
        >
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: "32px",
              fontWeight: 700,
              letterSpacing: "-0.02em",
              color: cueColors.primary,
              lineHeight: 1.2,
            }}
          >
            {value}
          </Typography>
          {badge && badge}
        </Box>
      </Box>
      <Box sx={{ mt: "24px" }}>{renderFooter}</Box>
    </AdminCard>
  );
}
