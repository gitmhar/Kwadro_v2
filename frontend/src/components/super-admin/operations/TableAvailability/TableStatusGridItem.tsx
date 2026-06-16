import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";

type TableStatus = "AVAILABLE" | "OFFLINE" | "MAINTENANCE";

interface TableOverride {
  id: string;
  status: TableStatus;
}

interface TableStatusGridItemProps {
  table: TableOverride;
  onClick: (id: string) => void;
}

export default function TableStatusGridItem({
  table,
  onClick,
}: TableStatusGridItemProps) {
  const isOffline = table.status === "OFFLINE";
  const isMaintenance = table.status === "MAINTENANCE";

  const statusColor = isMaintenance ? cueColors.error : cueColors.primary;
  const statusBg = isOffline ? cueColors.surfaceBright : statusColor;
  const statusBorder = isOffline
    ? `1px solid ${cueColors.outlineVariant}`
    : "none";

  return (
    <Box
      onClick={() => onClick(table.id)}
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
}
