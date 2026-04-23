import { Box } from "@mui/material";
import TableMonitorCard from "./TableMonitorCard";

export default function TableMonitorGrid() {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: {
          xs: "repeat(2, 1fr)",
          sm: "repeat(3, 1fr)",
          md: "repeat(4, 1fr)",
          lg: "repeat(6, 1fr)",
        },
        gap: 2,
      }}
    >
      {tables.map((num) => (
        <TableMonitorCard key={num} tableNumber={num} />
      ))}
    </Box>
  );
}
