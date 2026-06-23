import React from 'react';
import { Box, Typography } from '@mui/material';

export interface ForecastEngineChartProps {
  title?: string;
  subtitle?: string;
  historicalPath?: string;
  predictivePath?: string;
  confidencePath?: string;
  markerX?: number;
  markerY?: number;
  markerText?: string;
  timeLabels?: string[];
}

export const ForecastEngineChart: React.FC<ForecastEngineChartProps> = ({
  title = 'Forecast Engine: Demand Projection',
  subtitle = 'Multi-nodal analysis / Hourly granularity',
  historicalPath = 'M0,380 L100,360 L200,370 L300,340 L400,350 L500,310 L600,330 L700,280',
  predictivePath = 'M700,280 L800,300 L900,260 L1000,270 L1100,240 L1200,250',
  confidencePath = 'M700,250 L800,270 L900,230 L1000,240 L1100,210 L1200,220 L1200,280 L1100,270 L1000,300 L900,290 L800,330 L700,310 Z',
  markerX = 700,
  markerY = 280,
  markerText = 'NOW',
  timeLabels = ['08:00', '12:00', '16:00', '20:00', '00:00', '04:00', '08:00 (T+24)'],
}) => {
  return (
    <Box
      sx={{
        backgroundColor: '#1b1c1c',
        border: '1px solid #444748',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        width: '100%',
        boxSizing: 'border-box',
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
        <Box sx={{ display: 'flex', gap: 2, alignItems: 'center' }}>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box sx={{ width: 8, height: 8, backgroundColor: '#ffffff' }} />
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#c4c7c8',
              }}
            >
              HISTORICAL
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Box
              sx={{
                width: 8,
                height: 8,
                border: '1px dashed #ffffff',
                backgroundColor: 'transparent',
              }}
            />
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: '#c4c7c8',
              }}
            >
              PREDICTIVE
            </Typography>
          </Box>
        </Box>
      </Box>

      {/* SVG Container */}
      <Box
        sx={{
          flex: 1,
          position: 'relative',
          borderLeft: '1px solid #444748',
          borderBottom: '1px solid #444748',
          mb: 1,
          minHeight: '200px',
          overflow: 'hidden',
        }}
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1200 400"
          preserveAspectRatio="none"
          style={{ display: 'block' }}
        >
          {/* Grid lines */}
          <line x1="0" x2="100%" y1="100" y2="100" stroke="#2E2E2E" strokeWidth="1" />
          <line x1="0" x2="100%" y1="200" y2="200" stroke="#2E2E2E" strokeWidth="1" />
          <line x1="0" x2="100%" y1="300" y2="300" stroke="#2E2E2E" strokeWidth="1" />

          {/* Confidence Area */}
          <path d={confidencePath} fill="rgba(255,255,255,0.08)" />

          {/* Historical Path */}
          <path d={historicalPath} fill="none" stroke="#ffffff" strokeWidth="2.5" />

          {/* Predictive Path */}
          <path d={predictivePath} fill="none" stroke="#ffffff" strokeDasharray="6,6" strokeWidth="2.5" />

          {/* Current Time Marker */}
          <line x1={markerX} x2={markerX} y1="0" y2="400" stroke="#444748" strokeDasharray="2" strokeWidth="1" />
          <circle cx={markerX} cy={markerY} fill="#ffffff" r="4" />
          <text
            x={markerX + 10}
            y={markerY - 10}
            fill="#ffffff"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
          >
            {markerText}
          </text>
        </svg>
      </Box>

      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        {timeLabels.map((label, idx) => (
          <Typography
            key={idx}
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '9px',
              color: '#c4c7c8',
            }}
          >
            {label}
          </Typography>
        ))}
      </Box>
    </Box>
  );
};
