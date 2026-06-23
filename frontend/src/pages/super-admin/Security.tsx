import { Box, Typography, Button, Grid } from '@mui/material';
import { cueColors } from '../../theme/dashboard/cueColors';
import MfaEnforcementCard from '../../components/super-admin/security/MfaEnforcementCard';
import ActiveSessionsCard from '../../components/super-admin/security/ActiveSessionsCard';
import IpBlacklistCard from '../../components/super-admin/security/IpBlacklistCard';
import LoginAttemptMonitoring from '../../components/super-admin/security/LoginAttemptMonitoring';
import EscalationLogs from '../../components/super-admin/security/EscalationLogs';
import RolePermissionMatrix from '../../components/super-admin/security/RolePermissionMatrix';
import AuditTimeline from '../../components/super-admin/security/AuditTimeline';

export default function Security() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        pb: '40px',
        overflowX: 'hidden',
      }}
    >
      {/* Header Section */}
      <Box
        sx={{
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          justifyContent: 'space-between',
          alignItems: { xs: 'flex-start', md: 'flex-end' },
          gap: '16px',
          mb: '8px',
        }}
      >
        <Box>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.6875rem',
              fontWeight: 500,
              letterSpacing: '0.05em',
              color: cueColors.primary,
              opacity: 0.6,
              textTransform: 'uppercase',
              mb: '4px',
            }}
          >
            Super Admin
          </Typography>
          <Typography
            sx={{
              fontFamily: '"Inter", sans-serif',
              fontSize: '2rem',
              fontWeight: 700,
              letterSpacing: '-0.02em',
              textTransform: 'uppercase',
              color: cueColors.primary,
            }}
          >
            Command Center
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: '12px', width: { xs: '100%', sm: 'auto' } }}>
          <Button
            variant="contained"
            onClick={() => alert('Exporting PDF Audit...')}
            sx={{
              flex: { xs: 1, sm: 'none' },
              backgroundColor: cueColors.primary,
              color: cueColors.background,
              borderRadius: 0,
              px: '24px',
              py: '8px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              boxShadow: 'none',
              '&:hover': {
                backgroundColor: cueColors.primary,
                opacity: 0.9,
                boxShadow: 'none',
              },
            }}
          >
            EXPORT REPORT
          </Button>
        </Box>
      </Box>

      {/* Main Grid Layout */}
      <Grid
        container
        spacing={3}
        columns={12}
        sx={{
          maxWidth: '1600px',
          width: '100%',
          boxSizing: 'border-box',
        }}
      >
        {/* ROW 1: System Health & MFA Status (4-4-4) */}
        <Grid size={{ xs: 12, md: 4 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <MfaEnforcementCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <ActiveSessionsCard />
        </Grid>
        <Grid size={{ xs: 12, md: 4 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <IpBlacklistCard />
        </Grid>

        {/* ROW 2: Login Attempt Monitoring (8) and Escalation Logs (4) */}
        <Grid size={{ xs: 12, lg: 8 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <LoginAttemptMonitoring />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <EscalationLogs />
        </Grid>

        {/* ROW 3: Role Permission Matrix (12) */}
        <Grid size={{ xs: 12 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <RolePermissionMatrix />
        </Grid>

        {/* ROW 4: System Audit Timeline (12) */}
        <Grid size={{ xs: 12 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <AuditTimeline />
        </Grid>
      </Grid>
    </Box>
  );
}
