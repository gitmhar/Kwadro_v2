import React from 'react';
import { Box, Typography } from '@mui/material';

export interface TrafficDataPoint {
  label: string;
  value: number; // e.g. 40 for 40%
  isHighlighted?: boolean;
  borderAlpha?: number;
}

export interface WeeklyTrafficDistributionProps {
  title?: string;
  data?: TrafficDataPoint[];
  activeTab?: 'WTD' | 'MTD';
  onTabChange?: (tab: 'WTD' | 'MTD') => void;
}

const defaultWeeklyData: TrafficDataPoint[] = [
  { label: 'MON', value: 40, borderAlpha: 0.2 },
  { label: 'TUE', value: 55, borderAlpha: 0.3 },
  { label: 'WED', value: 50, borderAlpha: 0.3 },
  { label: 'THU', value: 65, borderAlpha: 0.5 },
  { label: 'FRI', value: 95, isHighlighted: true },
  { label: 'SAT', value: 85, borderAlpha: 0.7 },
  { label: 'SUN', value: 60, borderAlpha: 0.4 },
];

export const WeeklyTrafficDistribution: React.FC<WeeklyTrafficDistributionProps> = ({
  title = 'Weekly Traffic Distribution',
  data = defaultWeeklyData,
  activeTab: controlledTab,
  onTabChange,
}) => {
  const [localTab, setLocalTab] = React.useState<'WTD' | 'MTD'>('WTD');
  const activeTab = controlledTab !== undefined ? controlledTab : localTab;

  const handleTabClick = (tab: 'WTD' | 'MTD') => {
    if (onTabChange) {
      onTabChange(tab);
    } else {
      setLocalTab(tab);
    }
  };

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
        <Box sx={{ display: 'flex', gap: 1 }}>
          <Box
            component="button"
            onClick={() => handleTabClick('WTD')}
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: '9px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              backgroundColor: activeTab === 'WTD' ? '#ffffff' : 'transparent',
              color: activeTab === 'WTD' ? '#121414' : '#c4c7c8',
              border: activeTab === 'WTD' ? 'none' : '1px solid #444748',
              cursor: 'pointer',
              outline: 'none',
              '&:hover': {
                borderColor: activeTab === 'WTD' ? 'none' : '#ffffff',
                color: activeTab === 'WTD' ? '#121414' : '#ffffff',
              },
            }}
          >
            WTD
          </Box>
          <Box
            component="button"
            onClick={() => handleTabClick('MTD')}
            sx={{
              px: 1.5,
              py: 0.5,
              fontSize: '9px',
              fontFamily: 'JetBrains Mono, monospace',
              fontWeight: 700,
              backgroundColor: activeTab === 'MTD' ? '#ffffff' : 'transparent',
              color: activeTab === 'MTD' ? '#121414' : '#c4c7c8',
              border: activeTab === 'MTD' ? 'none' : '1px solid #444748',
              cursor: 'pointer',
              outline: 'none',
              '&:hover': {
                borderColor: activeTab === 'MTD' ? 'none' : '#ffffff',
                color: activeTab === 'MTD' ? '#121414' : '#ffffff',
              },
            }}
          >
            MTD
          </Box>
        </Box>
      </Box>

      {/* Bar graph container */}
      <Box sx={{ height: '200px', display: 'flex', alignItems: 'end', gap: 1.5, px: 1, pb: 3, position: 'relative' }}>
        {data.map((point, index) => {
          const barHeight = `${point.value}%`;
          const isHighlighted = point.isHighlighted;

          return (
            <Box
              key={index}
              sx={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                height: '100%',
                position: 'relative',
              }}
            >
              <Box
                sx={{
                  height: barHeight,
                  width: '100%',
                  backgroundColor: isHighlighted ? '#ffffff' : '#343535', // primary vs surface-container-highest
                  borderTop: isHighlighted ? 'none' : '1px solid',
                  borderColor: isHighlighted
                    ? 'none'
                    : `rgba(255, 255, 255, ${point.borderAlpha ?? 0.3})`,
                  transition: 'background-color 0.15s ease-in-out, border-color 0.15s ease-in-out',
                  '&:hover': {
                    backgroundColor: isHighlighted ? '#ffffff' : '#444748',
                  },
                }}
              />
              <Typography
                sx={{
                  position: 'absolute',
                  bottom: '-20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '9px',
                  color: isHighlighted ? '#ffffff' : '#c4c7c8',
                  fontWeight: isHighlighted ? 700 : 400,
                  whiteSpace: 'nowrap',
                }}
              >
                {point.label}
              </Typography>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
