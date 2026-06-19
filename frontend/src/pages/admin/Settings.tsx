import { Box, Typography } from "@mui/material";
import AccountSettings from "../../components/admin/settings/account/AccountSettings";
import Preferences from "../../components/admin/settings/preference/Preference";
import AuditAndPermission from "../../components/admin/settings/permissions/AuditAndPermission";
import SectionHeader from "../../components/ui/shared/SectionHeader";

export default function Settings() {
  return (
    <Box
      sx={{
        maxWidth: "1450px",
        width: "100%",
        mx: "auto",
        px: { xs: 1, sm: 2, lg: 0 },
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <SectionHeader
        variant="admin"
        titleFirst
        title="Settings"
        textVariant="h3"
        subtitle="Manage your account and preferences"
        subtitleSx={{
          letterSpacing: "none",
          textTransform: "none",
          fontWeight: 500,
          fontSize: { xs: "1rem", sm: "1.2rem" },
        }}
      />
      
      <Box sx={{ mt: { xs: 2, sm: 3 }, width: "100%", overflow: "hidden" }}>
        <AccountSettings />
      </Box>
      <Box sx={{ my: { xs: 3, sm: 4 }, width: "100%", overflow: "hidden" }}>
        <Preferences />
      </Box>
      <Box sx={{ my: { xs: 3, sm: 4 }, width: "100%", overflow: "hidden" }}>
        <AuditAndPermission />
      </Box>
    </Box>
  );
}
