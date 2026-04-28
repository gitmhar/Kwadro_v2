import { Grid } from "@mui/material";
import ABCards from "./ABCard";

export default function ABGrid() {
  return (
    <Grid container spacing={2}>
      <Grid size={{ xs: 12, md: 6 }}>
        <ABCards />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ABCards />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ABCards />
      </Grid>
      <Grid size={{ xs: 12, md: 6 }}>
        <ABCards />
      </Grid>
    </Grid>
  );
}
