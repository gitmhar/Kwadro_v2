import { Box, Grid } from "@mui/material";
import ASCard from "./ASCard";

export default function ASGrid() {
  const arriving_soon = [1, 2, 3, 4, 5, 6];
  return (
    <Grid container spacing={3}>
      {arriving_soon.map((as) => (
        <Grid key={as} size={{ xs: 12, md: 6, lg: 4 }}>
          <ASCard />
        </Grid>
      ))}
    </Grid>
  );
}
