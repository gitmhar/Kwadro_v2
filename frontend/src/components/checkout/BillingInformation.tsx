import { Stack, Typography } from "@mui/material";
import InfoRow from "./shared/InfoRow";
import { formatFullReservationTime } from "../../utils/booking/dateUtils";

export default function BillingInformation({ data }: { data: any }) {
  const { dateDisplay, timeRange } = formatFullReservationTime(
    data.startTime,
    data.duration,
  );

  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
        Billing Information
      </Typography>
      <InfoRow
        label="Reservation Date and Time"
        value={`${dateDisplay} | ${timeRange}`}
      />
      <InfoRow label="Biller's Name" value={data.name} />
      <InfoRow label="Biller's Email" value={data.email} />
      <InfoRow label="Biller's Contact Number" value={data.contact} />
      <InfoRow label="Number of Attendees" value={data.attendees} />
    </Stack>
  );
}
