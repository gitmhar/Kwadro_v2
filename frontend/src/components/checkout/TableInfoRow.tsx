import { Box, Stack, Typography } from "@mui/material";

interface TableInfoProps {
  icon: any;
  label: string;
  value: string;
}

export default function TableInfo({ icon, label, value }: TableInfoProps) {
  return (
    <Stack direction="row" spacing={1.5} alignItems="center">
      {icon}
      <Box>
        <Typography
          variant="caption"
          sx={{ color: "#888", display: "block", lineHeight: 1 }}
        >
          {label}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: "bold", color: "#fff" }}>
          {value}
        </Typography>
      </Box>
    </Stack>
  );
}
