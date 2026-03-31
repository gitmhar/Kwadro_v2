import { useState } from "react";
import { useBusySlots } from "../../hooks/useBusySlots";
import { useActiveReservation } from "../../hooks/useActiveReservations";
import { getOperatingHours } from "../../utils/booking/operatingHours";
import { isTableOccupied } from "../../utils/booking/tableStatus";
import { Container, Grid, Typography } from "@mui/material";
import TableGrid from "../../components/booking/TableGrid";
import BookingModal from "../../components/booking/BookingModal";

export default function Reservation() {
  const [open, setOpen] = useState(false);
  const [selectedTable, setSelectedTable] = useState<number | null>(null);
  const handleOpen = (tableNum: number) => {
    setOpen(true);
    setSelectedTable(tableNum);
  };
  const handleClose = () => setOpen(false);
  return (
    <Container maxWidth="xl" sx={{ py: 4 }}>
      <Typography
        variant="body1"
        sx={{
          color: "text.primary",
          mb: 1,
          textTransform: "uppercase",
          fontWeight: 700,
          letterSpacing: "0.5px",
        }}
      >
        Premium Lounge
      </Typography>
      <Typography
        variant="h3"
        component="h1"
        sx={{ fontWeight: 600, color: "#fff", mb: 4 }}
      >
        Book a Pool Table
      </Typography>
      <Grid container spacing={3} sx={{ mt: 2 }}>
        <TableGrid onOpenModal={handleOpen} />
      </Grid>
      {/* Modal */}
      <BookingModal open={open} handleClose={handleClose} tableNumber={selectedTable}/>
    </Container>
  );
}
