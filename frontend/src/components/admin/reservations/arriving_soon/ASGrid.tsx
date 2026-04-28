import { Box, Grid } from "@mui/material";
import ASCard from "./ASCard";

export default function ASGrid() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ASCard />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ASCard />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ASCard />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ASCard />
      </Grid>
    </Grid>
  );
}
