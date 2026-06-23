import React from 'react';
import { Box, Typography, Stack, IconButton } from '@mui/material';
import LockIcon from '@mui/icons-material/Lock';

interface MaintenanceModeProps {
  isFrozen?: boolean;
  onToggleFreeze?: (frozen: boolean) => void;
}

export const MaintenanceMode: React.FC<MaintenanceModeProps> = ({
  isFrozen = false,
  onToggleFreeze,
}) => {
  const handleToggle = () => {
    if (onToggleFreeze) {
      onToggleFreeze(!isFrozen);
    }
  };

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
        <Stack direction="row" alignItems="center" spacing={1} sx={{ mb: 2 }}>
          <LockIcon sx={{ color: '#ffb4ab', opacity: 0.8, fontSize: 20 }} />
          <Typography
            variant="subtitle1"
            sx={{
              fontFamily: 'Inter, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#ffffff',
            }}
          >
            Maintenance Mode
          </Typography>
        </Stack>
        <Typography
          sx={{
            fontFamily: 'Inter, sans-serif',
            fontSize: '12px',
            color: 'text.secondary',
            opacity: 0.4,
            lineHeight: 1.6,
            mb: 4,
          }}
        >
          Freezes the core database cluster to prevent write operations during structural migrations or emergency patching.
        </Typography>
      </Box>

      <Box
        sx={{
          bgcolor: '#000000',
          border: '1px solid #2E2E2E',
          p: 2,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
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
            Global Freeze
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
            STATUS: {isFrozen ? 'ACTIVE' : 'DEACTIVATED'}
          </Typography>
        </Box>

        {/* Custom Toggle Switch to match design EXACTLY */}
        <Box
          onClick={handleToggle}
          sx={{
            width: 56,
            height: 28,
            bgcolor: isFrozen ? '#ffb4ab' : '#2E2E2E',
            borderRadius: '14px',
            p: '4px',
            cursor: 'pointer',
            transition: 'background-color 0.2s ease',
            position: 'relative',
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <Box
            sx={{
              width: 20,
              height: 20,
              bgcolor: isFrozen ? '#690005' : '#ffffff',
              borderRadius: '50%',
              transition: 'transform 0.2s ease, background-color 0.2s ease',
              transform: isFrozen ? 'translateX(28px)' : 'translateX(0px)',
            }}
          />
        </Box>
      </Box>
    </Box>
  );
};
