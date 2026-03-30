import { Stack, Typography } from "@mui/material";
import InfoRow from "./InfoRow";

export default function BillingInformation() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
        Billing Information
      </Typography>
      <InfoRow
        label="Reservation Date and Time"
        value="2026-03-26 | 02:00 PM - 03:00 PM"
      />
      <InfoRow label="Biller's Name" value="Johnny Bravado" />
      <InfoRow label="Biller's Email" value="j0hnmh4r23@gmail.com" />
      <InfoRow label="Biller's Contact Number" value="09123456789" />
      <InfoRow label="Number of Attendees" value="10 persons" />
    </Stack>
  );
}
