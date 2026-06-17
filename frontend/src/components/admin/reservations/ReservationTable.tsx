import { Stack, useMediaQuery, useTheme } from "@mui/material";
import type { ReservationRow } from "../../../types/reservationRow";
import ReservationMobileCard from "./shared/ReservationMobileCard";
import ReservationDesktopTable from "./shared/ReservationDesktopTable";

const reservationsData: ReservationRow[] = [
  {
    id: "1",
    client: "Client 1",
    membershipType: "Elite Member",
    table: "Table 03",
    schedule: "04-25-2026",
  },
  {
    id: "2",
    client: "Client 2",
    membershipType: "VIP",
    table: "Table 02",
    schedule: "04-25-2026",
  },
  {
    id: "3",
    client: "Client 3",
    membershipType: "Walk-in",
    table: "Table 01",
    schedule: "04-25-2026",
  },
  {
    id: "4",
    client: "Client 4",
    membershipType: "VIP",
    table: "Table 05",
    schedule: "04-25-2026",
  },
  {
    id: "5",
    client: "Client 5",
    membershipType: "Standard",
    table: "Table 04",
    schedule: "04-25-2026",
  },
  {
    id: "6",
    client: "Client 6",
    membershipType: "Standard",
    table: "Table 02",
    schedule: "06-25-2026",
  },
  {
    id: "7",
    client: "Client 7",
    membershipType: "Standard",
    table: "Table 07",
    schedule: "05-22-2026",
  },
  {
    id: "8",
    client: "Client 8",
    membershipType: "Standard",
    table: "Table 01",
    schedule: "05-21-2026",
  },
];

export default function ReservationList() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  const handleDelete = (id: string) => {
    console.log("Deleted", id);
  };

  if (isMobile) {
    return (
      <Stack spacing={2}>
        {reservationsData.map((reservation) => (
          <ReservationMobileCard
            key={reservation.id}
            reservation={reservation}
            onDelete={handleDelete}
          />
        ))}
      </Stack>
    );
  }

  return (
    <ReservationDesktopTable
      reservations={reservationsData}
      onDelete={handleDelete}
    />
  );
}
