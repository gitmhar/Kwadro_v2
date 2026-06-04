# Executive Tab Proposal: React + Material UI (MUI v7)

This proposal converts the HTML/Tailwind CSS design template in [executive_tab.md](file:///B:/Kwadro_v2/frontend/design-templates/executive_tab.md) into a high-fidelity, single-file React component using Material UI (MUI v7), following all rules and constraints specified in [AGENTS.md](file:///B:/Kwadro_v2/frontend/AGENTS.md).

> [!IMPORTANT]
> **No files in `/src` have been modified.** This proposed code is standalone and ready to be integrated into the appropriate workspace component/page (e.g., `src/pages/ExecutiveDashboard.tsx` or `src/components/ExecutiveTab.tsx`).

## 1. Font Setup Recommendation
For optimal visual fidelity, please add the following font imports to your [index.html](file:///B:/Kwadro_v2/frontend/index.html) `<head>` section:
```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@500&display=swap" rel="stylesheet"/>
```

---

## 2. Proposed Component Code

Save this snippet as a TSX file (e.g., `src/pages/ExecutiveDashboard.tsx`).

```tsx
import React, { useState } from 'react';
import {
  Box,
  Typography,
  Button,
  IconButton,
  Tooltip,
} from '@mui/material';
import Grid from '@mui/material/Grid2'; // Modern MUI v7 Grid implementation

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';
import PaymentsIcon from '@mui/icons-material/Payments';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import BadgeIcon from '@mui/icons-material/Badge';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import SensorsIcon from '@mui/icons-material/Sensors';

// Cue Control Design Palette
const cueColors = {
  background: '#121414',
  surface: '#121414',
  surfaceDim: '#121414',
  surfaceContainer: '#1f2020',
  surfaceContainerLow: '#1b1c1c',
  surfaceContainerLowest: '#0d0e0f',
  surfaceContainerHigh: '#292a2a',
  surfaceContainerHighest: '#343535',
  surfaceBright: '#383939',
  surfaceVariant: '#343535',
  primary: '#ffffff',
  onPrimary: '#2f3131',
  primaryContainer: '#e2e2e2',
  onPrimaryContainer: '#636565',
  secondary: '#c8c6c5',
  onSecondary: '#313030',
  secondaryContainer: '#474746',
  onSecondaryContainer: '#b7b5b4',
  tertiary: '#ffffff',
  onTertiary: '#303030',
  tertiaryContainer: '#e4e2e1',
  onTertiaryContainer: '#656464',
  error: '#ffb4ab',
  onError: '#690005',
  errorContainer: '#93000a',
  onErrorContainer: '#ffdad6',
  outline: '#8e9192',
  outlineVariant: '#444748',
  onSurface: '#e3e2e2',
  onSurfaceVariant: '#c4c7c8',
  inverseSurface: '#e3e2e2',
  inverseOnSurface: '#303031',
  inversePrimary: '#5d5f5f',
};

// Types & Interfaces
interface NavItem {
  label: string;
  icon: React.ComponentType<any>;
  active: boolean;
}

interface AlertItem {
  id: string;
  type: 'FAILED_PAYMENT' | 'ABUSE_DETECTION' | 'LATENCY_WARNING';
  time: string;
  message: string;
  buttonLabel: string;
}

interface StaffActivity {
  id: string;
  name: string;
  action: string;
  time: string;
  detail: string;
}

// 7x24 Occupancy Heatmap Data Matrix
const heatmapData: number[][] = [
  // MON
  [0.1, 0.05, 0.02, 0.02, 0.05, 0.1, 0.2, 0.3, 0.45, 0.5, 0.4, 0.55, 0.65, 0.7, 0.6, 0.5, 0.55, 0.75, 0.85, 0.9, 0.8, 0.6, 0.3, 0.15],
  // TUE
  [0.1, 0.05, 0.01, 0.01, 0.03, 0.08, 0.18, 0.35, 0.4, 0.45, 0.42, 0.5, 0.6, 0.65, 0.58, 0.52, 0.58, 0.7, 0.8, 0.85, 0.75, 0.55, 0.25, 0.1],
  // WED
  [0.08, 0.04, 0.01, 0.01, 0.04, 0.09, 0.2, 0.32, 0.42, 0.48, 0.45, 0.52, 0.62, 0.68, 0.6, 0.55, 0.6, 0.75, 0.82, 0.88, 0.78, 0.58, 0.28, 0.12],
  // THU
  [0.12, 0.06, 0.02, 0.01, 0.05, 0.12, 0.22, 0.38, 0.48, 0.52, 0.5, 0.58, 0.68, 0.72, 0.65, 0.6, 0.65, 0.8, 0.88, 0.92, 0.85, 0.65, 0.35, 0.18],
  // FRI
  [0.15, 0.08, 0.03, 0.02, 0.06, 0.15, 0.25, 0.42, 0.55, 0.6, 0.58, 0.65, 0.78, 0.85, 0.8, 0.75, 0.82, 0.95, 1.0, 0.98, 0.9, 0.75, 0.5, 0.25],
  // SAT
  [0.2, 0.12, 0.05, 0.03, 0.08, 0.18, 0.28, 0.48, 0.65, 0.75, 0.72, 0.8, 0.9, 0.95, 0.92, 0.88, 0.95, 1.0, 1.0, 0.98, 0.95, 0.85, 0.65, 0.35],
  // SUN
  [0.18, 0.1, 0.04, 0.02, 0.05, 0.12, 0.22, 0.35, 0.5, 0.58, 0.55, 0.62, 0.72, 0.8, 0.75, 0.7, 0.75, 0.85, 0.9, 0.92, 0.88, 0.72, 0.45, 0.2]
];

export default function ExecutiveDashboard() {
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Sidebar Menu Configuration
  const navItems: NavItem[] = [
    { label: 'Executive', icon: DashboardIcon, active: true },
    { label: 'Operations', icon: PrecisionManufacturingIcon, active: false },
    { label: 'Financial', icon: PaymentsIcon, active: false },
    { label: 'Intelligence', icon: AnalyticsIcon, active: false },
    { label: 'Security', icon: AdminPanelSettingsIcon, active: false },
    { label: 'Staff', icon: BadgeIcon, active: false },
    { label: 'System', icon: SettingsIcon, active: false },
    { label: 'Incidents', icon: ReportProblemIcon, active: false },
  ];

  // Alerts Dataset
  const alerts: AlertItem[] = [
    {
      id: 'alert-1',
      type: 'FAILED_PAYMENT',
      time: '14:02:11',
      message: 'Location NYC-04: Multiple card declines detected at Table 08 (Auth Timeout).',
      buttonLabel: 'INVESTIGATE',
    },
    {
      id: 'alert-2',
      type: 'ABUSE_DETECTION',
      time: '13:45:00',
      message: 'Systemic reservation cancellations from IP range: 192.168.1.XX. Bot pattern suspected.',
      buttonLabel: 'BLOCK_RANGE',
    },
    {
      id: 'alert-3',
      type: 'LATENCY_WARNING',
      time: '13:12:04',
      message: 'Database Read/Write latency exceeding 400ms in Central-Europe-1 cluster.',
      buttonLabel: 'VIEW_METRICS',
    },
  ];

  // Staff Timeline Activities
  const activities: StaffActivity[] = [
    {
      id: 'act-1',
      name: 'M. Chen',
      action: 'checked in',
      time: '08:45',
      detail: 'Location: HKG-Central',
    },
    {
      id: 'act-2',
      name: 'J. Smith',
      action: 'initiated table maintenance',
      time: '09:12',
      detail: 'Table: 12 | Status: Offline',
    },
    {
      id: 'act-3',
      name: 'L. Valenti',
      action: 'processed refund',
      time: '09:44',
      detail: 'Transaction ID: #99021-AX',
    },
    {
      id: 'act-4',
      name: 'A. Russo',
      action: 'Shift Leader Override',
      time: '10:05',
      detail: 'Action: POS Price Unlock',
    },
    {
      id: 'act-5',
      name: 'K. Tanaka',
      action: 'session terminated',
      time: '10:15',
      detail: 'Reason: Shift End | Location: TYO-Shibuya',
    },
  ];

  return (
    <Box sx={{ display: 'flex', backgroundColor: cueColors.background, minHeight: '100vh', color: cueColors.onSurface, overflowX: 'hidden' }}>
      
      {/* 1. SIDEBAR NAVIGATION */}
      <Box
        component="aside"
        sx={{
          position: 'fixed',
          left: 0,
          top: 0,
          height: '100vh',
          width: '260px',
          borderRight: `1px solid ${cueColors.outlineVariant}`,
          backgroundColor: cueColors.surface,
          display: { xs: 'none', md: 'flex' },
          flexDirection: 'column',
          py: '16px',
          zIndex: 1200,
        }}
      >
        {/* Sidebar Header */}
        <Box sx={{ px: '24px', mb: '40px' }}>
          <Typography
            variant="h1"
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              letterSpacing: '-0.05em',
              color: cueColors.primary,
              mb: '4px',
            }}
          >
            CUE CONTROL
          </Typography>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px',
              lineHeight: 1.2,
              letterSpacing: '0.05em',
              fontWeight: 500,
              opacity: 0.5,
              color: cueColors.primary,
            }}
          >
            SUPER ADMIN
          </Typography>
        </Box>

        {/* Sidebar Menu Items */}
        <Box component="nav" sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', gap: '4px' }}>
          {navItems.map((item) => {
            const Icon = item.icon;
            return (
              <Box
                key={item.label}
                component="a"
                href="#"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  px: '24px',
                  py: '12px',
                  borderLeft: item.active ? `4px solid ${cueColors.primary}` : '4px solid transparent',
                  backgroundColor: item.active ? cueColors.surfaceContainer : 'transparent',
                  color: item.active ? cueColors.primary : cueColors.onSurfaceVariant,
                  fontWeight: item.active ? 'bold' : 'normal',
                  opacity: item.active ? 1 : 0.7,
                  textDecoration: 'none',
                  transition: 'all 0.15s',
                  '&:hover': {
                    opacity: 1,
                    backgroundColor: item.active ? cueColors.surfaceContainer : cueColors.surfaceContainerHigh,
                  },
                }}
              >
                <Icon sx={{ mr: '12px', fontSize: '20px' }} />
                <Typography
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '11px',
                    lineHeight: 1.2,
                    letterSpacing: '0.05em',
                    fontWeight: 500,
                  }}
                >
                  {item.label}
                </Typography>
              </Box>
            );
          })}
        </Box>

        {/* Sidebar Footer */}
        <Box sx={{ px: '24px', pt: '24px', mt: 'auto', borderTop: `1px solid ${cueColors.outlineVariant}` }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Box
              component="img"
              alt="Super Admin Avatar"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBn1kuqmwIKqQnDIyVz7hTJzMMpNhFBN_VTx-YhFQaBn79Sg03GV86jgf1YzU4T-AVIzCE4HwTaJFKrBZqnvnm8wvHyN6pjJSclZNeo3UQ0HxQaBhK9c1Rnw8gi6OxJVnMeMXHy7Y1eG9XKewzg0CM36t5DoHsIUhjSOEcg2g2oqy74oM78TeQnDNvCXHAgZvsjKxibiXCR_RzoYku6m0onAolaI3TIgJSGFu91iR2Z5db9hspqT1YglUnhpjYHi7BrBW1tH0pZktNA"
              sx={{
                width: '32px',
                height: '32px',
                borderRadius: '9999px',
                filter: 'grayscale(100%)',
                border: `1px solid ${cueColors.outlineVariant}`,
              }}
            />
            <Box>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '10px',
                  lineHeight: '1.2',
                  color: cueColors.onSurface,
                  opacity: 0.7,
                }}
              >
                SESSION ACTIVE
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 'bold',
                  color: cueColors.onSurface,
                }}
              >
                Admin-01
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 2. TOP NAVIGATION */}
      <Box
        component="header"
        sx={{
          position: 'fixed',
          top: 0,
          right: 0,
          left: { xs: 0, md: '260px' },
          height: '64px',
          backgroundColor: cueColors.surfaceContainer,
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          px: '32px',
          zIndex: 1100,
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: { xs: '18px', sm: '24px' },
              lineHeight: 1.3,
              letterSpacing: '0.15em',
              fontWeight: 900,
              color: cueColors.primary,
              textTransform: 'uppercase',
            }}
          >
            Command Center
          </Typography>
          <Box
            sx={{
              px: '12px',
              py: '4px',
              backgroundColor: cueColors.surfaceVariant,
              color: cueColors.onSurfaceVariant,
              fontSize: '10px',
              fontWeight: 'bold',
              letterSpacing: '0.15em',
              border: `1px solid ${cueColors.outlineVariant}`,
              display: { xs: 'none', sm: 'block' },
            }}
          >
            LIVE_FEED
          </Box>
        </Box>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          {/* Query Bar */}
          <Box
            sx={{
              position: 'relative',
              display: { xs: 'none', lg: 'flex' },
              alignItems: 'center',
              border: `1px solid ${isSearchFocused ? cueColors.primary : cueColors.outlineVariant}`,
              transition: 'border-color 0.2s',
            }}
          >
            <Box
              component="input"
              type="text"
              placeholder="QUERY SYSTEM..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
              sx={{
                backgroundColor: cueColors.surfaceDim,
                border: 'none',
                px: '16px',
                py: '8px',
                pr: '40px',
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px',
                color: cueColors.onSurface,
                textTransform: 'uppercase',
                outline: 'none',
                width: '256px',
                borderRadius: 0,
              }}
            />
            <SearchIcon sx={{ position: 'absolute', right: '12px', color: cueColors.outline, fontSize: '18px' }} />
          </Box>

          {/* Action Buttons */}
          <IconButton
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: 0,
              border: `1px solid ${cueColors.outlineVariant}`,
              color: cueColors.onSurface,
              '&:hover': { backgroundColor: cueColors.surfaceBright },
            }}
          >
            <NotificationsIcon sx={{ fontSize: '20px' }} />
          </IconButton>
          <IconButton
            sx={{
              width: '40px',
              height: '40px',
              borderRadius: 0,
              border: `1px solid ${cueColors.outlineVariant}`,
              color: cueColors.onSurface,
              '&:hover': { backgroundColor: cueColors.surfaceBright },
            }}
          >
            <SensorsIcon sx={{ fontSize: '20px' }} />
          </IconButton>

          <Box sx={{ height: '24px', width: '1px', backgroundColor: cueColors.outlineVariant, mx: '8px', display: { xs: 'none', sm: 'block' } }} />

          <Button
            sx={{
              backgroundColor: cueColors.primary,
              color: cueColors.onPrimary,
              px: '16px',
              py: '8px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '11px',
              fontWeight: 'bold',
              borderRadius: 0,
              display: { xs: 'none', sm: 'block' },
              '&:hover': {
                backgroundColor: 'rgba(255, 255, 255, 0.9)',
              },
            }}
          >
            EXPORT REPORT
          </Button>
        </Box>
      </Box>

      {/* 3. MAIN CANVAS */}
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          ml: { xs: 0, md: '260px' },
          pt: '64px',
          p: '32px',
          maxWidth: '1600px',
          width: '100%',
        }}
      >
        {/* SECTION 1: KPI CARDS */}
        <Grid container spacing={2} sx={{ mb: '16px' }}>
          {/* KPI 1: Revenue */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ backgroundColor: cueColors.surfaceContainer, p: '16px', border: `1px solid ${cueColors.outlineVariant}` }}>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: cueColors.onSurfaceVariant,
                  opacity: 0.7,
                  mb: '8px',
                  textTransform: 'uppercase',
                }}
              >
                TOTAL REVENUE
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  mb: '4px',
                  color: cueColors.primary,
                }}
              >
                $284.5K
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography sx={{ color: '#22c55e', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', fontWeight: 500 }}>
                  +14.2%
                </Typography>
                <Box sx={{ height: '20px', flex: 1, backgroundColor: cueColors.surfaceDim, position: 'relative', overflow: 'hidden' }}>
                  <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, backgroundColor: 'rgba(34, 197, 94, 0.2)', width: '75%' }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* KPI 2: Reservation Conv Rate */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ backgroundColor: cueColors.surfaceContainer, p: '16px', border: `1px solid ${cueColors.outlineVariant}` }}>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: cueColors.onSurfaceVariant,
                  opacity: 0.7,
                  mb: '8px',
                  textTransform: 'uppercase',
                }}
              >
                RESERVATION CONV RATE
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  mb: '4px',
                  color: cueColors.primary,
                }}
              >
                68.4%
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography sx={{ color: '#22c55e', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', fontWeight: 500 }}>
                  +2.1%
                </Typography>
                <Box sx={{ height: '20px', flex: 1, backgroundColor: cueColors.surfaceDim, position: 'relative', overflow: 'hidden' }}>
                  <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, backgroundColor: 'rgba(34, 197, 94, 0.2)', width: '66.6%' }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* KPI 3: System Health */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ backgroundColor: cueColors.surfaceContainer, p: '16px', border: `1px solid ${cueColors.outlineVariant}` }}>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: cueColors.onSurfaceVariant,
                  opacity: 0.7,
                  mb: '8px',
                  textTransform: 'uppercase',
                }}
              >
                SYSTEM HEALTH
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  mb: '4px',
                  color: cueColors.primary,
                }}
              >
                99.98
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography sx={{ color: '#22c55e', fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', fontWeight: 500 }}>
                  OPTIMAL
                </Typography>
                <Box sx={{ height: '20px', flex: 1, backgroundColor: cueColors.surfaceDim, position: 'relative', overflow: 'hidden' }}>
                  <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, backgroundColor: 'rgba(34, 197, 94, 0.2)', width: '100%' }} />
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* KPI 4: Failed Payments */}
          <Grid size={{ xs: 12, sm: 6, lg: 3 }}>
            <Box sx={{ backgroundColor: cueColors.surfaceContainer, p: '16px', border: `1px solid ${cueColors.outlineVariant}` }}>
              <Typography
                sx={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '11px',
                  fontWeight: 500,
                  color: cueColors.onSurfaceVariant,
                  opacity: 0.7,
                  mb: '8px',
                  textTransform: 'uppercase',
                }}
              >
                FAILED PAYMENTS
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '32px',
                  fontWeight: 700,
                  letterSpacing: '-0.02em',
                  mb: '4px',
                  color: cueColors.error,
                }}
              >
                12
              </Typography>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography sx={{ color: cueColors.error, fontFamily: '"JetBrains Mono", monospace', fontSize: '10px', fontWeight: 500 }}>
                  +4 CRITICAL
                </Typography>
                <Box sx={{ height: '20px', flex: 1, backgroundColor: cueColors.surfaceDim, position: 'relative', overflow: 'hidden' }}>
                  <Box sx={{ position: 'absolute', top: 0, bottom: 0, left: 0, backgroundColor: 'rgba(255, 180, 171, 0.2)', width: '25%' }} />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* SECTION 2: 70/30 SPLIT (Heatmap & Alerts) */}
        <Grid container columns={10} spacing={2} sx={{ mb: '16px' }}>
          {/* Heatmap Card */}
          <Grid size={{ xs: 10, xl: 7 }}>
            <Box sx={{ backgroundColor: cueColors.surfaceContainer, border: `1px solid ${cueColors.outlineVariant}`, p: '24px' }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: '24px' }}>
                <Box>
                  <Typography
                    sx={{
                      fontFamily: '"JetBrains Mono", monospace',
                      fontSize: '11px',
                      letterSpacing: '0.05em',
                      fontWeight: 'bold',
                      color: cueColors.onSurface,
                      textTransform: 'uppercase',
                    }}
                  >
                    Peak Occupancy Heatmap
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: '10px',
                      fontFamily: '"JetBrains Mono", monospace',
                      color: cueColors.onSurfaceVariant,
                      textTransform: 'uppercase',
                    }}
                  >
                    Temporal utilization density per hour/day
                  </Typography>
                </Box>

                {/* Legend */}
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '4px',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '9px',
                    color: cueColors.onSurfaceVariant,
                  }}
                >
                  <Typography sx={{ fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>0%</Typography>
                  <Box sx={{ display: 'flex', gap: '2px' }}>
                    <Box sx={{ width: '12px', height: '12px', backgroundColor: cueColors.surfaceDim }} />
                    <Box sx={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.2)' }} />
                    <Box sx={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.4)' }} />
                    <Box sx={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.6)' }} />
                    <Box sx={{ width: '12px', height: '12px', backgroundColor: 'rgba(255, 255, 255, 0.8)' }} />
                    <Box sx={{ width: '12px', height: '12px', backgroundColor: '#ffffff' }} />
                  </Box>
                  <Typography sx={{ fontSize: '9px', fontFamily: '"JetBrains Mono", monospace' }}>100%</Typography>
                </Box>
              </Box>

              <Box sx={{ display: 'flex', overflowX: 'auto', '&::-webkit-scrollbar': { height: '4px' } }}>
                <Box sx={{ minWidth: '700px', display: 'flex', width: '100%' }}>
                  {/* Y Axis Day Labels */}
                  <Box sx={{ width: '48px', pt: '24px' }}>
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {['MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN'].map((day) => (
                        <Box
                          key={day}
                          sx={{
                            height: '24px',
                            display: 'flex',
                            alignItems: 'center',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '9px',
                            color: cueColors.onSurfaceVariant,
                          }}
                        >
                          {day}
                        </Box>
                      ))}
                    </Box>
                  </Box>

                  {/* Heatmap Grid */}
                  <Box sx={{ flexGrow: 1 }}>
                    {/* Hour Labels */}
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '2px', mb: '8px' }}>
                      {Array.from({ length: 24 }).map((_, i) => (
                        <Typography
                          key={i}
                          sx={{
                            textAlign: 'center',
                            fontFamily: '"JetBrains Mono", monospace',
                            fontSize: '9px',
                            color: cueColors.onSurfaceVariant,
                          }}
                        >
                          {i}h
                        </Typography>
                      ))}
                    </Box>

                    {/* Matrix Rows */}
                    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                      {heatmapData.map((row, rIdx) => (
                        <Box key={rIdx} sx={{ display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)', gap: '2px' }}>
                          {row.map((opacity, cIdx) => (
                            <Tooltip
                              key={cIdx}
                              title={`Day: ${['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'][rIdx]}, Hour: ${cIdx}h | Load: ${Math.round(opacity * 100)}%`}
                              arrow
                            >
                              <Box
                                sx={{
                                  height: '24px',
                                  backgroundColor: '#ffffff',
                                  opacity: opacity,
                                  transition: 'opacity 0.15s',
                                  cursor: 'crosshair',
                                  '&:hover': {
                                    outline: '1px solid #ffffff',
                                    zIndex: 10,
                                  },
                                }}
                              />
                            </Tooltip>
                          ))}
                        </Box>
                      ))}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Grid>

          {/* High-Risk Alerts Panel */}
          <Grid size={{ xs: 10, xl: 3 }}>
            <Box sx={{ backgroundColor: cueColors.surfaceContainer, border: `1px solid ${cueColors.outlineVariant}`, display: 'flex', flexDirection: 'column', height: '100%', overflow: 'hidden' }}>
              <Box
                sx={{
                  p: '16px',
                  borderBottom: `1px solid ${cueColors.outlineVariant}`,
                  backgroundColor: cueColors.surfaceContainerHigh,
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '11px', fontWeight: 'bold', color: cueColors.onSurface }}>
                  HIGH-RISK ALERTS
                </Typography>
                <Box
                  sx={{
                    backgroundColor: cueColors.error,
                    color: cueColors.onError,
                    fontSize: '10px',
                    fontWeight: 'bold',
                    px: '8px',
                    py: '2px',
                  }}
                >
                  3 ACTIVE
                </Box>
              </Box>

              {/* Scrollable Alerts Content */}
              <Box
                sx={{
                  flexGrow: 1,
                  overflowY: 'auto',
                  maxHeight: { xs: '350px', xl: '254px' },
                  '&::-webkit-scrollbar': { width: '4px' },
                  '&::-webkit-scrollbar-track': { background: cueColors.surface },
                  '&::-webkit-scrollbar-thumb': { background: '#2E2E2E' },
                }}
              >
                {alerts.map((alert) => (
                  <Box
                    key={alert.id}
                    sx={{
                      p: '16px',
                      borderBottom: `1px solid ${cueColors.outlineVariant}`,
                      transition: 'background-color 0.15s',
                      '&:hover': {
                        backgroundColor: cueColors.surfaceBright,
                      },
                    }}
                  >
                    <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '4px' }}>
                      <Typography
                        sx={{
                          color: alert.type === 'LATENCY_WARNING' ? cueColors.onSecondaryContainer : cueColors.error,
                          fontFamily: '"JetBrains Mono", monospace',
                          fontSize: '10px',
                          fontWeight: 'bold',
                        }}
                      >
                        {alert.type}
                      </Typography>
                      <Typography sx={{ color: cueColors.onSurfaceVariant, fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }}>
                        {alert.time}
                      </Typography>
                    </Box>

                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', lineHeight: 1.5, color: cueColors.onSurface, mb: '8px' }}>
                      {alert.message}
                    </Typography>

                    <Button
                      variant="outlined"
                      sx={{
                        fontFamily: '"JetBrains Mono", monospace',
                        fontSize: '10px',
                        color: cueColors.primary,
                        borderColor: cueColors.primary,
                        borderRadius: 0,
                        px: '8px',
                        py: '4px',
                        minWidth: 0,
                        lineHeight: 1,
                        transition: 'all 0.15s',
                        '&:hover': {
                          backgroundColor: cueColors.primary,
                          color: cueColors.onPrimary,
                          borderColor: cueColors.primary,
                        },
                      }}
                    >
                      {alert.buttonLabel}
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>

        {/* SECTION 3: STAFF ACTIVITY SNAPSHOT */}
        <Box sx={{ mb: '16px' }}>
          <Box
            sx={{
              backgroundColor: cueColors.surfaceContainer,
              border: `1px solid ${cueColors.outlineVariant}`,
              p: '24px',
              height: '400px',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '11px',
                fontWeight: 'bold',
                color: cueColors.onSurface,
                textTransform: 'uppercase',
                mb: '24px',
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
              }}
            >
              <BadgeIcon sx={{ fontSize: '18px' }} />
              STAFF ACTIVITY SNAPSHOT
            </Typography>

            {/* Timeline Log Container */}
            <Box
              sx={{
                flexGrow: 1,
                overflowY: 'auto',
                pr: '8px',
                '&::-webkit-scrollbar': { width: '4px' },
                '&::-webkit-scrollbar-track': { background: cueColors.surface },
                '&::-webkit-scrollbar-thumb': { background: '#2E2E2E' },
              }}
            >
              {activities.map((activity) => (
                <Box
                  key={activity.id}
                  sx={{
                    position: 'relative',
                    pl: '24px',
                    borderLeft: `1px solid ${cueColors.outlineVariant}`,
                    pb: '16px',
                  }}
                >
                  {/* Square marker dot (0px radius) */}
                  <Box
                    sx={{
                      position: 'absolute',
                      left: '-4.5px',
                      top: '6px',
                      width: '8px',
                      height: '8px',
                      backgroundColor: cueColors.primary,
                      borderRadius: 0,
                    }}
                  />

                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '4px' }}>
                    <Typography sx={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: cueColors.onSurface }}>
                      <strong>{activity.name}</strong> <span style={{ opacity: 0.7 }}>{activity.action}</span>
                    </Typography>
                    <Typography sx={{ color: cueColors.onSurfaceVariant, fontFamily: '"JetBrains Mono", monospace', fontSize: '10px' }}>
                      {activity.time}
                    </Typography>
                  </Box>

                  <Typography
                    sx={{
                      fontSize: '11px',
                      fontFamily: '"JetBrains Mono", monospace',
                      textTransform: 'uppercase',
                      opacity: 0.5,
                      color: cueColors.onSurface,
                    }}
                  >
                    {activity.detail}
                  </Typography>
                </Box>
              ))}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* 4. FOOTER */}
      <Box
        component="footer"
        sx={{
          position: 'absolute',
          bottom: 0,
          left: { xs: 0, md: '260px' },
          right: 0,
          p: '32px',
          pt: 0,
          pb: '40px',
          textAlign: 'center',
          color: cueColors.onSurfaceVariant,
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          opacity: 0.3,
          pointerEvents: 'none',
        }}
      >
        © 2023 CUE CONTROL SYSTEMS. ALL RIGHTS RESERVED. ENCRYPTED OPERATIONAL LAYER.
      </Box>
    </Box>
  );
}
```

---

## 3. Style Class Mapping Breakdown

Below is the mapping trace showing how the original Tailwind styles from the design HTML were translated into MUI's style system (`sx` props):

| Tailwind Class | Equivalent MUI Style | Description |
| :--- | :--- | :--- |
| `flex` | `display: 'flex'` | Flex layout container |
| `items-center` | `alignItems: 'center'` | Centering children vertically |
| `justify-between` | `justifyContent: 'space-between'` | Spacing children out |
| `border-r border-outline-variant` | `borderRight: '1px solid ' + cueColors.outlineVariant` | Visual separating borders |
| `fixed left-0 top-0 h-screen w-[260px]` | `position: 'fixed', left: 0, top: 0, height: '100vh', width: '260px'` | Position sidebar |
| `grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4` | `Grid2` with `size={{ xs: 12, sm: 6, lg: 3 }}` | Responsive KPI grid |
| `grid-heatmap` / `grid-cols-24` | `display: 'grid', gridTemplateColumns: 'repeat(24, 1fr)'` | Matrix grid columns |
| `rounded-full` | `borderRadius: '9999px'` | Circular avatar borders |
| `opacity-50` / `opacity-30` | `opacity: 0.5` / `opacity: 0.3` | Element alpha opacity levels |
| `hover:bg-surface-bright` | `'&:hover': { backgroundColor: cueColors.surfaceBright }` | State changes for buttons/items |
