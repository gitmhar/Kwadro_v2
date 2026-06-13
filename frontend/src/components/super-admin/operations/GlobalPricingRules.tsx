import React, { useState } from 'react';
import { Box, Typography, Grid, Switch } from '@mui/material';
import { styled } from '@mui/material/styles';
import { cueColors } from '../executive/cueColors';
import { Sell } from '@mui/icons-material';

// Sleek retro rectangular toggle switch to match .op-toggle / .op-slider
const OpToggle = styled(Switch)(() => ({
  width: 44,
  height: 24,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 3,
    transitionDuration: '200ms',
    '&.Mui-checked': {
      transform: 'translateX(20px)',
      '& + .MuiSwitch-track': {
        backgroundColor: '#ffffff',
        opacity: 1,
        border: 0,
      },
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 16,
    height: 16,
    borderRadius: 0,
    backgroundColor: '#8e9192',
  },
  '& .MuiSwitch-switchBase.Mui-checked .MuiSwitch-thumb': {
    backgroundColor: '#000000',
  },
  '& .MuiSwitch-track': {
    borderRadius: 0,
    backgroundColor: '#2E2E2E',
    opacity: 1,
    border: '1px solid #444748',
    boxSizing: 'border-box',
  },
}));

export default function GlobalPricingRules() {
  const [baseRate, setBaseRate] = useState('28.00');
  const [proPremium, setProPremium] = useState('12.00');
  const [memberDiscount, setMemberDiscount] = useState(true);
  const [autoRounding, setAutoRounding] = useState(true);

  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: '16px',
        width: '100%',
        boxSizing: 'border-box',
        transition: 'background-color 150ms ease-in-out',
        '&:hover': {
          backgroundColor: '#232424',
        },
      }}
    >
      {/* Header bar */}
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          mb: '24px',
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          pb: '12px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Sell sx={{ color: cueColors.primary}}/>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.6875rem',
              fontWeight: 700,
              textTransform: 'uppercase',
              letterSpacing: '0.05em',
              color: cueColors.primary,
              margin: 0,
            }}
          >
            Global Pricing Rules
          </Typography>
        </Box>
        <Box
          component="span"
          sx={{
            fontSize: '0.625rem',
            fontFamily: '"JetBrains Mono", monospace',
            color: cueColors.primary,
            px: '8px',
            py: '2px',
            backgroundColor: cueColors.surfaceBright,
            border: `1px solid ${cueColors.outlineVariant}`,
          }}
        >
          STATUS: ACTIVE
        </Box>
      </Box>

      {/* Grid Content */}
      <Grid container spacing={4} columns={12} sx={{ width: '100%', boxSizing: 'border-box' }}>
        {/* Left column */}
        <Grid size={{ xs: 12, md: 6 }} sx={{ width: '100%', boxSizing: 'border-box' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Base Hourly Rate */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: cueColors.onSurface,
                  }}
                >
                  Base Hourly Rate
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                    color: cueColors.onSurfaceVariant,
                    opacity: 0.6,
                  }}
                >
                  Global default for standard tables
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    color: cueColors.primary,
                    opacity: 0.4,
                  }}
                >
                  ₱
                </Typography>
                <Box
                  component="input"
                  type="text"
                  value={baseRate}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setBaseRate(e.target.value)}
                  sx={{
                    width: '64px',
                    backgroundColor: cueColors.surfaceDim,
                    border: `1px solid ${cueColors.outlineVariant}`,
                    p: '8px',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    textAlign: 'center',
                    color: cueColors.primary,
                    '&:focus': {
                      outline: 'none',
                      borderColor: cueColors.primary,
                    },
                  }}
                />
              </Box>
            </Box>

            {/* Pro Table Premium */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Box>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.875rem',
                    lineHeight: 1.5,
                    fontWeight: 600,
                    color: cueColors.onSurface,
                  }}
                >
                  Pro Table Premium
                </Typography>
                <Typography
                  sx={{
                    fontFamily: '"Inter", sans-serif',
                    fontSize: '0.75rem',
                    color: cueColors.onSurfaceVariant,
                    opacity: 0.6,
                  }}
                >
                  Additional hourly surcharge
                </Typography>
              </Box>
              <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Typography
                  component="span"
                  sx={{
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '1rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    color: cueColors.primary,
                    opacity: 0.4,
                  }}
                >
                  +
                </Typography>
                <Box
                  component="input"
                  type="text"
                  value={proPremium}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => setProPremium(e.target.value)}
                  sx={{
                    width: '64px',
                    backgroundColor: cueColors.surfaceDim,
                    border: `1px solid ${cueColors.outlineVariant}`,
                    p: '8px',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.8rem',
                    fontWeight: 500,
                    letterSpacing: '0.05em',
                    lineHeight: 1.2,
                    textAlign: 'center',
                    color: cueColors.primary,
                    '&:focus': {
                      outline: 'none',
                      borderColor: cueColors.primary,
                    },
                  }}
                />
              </Box>
            </Box>
          </Box>
        </Grid>

        {/* Right column */}
        <Grid
          size={{ xs: 12, md: 6 }}
          sx={{
            width: '100%',
            boxSizing: 'border-box',
            borderLeft: { xs: 'none', md: `1px solid ${cueColors.outlineVariant}` },
            pl: { xs: 0, md: '32px' },
            pt: { xs: '24px', md: 0 },
          }}
        >
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {/* Member Discounting */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: cueColors.onSurface,
                }}
              >
                Member Discounting
              </Typography>
              <OpToggle
                checked={memberDiscount}
                onChange={(e) => setMemberDiscount(e.target.checked)}
              />
            </Box>

            {/* Auto-rounding */}
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: '0.875rem',
                  lineHeight: 1.5,
                  fontWeight: 600,
                  color: cueColors.onSurface,
                }}
              >
                Auto-rounding (0.25)
              </Typography>
              <OpToggle
                checked={autoRounding}
                onChange={(e) => setAutoRounding(e.target.checked)}
              />
            </Box>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
