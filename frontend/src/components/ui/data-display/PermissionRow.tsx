import { Box, Typography } from "@mui/material";

interface PermissionRowProps {
  label: string;
  status?: string;
  statusBg?: string;
  statusColor?: string;
}

export default function PermissionRow({
  label,
  status = "Enabled",
  statusBg = "#262626",
  statusColor = "#FFFFFF",
}: PermissionRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        borderBottom: "1px solid #262626",
        pb: 1,
      }}
    >
      <Typography sx={{ color: "#fff" }}>{label}</Typography>
      <Box
        sx={{
          borderRadius: 1,
          bgcolor: statusBg,
          color: statusColor,
          fontSize: "0.8rem",
          px: 0.9,
          py: 0.2,
        }}
      >
        {status}
      </Box>
    </Box>
  );
}
