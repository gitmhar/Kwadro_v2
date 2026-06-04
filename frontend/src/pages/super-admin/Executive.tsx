import { Box, Grid } from '@mui/material';
import KpiCardsSection from '../../components/super-admin/executive/KpiCardsSection';
import PeakOccupancyHeatmap from '../../components/super-admin/executive/PeakOccupancyHeatmap';
import HighRiskAlerts from '../../components/super-admin/executive/HighRiskAlerts';
import StaffActivitySnapshot from '../../components/super-admin/executive/StaffActivitySnapshot';

export default function Executive() {
  return (
    <Box
      sx={{
        width: '100%',
        maxWidth: '100%',
        boxSizing: 'border-box',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        pb: '40px',
        overflowX: 'hidden',
      }}
    >
      {/* SECTION 1: KPI Summary cards */}
      <KpiCardsSection />

      {/* SECTION 2: Heatmap & Alerts 70/30 layout */}
      <Grid container spacing={2} sx={{ mb: '16px' }}>
        <Grid size={{ xs: 12, lg: 8 }}>
          <PeakOccupancyHeatmap />
        </Grid>
        <Grid size={{ xs: 12, lg: 4 }}>
          <HighRiskAlerts />
        </Grid>
      </Grid>

      {/* SECTION 3: Timeline Snapshot */}
      <StaffActivitySnapshot />
    </Box>
  );
}