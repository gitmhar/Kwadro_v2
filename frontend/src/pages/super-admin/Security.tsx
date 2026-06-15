import { Box, Grid } from "@mui/material";
import MfaEnforcementCard from "../../components/super-admin/security/MfaEnforcementCard";
import ActiveSessionsCard from "../../components/super-admin/security/ActiveSessionsCard";
import IpBlacklistCard from "../../components/super-admin/security/IpBlacklistCard";
import LoginAttemptMonitoring from "../../components/super-admin/security/LoginAttemptMonitoring";

export default function Security() {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100%",
        boxSizing: "border-box",
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        pb: "40px",
        overflowX: "hidden",
      }}
    >
      {/* SECTION 1: KPI Summary cards */}
      <Grid container spacing={2}>
        <Grid size={{ xs: 12, md: 4 }}>
          <MfaEnforcementCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <ActiveSessionsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }}>
          <IpBlacklistCard />
        </Grid>
      </Grid>

      {/* SECTION 2: Login Attempt Table & Escalation Logs 70/30 layout */}
      <Grid
        container
        spacing={2}
        columns={10}
        sx={{
          mb: "16px",
          width: "100%",
          maxWidth: "100%",
          boxSizing: "border-box",
        }}
      >
        <Grid
          size={{ xs: 10, xl: 7 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        >
            <LoginAttemptMonitoring/>
        </Grid>
        <Grid
          size={{ xs: 10, xl: 3 }}
          sx={{ width: "100%", boxSizing: "border-box" }}
        ></Grid>
      </Grid>

      {/* SECTION 3: Timeline Snapshot */}
    </Box>
  );
}
