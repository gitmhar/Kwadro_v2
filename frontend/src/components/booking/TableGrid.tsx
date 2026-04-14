import { Grid } from "@mui/material";
import TableCard from "./TableCard";
import { isTableOccupied } from "../../utils/booking/tableStatus";
import { useActiveReservation } from "../../hooks/useActiveReservations";
import { calculateRemainingTime } from "../../utils/booking/dateUtils";

export default function TableGrid({
  onOpenModal,
}: {
  onOpenModal: (num: number) => void;
}) {
  const { activeReservations, currentTime } = useActiveReservation();
  const tables = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        margin: 0,
        justifyContent: { xs: "center", sm: "flex-start", md: "center" },
      }}
    >
      {tables.map((num) => {
        const currentBooking = isTableOccupied(
          num,
          activeReservations,
          currentTime,
        );
        const isOccupied = !!currentBooking;
        let timeLeft = "";
        if (currentBooking) {
          timeLeft = calculateRemainingTime(currentBooking.endTime);
        }
        // const tableReservations = activeReservations.filter(
        //   (r) => r.tableNumber === num,
        // );
        // const nextSlot = getNextAvailableSlot(
        //   tableReservations,
        //   isOccupied,
        //   currentBooking,
        // );
        return (
          <Grid
            size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
            sx={{ display: "flex", justifyContent: "center" }}
          >
            <TableCard
              key={num}
              tableNumber={num}
              onBookClick={() => onOpenModal(num)}
              isOccupied={isOccupied}
              remainingTime={timeLeft}
            />
          </Grid>
        );
      })}
    </Grid>
  );
}
