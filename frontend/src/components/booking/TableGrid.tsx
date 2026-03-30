import { Box, Container, Grid, Typography } from "@mui/material";
import TableCard from "./TableCard";

export default function TableGrid() {
  const tables = [1, 2, 3, 4, 5, 6, 7, 8];
  return (
    <Box sx={{ display: "flex" }}>
      <Container maxWidth="xl">
        <Typography variant="h2" component="h1" fontWeight={800}>
            Book a Pool Table
        </Typography>
        <Grid container spacing={3}>
          {tables.map((num) => (
            <Grid>
              <TableCard key={num} tableNumber={num}/>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
