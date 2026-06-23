import React from 'react';
import { Box, Typography, Stack } from '@mui/material';
import HubIcon from '@mui/icons-material/Hub';
import CheckIcon from '@mui/icons-material/Check';
import WarningIcon from '@mui/icons-material/Warning';

export interface ApiEndpoint {
  name: string;
  endpoint: string;
  status: 'ok' | 'warning';
}

interface ApiManagementProps {
  endpoints?: ApiEndpoint[];
}

const defaultEndpoints: ApiEndpoint[] = [
  { name: 'Table Control System', endpoint: '/v2/tables', status: 'ok' },
  { name: 'Point of Sale Bridge', endpoint: '/v2/pos', status: 'warning' },
  { name: 'Customer Loyalty Sync', endpoint: '/v1/loyalty', status: 'ok' },
];

export const ApiManagement: React.FC<ApiManagementProps> = ({
  endpoints = defaultEndpoints,
}) => {
  return (
    <Box
      sx={{
        bgcolor: '#141414',
        border: '1px solid #2E2E2E',
        p: 3,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 3 }}>
        <HubIcon sx={{ color: 'text.secondary', opacity: 0.5, fontSize: 20 }} />
        <Typography
          variant="subtitle1"
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '18px',
            fontWeight: 700,
            color: '#ffffff',
          }}
        >
          API Management
        </Typography>
      </Stack>

      <Stack spacing={1.5} sx={{ flexGrow: 1 }}>
        {endpoints.map((ep, idx) => (
          <Box
            key={idx}
            sx={{
              p: 1.5,
              border: '1px solid #2E2E2E',
              bgcolor: '#000000',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              transition: 'border-color 0.15s ease-in-out',
              '&:hover': {
                borderColor: '#8e9192',
              },
            }}
          >
            <Box>
              <Typography
                sx={{
                  fontFamily: 'Inter, sans-serif',
                  fontSize: '14px',
                  fontWeight: 700,
                  color: '#e3e2e2',
                }}
              >
                {ep.name}
              </Typography>
              <Typography
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '10px',
                  color: 'text.secondary',
                  opacity: 0.5,
                  mt: 0.5,
                }}
              >
                ENDPOINT: {ep.endpoint}
              </Typography>
            </Box>
            {ep.status === 'ok' ? (
              <CheckIcon sx={{ color: '#22c55e', fontSize: 18 }} />
            ) : (
              <WarningIcon sx={{ color: '#ffb4ab', fontSize: 18 }} />
            )}
          </Box>
        ))}
      </Stack>
    </Box>
  );
};
