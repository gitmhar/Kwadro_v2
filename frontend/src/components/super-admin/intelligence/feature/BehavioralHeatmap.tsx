import React from 'react';
import { Box, Typography } from '@mui/material';

export interface BehavioralHeatmapProps {
  title?: string;
  subtitle?: string;
  onCellClick?: (row: number, col: number, intensity: string) => void;
}

const yAxisLabels = [
  'T-12', 'T-11', 'T-10', 'T-09', 'T-08', 'T-07',
  'T-06', 'T-05', 'T-04', 'T-03', 'T-02', 'T-01'
];

const xAxisLabels = [
  '00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'
];

export const BehavioralHeatmap: React.FC<BehavioralHeatmapProps> = ({
  title = 'Behavioral Reservation Heatmap',
  subtitle = 'Density distribution by table / Peak activity clustering',
  onCellClick,
}) => {
  // Generate stable mock heatmap cells once
  const cells = React.useMemo(() => {
    const intensities = [
      'rgba(255, 255, 255, 0.05)', // 0
      'rgba(255, 255, 255, 0.05)', // 1
      'rgba(255, 255, 255, 0.1)',  // 2
      'rgba(255, 255, 255, 0.2)',  // 3
      'rgba(255, 255, 255, 0.4)',  // 4
      'rgba(255, 255, 255, 0.6)',  // 5
      'rgba(255, 255, 255, 0.8)',  // 6
      '#ffffff',                   // 7
      'rgba(255, 255, 255, 0.9)',  // 8
      'rgba(255, 255, 255, 0.7)',  // 9
      'rgba(255, 255, 255, 0.5)',  // 10
      'rgba(255, 255, 255, 0.3)',  // 11
    ];

    const generated: string[] = [];
    for (let i = 0; i < 12 * 24; i++) {
      const col = i % 24;
      let intensity = intensities[Math.floor(Math.random() * 3)]; // Default low
      if (col > 18) {
        intensity = intensities[Math.floor(Math.random() * 5) + 7]; // High peak
      } else if (col > 10 && col < 14) {
        intensity = intensities[Math.floor(Math.random() * 4) + 3]; // Lunch rush
      }
      generated.push(intensity);
    }
    return generated;
  }, []);

  return (
    <Box
      sx={{
        backgroundColor: '#1b1c1c', // surface-container-low
        border: '1px solid #444748', // outline-variant
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        boxSizing: 'border-box',
        width: '100%',
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 3 }}>
        <Box>
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
          <Typography
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '11px',
              color: '#c4c7c8',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
              mt: 0.5,
            }}
          >
            {subtitle}
          </Typography>
        </Box>
        
        {/* Heatmap Legend */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            border: '1px solid #444748',
            p: 1,
            backgroundColor: '#0d0e0f', // surface-container-lowest
          }}
        >
          <Typography
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: '#c4c7c8',
            }}
          >
            WEAR/USAGE:
          </Typography>
          <Box sx={{ display: 'flex', gap: 0.5 }}>
            <Box sx={{ width: 12, height: 12, backgroundColor: 'rgba(255, 255, 255, 0.05)' }} title="Low" />
            <Box sx={{ width: 12, height: 12, backgroundColor: 'rgba(255, 255, 255, 0.2)' }} title="Moderate" />
            <Box sx={{ width: 12, height: 12, backgroundColor: 'rgba(255, 255, 255, 0.5)' }} title="High" />
            <Box sx={{ width: 12, height: 12, backgroundColor: '#ffffff' }} title="Critical" />
          </Box>
        </Box>
      </Box>

      {/* Grid Layout Container */}
      <Box sx={{ display: 'flex', gap: 2 }}>
        {/* Y-Axis Label Column */}
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            py: 0.5,
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '9px',
            color: '#c4c7c8',
            opacity: 0.6,
            minWidth: '24px',
            textAlign: 'right',
            height: '180px',
          }}
        >
          {yAxisLabels.map((label, idx) => (
            <span key={idx}>{label}</span>
          ))}
        </Box>

        {/* Heatmap Grid Wrapper */}
        <Box sx={{ flex: 1 }}>
          <Box
            sx={{
              display: 'grid',
              gridTemplateColumns: 'repeat(24, 1fr)',
              gridTemplateRows: 'repeat(12, 1fr)',
              gap: '2px',
              height: '180px',
            }}
          >
            {cells.map((intensity, idx) => {
              const row = Math.floor(idx / 24);
              const col = idx % 24;
              return (
                <Box
                  key={idx}
                  onClick={() => onCellClick?.(row, col, intensity)}
                  sx={{
                    backgroundColor: intensity,
                    transition: 'all 0.15s ease-in-out',
                    cursor: 'crosshair',
                    '&:hover': {
                      outline: '1px solid #ffffff',
                    },
                  }}
                />
              );
            })}
          </Box>

          {/* X-Axis Label Row */}
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              mt: 1.5,
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: '#c4c7c8',
            }}
          >
            {xAxisLabels.map((label, idx) => (
              <span key={idx}>{label}</span>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
