import { Avatar, Box, Button, Typography } from "@mui/material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import ReservationCardGrid from "../shared/ReservationCardGrid";

interface ActiveBooking {
  id: string;
  tableLabel: string;
  guestName: string;
  duration: string;
}

const activeBookingsData: ActiveBooking[] = [
  {
    id: "ab-1",
    tableLabel: "Table 08",
    guestName: "Alexander Sterling",
    duration: "42:15",
  },
  {
    id: "ab-2",
    tableLabel: "Table 04",
    guestName: "Maria Gonzalez",
    duration: "18:30",
  },
  {
    id: "ab-3",
    tableLabel: "Table 12",
    guestName: "James Chen",
    duration: "55:00",
  },
  {
    id: "ab-4",
    tableLabel: "Table 02",
    guestName: "Sarah Kim",
    duration: "33:45",
  },
  {
    id: "ab-5",
    tableLabel: "Table 07",
    guestName: "David Park",
    duration: "27:10",
  },
  {
    id: "ab-6",
    tableLabel: "Table 11",
    guestName: "Emily Watson",
    duration: "41:20",
  },
];

export default function ActiveBookings() {
  const handleEndSession = (id: string) => {
    console.log("End session:", id);
  };

  return (
    <Box>
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <SectionHeader title="Active Bookings" subtitle="Currently Occupied" />
      </Box>
      <ReservationCardGrid
        data={activeBookingsData}
        renderCard={(booking: any) => ({
          left: (
            <Box>
              <Typography
                sx={{
                  color: "#a3a3a3",
                  fontSize: "0.75rem",
                  letterSpacing: 1,
                  textTransform: "uppercase",
                  fontWeight: 600,
                  mb: 0.5,
                }}
              >
                {booking.tableLabel}
              </Typography>
              <Typography
                sx={{
                  fontWeight: 800,
                  color: "#1a1c1e",
                  fontSize: { xs: "1rem", sm: "1.4rem" },
                  lineHeight: 1,
                }}
              >
                {booking.guestName}
              </Typography>
            </Box>
          ),
          right: (
            <Box sx={{ textAlign: "right" }}>
              <Typography
                sx={{
                  color: "#a3a3a3",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  textTransform: "uppercase",
                  letterSpacing: 1,
                }}
              >
                Duration
              </Typography>
              <Typography
                sx={{
                  color: "#1a1c1c",
                  fontWeight: 800,
                  fontSize: { xs: "1rem", sm: "1.1rem" },
                }}
              >
                {booking.duration}
              </Typography>
            </Box>
          ),
          bottom: (
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <Box sx={{ display: "flex", ml: 0.5 }}>
                <Avatar
                  sx={{
                    width: 34,
                    height: 34,
                    bgcolor: "#f0f0f0",
                    border: "2px solid #fff",
                  }}
                />
                <Avatar
                  sx={{
                    width: 32,
                    height: 32,
                    bgcolor: "#e0e0e0",
                    border: "2px solid #fff",
                    ml: -1,
                  }}
                />
              </Box>
              <Button
                variant="contained"
                onClick={() => handleEndSession(booking.id)}
                sx={{
                  bgcolor: "#000",
                  color: "#e2e2e2",
                  borderRadius: "12px",
                  py: 1.2,
                  px: 2.5,
                  fontWeight: 700,
                  fontSize: "0.85rem",
                  whiteSpace: "nowrap",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#262626", boxShadow: "none" },
                }}
              >
                End Session
              </Button>
            </Box>
          ),
        })}
      />
    </Box>
  );
}
