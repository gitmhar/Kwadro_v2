import React from 'react';
import { Box, Typography, Stack, Button } from '@mui/material';
import SensorsIcon from '@mui/icons-material/Sensors';

export interface CommMatrixItem {
  name: string;
  status: string;
  statusColor: string;
  percentage: number;
  detail: string;
}

interface CommunicationsMatrixProps {
  items?: CommMatrixItem[];
  onRefresh?: () => void;
}

const defaultItems: CommMatrixItem[] = [
  {
    name: 'Postmark Email Relay',
    status: 'OPERATIONAL',
    statusColor: '#22c55e',
    percentage: 94,
    detail: 'SMTP: smtp.postmarkapp.com (587)',
  },
  {
    name: 'Twilio SMS Gateway',
    status: 'ACTIVE',
    statusColor: '#22c55e',
    percentage: 88,
    detail: 'SID: AC998273...442',
  },
];

export const CommunicationsMatrix: React.FC<CommunicationsMatrixProps> = ({
  items = defaultItems,
  onRefresh,
}) => {
  return (
    <Box
      sx={{
        bgcolor: '#141414',
        border: '1px solid #2E2E2E',
        p: 3,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
      }}
    >
      <Box>
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 4 }}>
          <SensorsIcon sx={{ color: 'text.secondary', opacity: 0.5, fontSize: 20 }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            System Communications Matrix
          </Typography>
        </Stack>

        <Stack spacing={3}>
          {items.map((item, idx) => (
            <Box key={idx}>
              <Stack direction="row" justifyContent="space-between" alignItems="center" sx={{ mb: 1 }}>
                <Typography
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: 'text.secondary',
                    opacity: 0.4,
                    textTransform: 'uppercase',
                  }}
                >
                  {item.name}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '10px',
                    color: item.statusColor,
                    fontWeight: 700,
                  }}
                >
                  {item.status}
                </Typography>
              </Stack>

              <Box
                sx={{
                  width: '100%',
                  bgcolor: '#000000',
                  border: '1px solid #2E2E2E',
                  height: 6,
                  position: 'relative',
                }}
              >
                <Box
                  sx={{
                    bgcolor: '#ffffff',
                    height: '100%',
                    width: `${item.percentage}%`,
                  }}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: 'text.secondary',
                  opacity: 0.3,
                  mt: 0.75,
                }}
              >
                {item.detail}
              </Typography>
            </Box>
          ))}
        </Stack>
      </Box>

      <Button
        onClick={onRefresh}
        variant="outlined"
        fullWidth
        sx={{
          border: '1px solid #8e9192',
          borderRadius: 0,
          color: '#c4c7c8',
          fontFamily: 'JetBrains Mono, monospace',
          fontWeight: 700,
          fontSize: '11px',
          py: 1,
          mt: 4,
          letterSpacing: '0.08em',
          textTransform: 'uppercase',
          bgcolor: 'transparent',
          '&:hover': {
            bgcolor: '#ffffff',
            color: '#000000',
            borderColor: '#ffffff',
          },
          transition: 'all 0.15s ease-in-out',
        }}
      >
        Refresh Node States
      </Button>
    </Box>
  );
};
