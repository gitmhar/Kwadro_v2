import { Box, Chip, Stack, Typography } from "@mui/material";
import BaseCard from "../ui/BaseCard";
import TableInfo from "./TableInfoRow";
import { AccessTime, CalendarToday } from "@mui/icons-material";
import { formatFullReservationTime } from "../../utils/booking/dateUtils";

interface StatusStyle {
  label: string;
  color: string;
  bg: string;
}

export default function TableInformation({ data }: { data: any }) {
  const { dateDisplay, timeRange } = formatFullReservationTime(
    data.startTime,
    data.duration,
  );

  const currentStatus = data?.status?.toUpperCase() || "PENDING";

  const statusConfig: Record<string, StatusStyle> = {
    PAID: {
      label: "COMPLETED",
      color: "#2cf37d",
      bg: "rgba(44, 243, 125, 0.1)",
    },
    PENDING: {
      label: "PENDING",
      color: "#ff9800",
      bg: "rgba(255, 152, 0, 0.1)",
    },
    ERROR: { label: "FAILED", color: "#f44336", bg: "rgba(244, 67, 54, 0.1)" },
  };

  const config = statusConfig[currentStatus] || statusConfig.PENDING;

  console.log("Current Status from DB:", data?.status);
  console.log("Calculated Config Label:", config.label);

  return (
    <BaseCard sx={{ borderLeft: "5px solid #2cf37d" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <Box>
          <Typography
            variant="body2"
            component="p"
            sx={{
              fontWeight: "bold",
              textTransform: "uppercase",
              color: "text.primary",
            }}
          >
            Reservation
          </Typography>
          <Typography
            variant="h4"
            sx={{
              fontWeight: "bold",
              fontSize: { xs: "1.2rem", sm: "1.5rem", md: "2rem" },
            }}
          >
            Table 01
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: "#9c9c9c",
              fontWeight: "bold",
              letterSpacing: 1,
              fontSize: { xs: "0.6rem", sm: "0.7rem" },
            }}
          >
            STANDARD 9FT
          </Typography>
        </Box>
        <Chip
          label={config.label}
          size="small"
          sx={{
            bgcolor: config.bg,
            color: config.color,
            fontWeight: "bold",
            borderRadius: 2,
            fontSize: "0.7rem",
            transition: "all 0.3s ease",
          }}
        />
      </Box>
      <Stack direction="column" spacing={4}>
        <TableInfo
          icon={<CalendarToday sx={{ color: "#2cf37d", fontSize: 20 }} />}
          label="DATE"
          value={dateDisplay}
        />
        <TableInfo
          icon={<AccessTime sx={{ color: "#2cf37d", fontSize: 20 }} />}
          label="TIME"
          value={timeRange}
        />
      </Stack>
    </BaseCard>
  );
}
