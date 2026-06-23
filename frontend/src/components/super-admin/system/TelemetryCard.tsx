import React from 'react';
import { Card, Typography, Box, Stack } from '@mui/material';

export interface TelemetryCardProps {
  title: string;
  value: string;
  subValue: string;
  icon: React.ReactNode;
  statusColor: string;
  pulse?: boolean;
}

export const TelemetryCard: React.FC<TelemetryCardProps> = ({
  title,
  value,
  subValue,
  icon,
  statusColor,
  pulse = false,
}) => {
  return (
    <Card
      sx={{
        bgcolor: '#141414',
        border: '1px solid #2E2E2E',
        borderRadius: 0,
        height: 128,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        p: 2,
        boxShadow: 'none',
        '&:hover': {
          borderColor: '#8e9192',
        },
        transition: 'border-color 0.15s ease-in-out',
      }}
    >
      <Stack direction="row" justifyContent="space-between" alignItems="flex-start">
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'text.secondary',
            opacity: 0.5,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
          }}
        >
          {title}
        </Typography>
        <Box
          sx={{
            width: 8,
            height: 8,
            borderRadius: '50%',
            bgcolor: statusColor,
            ...(pulse && {
              animation: 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
              '@keyframes pulse': {
                '0%, 100%': { opacity: 1 },
                '50%': { opacity: 0.4 },
              },
            }),
          }}
        />
      </Stack>
      <Box>
        <Typography
          variant="h3"
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '32px',
            fontWeight: 700,
            color: '#ffffff',
            lineHeight: 1,
            mb: 0.5,
          }}
        >
          {value}
        </Typography>
        <Stack direction="row" spacing={0.5} alignItems="center" sx={{ color: statusColor }}>
          {icon}
          <Typography
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            {subValue}
          </Typography>
        </Stack>
      </Box>
    </Card>
  );
};
