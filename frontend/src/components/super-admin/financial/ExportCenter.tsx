import { Box, Typography, Button } from "@mui/material";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import GavelIcon from "@mui/icons-material/Gavel";
import SecurityUpdateWarningIcon from "@mui/icons-material/SecurityUpdateWarning";
import DownloadIcon from "@mui/icons-material/Download";
import { cueColors } from "../../../theme/dashboard/cueColors";
import AdminCard from "../../ui/cards/AdminCard";

export interface ExportOption {
  id: string;
  label: string;
  iconType: "ledger" | "tax" | "audit";
}

export interface ExportCenterProps {
  options?: ExportOption[];
  onExport?: (id: string) => void;
}

export default function ExportCenter({
  options = [
    { id: "1", label: "Daily Ledger (CSV)", iconType: "ledger" },
    { id: "2", label: "Tax Compliance (PDF)", iconType: "tax" },
    { id: "3", label: "Audit Logs (ALL)", iconType: "audit" },
  ],
  onExport,
}: ExportCenterProps) {
  const iconMap = {
    ledger: <ReceiptLongIcon sx={{ fontSize: "18px" }} />,
    tax: <GavelIcon sx={{ fontSize: "18px" }} />,
    audit: <SecurityUpdateWarningIcon sx={{ fontSize: "18px" }} />,
  };

  return (
    <AdminCard
      sx={{
        backgroundColor: "#141414",
        border: "1px solid #2E2E2E",
        borderRadius: 0,
        padding: "24px",
        boxSizing: "border-box",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"Inter", sans-serif',
          fontSize: "18px",
          fontWeight: 600,
          textTransform: "uppercase",
          color: cueColors.primary,
          mb: "16px",
        }}
      >
        Export Center
      </Typography>

      <Box sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
        {options.map((opt) => (
          <Button
            key={opt.id}
            onClick={() => onExport && onExport(opt.id)}
            sx={{
              width: "100%",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "12px 16px",
              backgroundColor: "transparent",
              color: cueColors.primary,
              border: "1px solid #2E2E2E",
              borderRadius: 0,
              textTransform: "uppercase",
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: "11px",
              fontWeight: 500,
              letterSpacing: "0.05em",
              "&:hover": {
                backgroundColor: cueColors.primary,
                color: "#000000",
              },
              display: "flex",
            }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                color: "inherit",
              }}
            >
              {iconMap[opt.iconType]}
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "11px",
                  fontWeight: 500,
                  color: "inherit",
                }}
              >
                {opt.label}
              </Typography>
            </Box>
            <DownloadIcon sx={{ fontSize: "16px", color: "inherit" }} />
          </Button>
        ))}
      </Box>
    </AdminCard>
  );
}
