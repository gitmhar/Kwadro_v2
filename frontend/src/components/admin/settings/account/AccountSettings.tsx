import { Grid, Stack } from "@mui/material";
import AccountDetails from "./AccDetails";
import ChangePassword from "./ChangePassword";

export default function AccountSettings() {
  return (
    <Grid container spacing={3}>
      {/* Profile & Account Info */}
      <Grid size={{ xs: 12, md: 7, lg: 8 }}>
        <Stack spacing={3}>
          <AccountDetails />
        </Stack>
      </Grid>
      {/* Security Settings */}
      <Grid size={{ xs: 12, md: 5, lg: 4 }}>
        <Stack spacing={3}>
          <ChangePassword />
        </Stack>
      </Grid>
    </Grid>
  );
}
