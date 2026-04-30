import { Box, Grid } from "@mui/material";
import AccountDetails from "./AccDetails";
import ChangePassword from "./ChangePassword";

export default function AccountSettings() {
  return (
    <Grid container spacing={3}>
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <AccountDetails />
      </Grid>
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <ChangePassword />
      </Grid>
    </Grid>
  );
}
