import { Box, Stack, Typography } from "@mui/material";
import BaseCard from "../ui/BaseCard";
import InfoRow from "./InfoRow";


export default function GuestInformation({ data }: { data: any }) {
  return (
    <BaseCard sx={{ p: 4 }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Box>
          <Typography variant="h6">Guest Information</Typography>
        </Box>
      </Box>
      <Stack spacing={3}>
        <Stack direction="row" spacing={10}>
          <Box sx={{ minWidth: "150px" }}>
            <InfoRow label="Name" value={data.name} />
          </Box>
          <Box>
            <InfoRow label="Attendees" value={`${data.attendees} Players`} />
          </Box>
        </Stack>
        <Box>
          <InfoRow label="Contact Details" value={data.email} />
          <InfoRow label={""} value={`(+63) ${data.contact}`} />
        </Box>
      </Stack>
    </BaseCard>
  );
}
