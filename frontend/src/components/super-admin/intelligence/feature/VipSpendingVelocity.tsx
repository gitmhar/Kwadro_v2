import React from 'react';
import { Box, Typography } from '@mui/material';

export interface SpendingTier {
  id: string;
  name: string;
  amountText: string;
  percentage: number;
  opacity?: number;
}

export interface VipSpendingVelocityProps {
  title?: string;
  tiers?: SpendingTier[];
  onInsightsClick?: () => void;
}

const defaultTiers: SpendingTier[] = [
  {
    id: 'platinum',
    name: 'Platinum Tier',
    amountText: '$4,280 AVG / NODE',
    percentage: 85,
    opacity: 1,
  },
  {
    id: 'gold',
    name: 'Gold Tier',
    amountText: '$2,140 AVG / NODE',
    percentage: 55,
    opacity: 0.6,
  },
  {
    id: 'silver',
    name: 'Silver Tier',
    amountText: '$1,020 AVG / NODE',
    percentage: 25,
    opacity: 0.3,
  },
];

export const VipSpendingVelocity: React.FC<VipSpendingVelocityProps> = ({
  title = 'VIP Spending Velocity',
  tiers = defaultTiers,
  onInsightsClick,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1b1c1c', // surface-container-low
        border: '1px solid #444748', // outline-variant
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        height: '100%',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 4 }}>
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '11px',
            fontWeight: 700,
            color: '#ffffff',
            textTransform: 'uppercase',
            letterSpacing: '0.05em',
          }}
        >
          {title}
        </Typography>
        <Box
          component="span"
          className="material-symbols-outlined"
          onClick={onInsightsClick}
          sx={{
            fontSize: '14px',
            color: '#c4c7c8',
            cursor: 'pointer',
            transition: 'color 0.15s',
            '&:hover': {
              color: '#ffffff',
            },
          }}
        >
          insights
        </Box>
      </Box>

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
        {tiers.map((tier) => (
          <Box key={tier.id}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#c4c7c8',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  fontWeight: 700,
                }}
              >
                {tier.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: '#ffffff',
                }}
              >
                {tier.amountText}
              </Typography>
            </Box>
            {/* Custom progress bar */}
            <Box
              sx={{
                width: '100%',
                height: '6px',
                backgroundColor: '#343535', // surface-container-highest
                overflow: 'hidden',
              }}
            >
              <Box
                sx={{
                  height: '100%',
                  width: `${tier.percentage}%`,
                  backgroundColor: '#ffffff',
                  opacity: tier.opacity ?? 1,
                  transition: 'width 0.5s ease-out-in',
                }}
              />
            </Box>
          </Box>
        ))}
      </Box>
    </Box>
  );
};
