import { Box, Typography } from "@mui/material";

interface SettingsSectionLabelProps {
  label: string;
}

export default function SettingsSectionLabel({
  label,
}: SettingsSectionLabelProps) {
  return (
    <Box sx={{ borderBottom: "1px solid #F0F0F0", pb: 1 }}>
      <Typography
        variant="caption"
        sx={{
          fontSize: "0.85rem",
          fontWeight: 700,
          color: "#A3A3A3",
          textTransform: "uppercase",
          letterSpacing: 2,
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
