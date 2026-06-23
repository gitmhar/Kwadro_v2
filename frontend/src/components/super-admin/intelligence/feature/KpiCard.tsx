import React from 'react';
import { Box, Typography } from '@mui/material';

export interface KpiCardProps {
  title: string;
  value: string;
  badgeText: string;
  badgeVariant?: 'filled' | 'outlined';
  trendIcon: string;
  trendText: string;
  trendColor: string;
}

export const KpiCard: React.FC<KpiCardProps> = ({
  title,
  value,
  badgeText,
  badgeVariant = 'filled',
  trendIcon,
  trendText,
  trendColor,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1b1c1c', // surface-container-low equivalent
        border: '1px solid #444748', // outline-variant
        p: 2.5,
        position: 'relative',
        transition: 'background-color 0.2s, border-color 0.2s',
        '&:hover': {
          backgroundColor: '#292a2a', // surface-container-high
          borderColor: '#8e9192', // outline
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 2 }}>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            letterSpacing: '0.05em',
            fontWeight: 500,
            color: '#c4c7c8', // on-surface-variant
            textTransform: 'uppercase',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            fontSize: '11px',
            fontFamily: 'JetBrains Mono, monospace',
            color: badgeVariant === 'filled' ? '#121414' : '#c4c7c8',
            backgroundColor: badgeVariant === 'filled' ? '#ffffff' : 'transparent',
            border: badgeVariant === 'outlined' ? '1px solid #444748' : 'none',
            px: 1,
            py: 0.25,
            fontWeight: 500,
          }}
        >
          {badgeText}
        </Box>
      </Box>

      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '32px',
          fontWeight: 700,
          color: '#ffffff',
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
        }}
      >
        {value}
      </Typography>

      <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5, mt: 1 }}>
        <Box
          component="span"
          className="material-symbols-outlined"
          sx={{
            fontSize: '14px',
            color: trendColor,
          }}
        >
          {trendIcon}
        </Box>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: trendColor,
          }}
        >
          {trendText}
        </Typography>
      </Box>
    </Box>
  );
};
