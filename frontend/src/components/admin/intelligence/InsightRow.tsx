import { Box, Typography } from "@mui/material";

interface InsightRowProps {
  label: string;
  value: any;
  valueColor?: string;
}

export default function InsightRow({
  label,
  value,
  valueColor = "#000",
}: InsightRowProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Typography sx={{ color: "#777", fontSize: "0.9rem", fontWeight: 500 }}>
        {label}
      </Typography>
      <Typography
        sx={{ color: valueColor, fontSize: "0.9rem", fontWeight: 600 }}
      >
        {value}
      </Typography>
    </Box>
  );
}
