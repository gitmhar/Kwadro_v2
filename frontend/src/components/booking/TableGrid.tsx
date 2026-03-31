import { Grid } from "@mui/material";
import TableCard from "./TableCard";

export default function TableGrid({
  onOpenModal,
}: {
  onOpenModal: (num: number) => void;
}) {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Grid
      container
      spacing={3}
      sx={{
        width: "100%",
        margin: 0,
        justifyContent: { xs: "center", sm: "flex-start" },
      }}
    >
      {tables.map((num) => (
        <Grid
          size={{ xs: 12, sm: 6, md: 4, lg: 3 }}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <TableCard key={num} tableNumber={num} onBookClick={() => onOpenModal(num)} />
        </Grid>
      ))}
    </Grid>
  );
}
