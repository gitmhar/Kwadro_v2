import { Grid } from "@mui/material";
import ABCard from "./ABCard";

export default function ABGrid() {
  const active_bookings = [1, 2, 3, 4, 5, 6];
  return (
    <Grid container spacing={3}>
      {active_bookings.map((ab) => (
        <Grid key={ab} size={{ xs: 12, md: 6, lg: 4 }}>
          <ABCard />
        </Grid>
      ))}
    </Grid>
  );
}
