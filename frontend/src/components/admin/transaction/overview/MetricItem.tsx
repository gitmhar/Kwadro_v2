import { Box, Typography } from "@mui/material";

interface MetricItemProps {
  label: string;
  value: any;
}

export default function MetricItem({ label, value }: MetricItemProps) {
  return (
    <Box>
      <Typography
        variant="caption"
        sx={{
          color: "#a3a3a3",
          textTransform: "uppercase",
          letterSpacing: 1.2,
          fontWeight: 600,
          display: "block",
          mb: 0.5,
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h6"
        sx={{ fontWeight: 600, color: "#1a1c1c", fontSize: "1.1rem" }}
      >
        {value}
      </Typography>
    </Box>
  );
}
