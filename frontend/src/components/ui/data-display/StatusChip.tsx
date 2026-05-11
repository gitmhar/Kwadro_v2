import { Box, Typography } from "@mui/material";

interface StatusChipProps {
  label: string;
  bg: string;
  color: string;
}

export default function StatusChip({ label, bg, color }: StatusChipProps) {
  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        gap: 0.5,
        mt: 0.5,
        px: 1,
        py: 0.2,
        bgcolor: bg,
        color,
        borderRadius: "6px",
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "0.65rem",
          letterSpacing: 0.5,
        }}
      >
        {label.toUpperCase()}
      </Typography>
    </Box>
  );
}
