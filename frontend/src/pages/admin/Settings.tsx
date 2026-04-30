import { Box, Typography } from "@mui/material";
import AccountSettings from "../../components/admin/settings/account/AccountSettings";
import Preferences from "../../components/admin/settings/preference/Preference";
import AuditAndPermission from "../../components/admin/settings/activity&permission/AuditAndPermission";

export default function Settings() {
  return (
    <Box sx={{ maxWidth: "1150px", width: "100%", mx: "auto" }}>
      <Typography variant="h3" sx={{ fontWeight: 600 }}>
        Settings
      </Typography>
      <Typography
        variant="subtitle1"
        sx={{ fontWeight: 500, fontSize: "1.2rem", color: "#474747" }}
      >
        Manage your account and preferences
      </Typography>
      <Box sx={{ mt: 3 }}>
        <AccountSettings />
      </Box>
      <Box sx={{ my: 4 }}>
        <Preferences />
      </Box>
      <Box sx={{ my: 4 }}>
        <AuditAndPermission />
      </Box>
    </Box>
  );
}
