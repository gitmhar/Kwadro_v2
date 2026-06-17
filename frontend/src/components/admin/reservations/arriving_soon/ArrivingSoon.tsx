import { Box, Button, Typography } from "@mui/material";
import SectionHeader from "../../../ui/shared/SectionHeader";
import ReservationCardGrid from "../shared/ReservationCardGrid";
import UserIdentity from "../../../ui/data-display/UserIdentity";

interface ArrivingSoonBooking {
  id: string;
  guestName: string;
  subtitle: string;
  eta: string;
}

const arrivingSoonData: ArrivingSoonBooking[] = [
  {
    id: "as-1",
    guestName: "Julian Schmidt",
    subtitle: "TABLE 14 • 4 GUESTS",
    eta: "In 15 Min",
  },
  {
    id: "as-2",
    guestName: "Amara Osei",
    subtitle: "TABLE 03 • 2 GUESTS",
    eta: "In 20 Min",
  },
  {
    id: "as-3",
    guestName: "Hugo Bellamy",
    subtitle: "TABLE 09 • 6 GUESTS",
    eta: "In 25 Min",
  },
  {
    id: "as-4",
    guestName: "Sakura Tanaka",
    subtitle: "TABLE 01 • 3 GUESTS",
    eta: "In 30 Min",
  },
  {
    id: "as-5",
    guestName: "Liam Foster",
    subtitle: "TABLE 06 • 2 GUESTS",
    eta: "In 30 Min",
  },
  {
    id: "as-6",
    guestName: "Priya Kapoor",
    subtitle: "TABLE 12 • 5 GUESTS",
    eta: "In 30 Min",
  },
];

export default function ArrivingSoon() {
  const handleConfirmArrival = (id: string) => {
    console.log("Confirm Arrival", id);
  };
  const handleReleaseTable = (id: string) => {
    console.log("Confirm Arrival", id);
  };

  return (
    <Box>
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <SectionHeader
          variant="admin"
          title="Arriving Soon"
          subtitle="Immediate operational priorities"
          titleFirst
        />
        {/* <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Arriving Soon
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            color: "#777",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Immediate operational priorities
        </Typography> */}
      </Box>
      <ReservationCardGrid
        data={arrivingSoonData}
        renderCard={(booking: any) => ({
          left: (
            <UserIdentity
              name={booking.guestName}
              subtitle={booking.subtitle}
            />
          ),
          right: (
            <Box
              sx={{
                bgcolor: "#f3f3f3",
                color: "#1a1c1c",
                px: 1.2,
                py: 0.6,
                borderRadius: "20px",
                fontSize: { xs: "0.65rem", sm: "0.75rem" },
                fontWeight: 800,
                textTransform: "uppercase",
                letterSpacing: "0.5px",
                textAlign: "center",
              }}
            >
              {booking.eta}
            </Box>
          ),
          bottom: (
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", sm: "row" },
                gap: 1.5,
              }}
            >
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  color: "#e2e2e2",
                  borderRadius: "12px",
                  py: { xs: 1.2, sm: 1.4 },
                  fontWeight: 700,
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#262626", boxShadow: "none" },
                }}
              >
                Confirm Arrival
              </Button>
              <Button
                fullWidth
                variant="text"
                sx={{
                  bgcolor: "#f3f3f3",
                  color: "#474747",
                  borderColor: "#e0e0e0",
                  borderRadius: "12px",
                  py: { xs: 1.2, sm: 1.4 },
                  fontWeight: 700,
                  fontSize: { xs: "0.75rem", sm: "0.8rem" },
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": { bgcolor: "#f0f0f0", borderColor: "#ccc" },
                }}
              >
                Release Table
              </Button>
            </Box>
          ),
        })}
      />
    </Box>
  );
}
