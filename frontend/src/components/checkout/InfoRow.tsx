import { Stack, Typography } from "@mui/material";

export default function InfoRow({
  label,
  value,
}: {
  label: string;
  value: any;
}) {
  return (
    <Stack>
      <Typography
        variant="body1"
        component="p"
        color="text.secondary"
        fontWeight="semibold"
      >
        {label}
      </Typography>
      <Typography variant="body1" component="span">
        {value}
      </Typography>
    </Stack>
  );
}
