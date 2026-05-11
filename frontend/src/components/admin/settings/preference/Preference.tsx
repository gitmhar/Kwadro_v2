import { Box, Grid, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { Tune } from "@mui/icons-material";
import InterfaceSetting from "./Interface";
import NotificationSettings from "./NotificationsSetting";
import BehaviorSettings from "./BehaviorSettings";

export default function Preferences() {
  return (
    <AdminCard sx={{ p: 4, borderRadius: "24px" }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <Tune sx={{ fontSize: 24, color: "#1a1c1c" }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#1a1c1c", lineHeight: 1 }}
        >
          Preferences
        </Typography>
      </Box>
      <Grid container spacing={5}>
        <Grid size={{ xs: 12, sm: 4 }}>
          <InterfaceSetting />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <NotificationSettings />
        </Grid>
        <Grid size={{ xs: 12, sm: 4 }}>
          <BehaviorSettings />
        </Grid>
      </Grid>
    </AdminCard>
  );
}
