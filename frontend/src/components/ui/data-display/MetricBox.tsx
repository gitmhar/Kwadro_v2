import { Box, Typography } from "@mui/material";

interface MetricBoxProps {
  label: string;
  value: string | number;
}

export default function MetricBox({ label, value }: MetricBoxProps) {
  return (
    <Box
      sx={{
        bgcolor: "#f5f5f5",
        p: { xs: 3, md: 5 },
        borderRadius: 3,
        textAlign: "center",
        minWidth: 110,
        flexGrow: { xs: 1, sm: 0 },
      }}
    >
      <Typography
        variant="caption"
        sx={{ display: "block", fontWeight: 700, color: "#666", mb: 0.5 }}
      >
        {label}
      </Typography>
      <Typography variant="h5" sx={{ fontWeight: 700 }}>
        {value}
      </Typography>
    </Box>
  );
}
