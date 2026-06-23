import React from 'react';
import { Box, Typography } from '@mui/material';
import { cueColors } from '../../../theme/dashboard/cueColors';

interface TimelineBar {
  height: string;
  color: string;
  opacity: number;
  label?: string;
}

const bars: TimelineBar[] = [
  { height: '20%', color: cueColors.primary, opacity: 0.2, label: '00:00 AUTH_CHECK' },
  { height: '25%', color: cueColors.primary, opacity: 0.2 },
  { height: '20%', color: cueColors.primary, opacity: 0.2 },
  { height: '60%', color: '#eab308', opacity: 0.2, label: '04:30 SYS_CONFIG_MOD' },
  { height: '30%', color: cueColors.primary, opacity: 0.2 },
  { height: '40%', color: cueColors.primary, opacity: 0.2 },
  { height: '90%', color: cueColors.error, opacity: 0.2, label: '09:15 ALERT_BRUTE_FORCE' },
  { height: '20%', color: cueColors.primary, opacity: 0.2 },
  { height: '15%', color: cueColors.primary, opacity: 0.2 },
  { height: '45%', color: '#eab308', opacity: 0.2 },
  { height: '20%', color: cueColors.primary, opacity: 0.2 },
  { height: '30%', color: cueColors.primary, opacity: 0.2 },
  { height: '100%', color: cueColors.primary, opacity: 0.4, label: '15:20 CURRENT_MARKER' },
  { height: '10%', color: cueColors.surfaceVariant, opacity: 0.1 },
  { height: '10%', color: cueColors.surfaceVariant, opacity: 0.1 },
  { height: '10%', color: cueColors.surfaceVariant, opacity: 0.1 },
];

export default function AuditTimeline() {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: '20px',
        width: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Title & Legend */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '24px', flexWrap: 'wrap', gap: '12px' }}>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: cueColors.primary,
            letterSpacing: '0.05em',
          }}
        >
          SYSTEM AUDIT TIMELINE (24H)
        </Typography>
        <Box sx={{ display: 'flex', gap: '16px' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Box sx={{ width: '8px', height: '8px', backgroundColor: cueColors.primary }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', opacity: 0.5 }}>
              ACCESS
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Box sx={{ width: '8px', height: '8px', backgroundColor: '#eab308' }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', opacity: 0.5 }}>
              MODIFICATION
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
            <Box sx={{ width: '8px', height: '8px', backgroundColor: cueColors.error }} />
            <Typography sx={{ fontFamily: '"JetBrains Mono", monospace', fontSize: '0.625rem', opacity: 0.5 }}>
              ALERT
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* Sparkline Container */}
      <Box
        sx={{
          position: 'relative',
          height: '96px',
          width: '100%',
          backgroundColor: cueColors.surfaceDim,
          border: `1px solid ${cueColors.outlineVariant}`,
          mt: '32px',
          display: 'flex',
          alignItems: 'end',
          px: '8px',
          gap: '4px',
        }}
      >
        {bars.map((bar, i) => (
          <Box
            key={i}
            sx={{
              flex: 1,
              backgroundColor: bar.color,
              height: bar.height,
              opacity: bar.opacity,
              transition: 'opacity 150ms ease-in-out',
              position: 'relative',
              '&:hover': {
                opacity: 1,
              },
              '&:hover .tooltip': {
                display: 'block',
              },
            }}
          >
            {bar.label && (
              <Box
                className="tooltip"
                sx={{
                  display: 'none',
                  position: 'absolute',
                  top: '-32px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  backgroundColor: cueColors.surfaceBright,
                  px: '8px',
                  py: '4px',
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: '0.5rem',
                  whiteSpace: 'nowrap',
                  zIndex: 10,
                  border: `1px solid ${cueColors.outlineVariant}`,
                  color: cueColors.primary,
                }}
              >
                {bar.label}
              </Box>
            )}
          </Box>
        ))}
      </Box>

      {/* Timeline Labels */}
      <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '8px', opacity: 0.4 }}>
        {['00:00', '06:00', '12:00 (EST)', '18:00', '23:59'].map((t) => (
          <Typography
            key={t}
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.625rem',
            }}
          >
            {t}
          </Typography>
        ))}
      </Box>
    </Box>
  );
}
