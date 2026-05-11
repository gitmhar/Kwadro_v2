import { Box, Typography } from "@mui/material";

export default function SummaryRow({
  label,
  value,
  bold,
  large,
}: {
  label: string;
  value: any;
  bold: boolean;
  large: boolean;
}) {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      <Typography
        variant={large ? "h6" : "body1"}
        component={large ? "h3" : "p"}
        color={large ? "text.primary" : "text.secondary"}
        fontWeight={bold ? 600 : 400}
      >
        {label}
      </Typography>
      <Typography
        variant={large ? "h6" : "body1"}
        component="span"
        color={large ? "text.primary" : "text.secondary"}
        fontWeight={bold ? 600 : 400}
      >
        {value}
      </Typography>
    </Box>
  );
}
