import { Grid } from "@mui/material";
import MyActivity from "./MyActivity";
import Permission from "./Permission";

export default function AuditAndPermission() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <MyActivity />
      </Grid>
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Permission />
      </Grid>
    </Grid>
  );
}
