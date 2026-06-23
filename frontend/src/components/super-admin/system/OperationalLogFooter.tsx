import React from 'react';
import { Box, Stack, Typography, IconButton } from '@mui/material';
import TerminalIcon from '@mui/icons-material/Terminal';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';

interface OperationalLogFooterProps {
  coreStatus?: string;
  lastSync?: string;
  activeUser?: string;
  onTerminalClick?: () => void;
  onHelpClick?: () => void;
}

export const OperationalLogFooter: React.FC<OperationalLogFooterProps> = ({
  coreStatus = 'STABLE',
  lastSync = '14:02:44',
  activeUser = 'SUPER_ADMIN_01',
  onTerminalClick,
  onHelpClick,
}) => {
  return (
    <Box
      sx={{
        mt: 5,
        border: '1px solid #444748',
        bgcolor: '#1b1c1c',
        p: 2,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: 2,
      }}
    >
      <Stack
        direction="row"
        spacing={{ xs: 2, sm: 3 }}
        alignItems="center"
        divider={<Box sx={{ width: 1, height: 16, bgcolor: '#444748' }} />}
        sx={{ flexWrap: 'wrap', gap: { xs: 1, sm: 0 } }}
      >
        <Stack direction="row" spacing={1} alignItems="center">
          <Box sx={{ width: 8, height: 8, borderRadius: '50%', bgcolor: '#22c55e' }} />
          <Typography
            sx={{
              fontFamily: 'JetBrains Mono, monospace',
              fontSize: '10px',
              color: 'text.secondary',
              opacity: 0.5,
              fontWeight: 500,
              letterSpacing: '0.05em',
            }}
          >
            CORE STATUS: {coreStatus}
          </Typography>
        </Stack>

        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'text.secondary',
            opacity: 0.5,
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          LAST SYNC: {lastSync}
        </Typography>

        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
            color: 'text.secondary',
            opacity: 0.5,
            fontWeight: 500,
            letterSpacing: '0.05em',
          }}
        >
          ACTIVE USER: {activeUser}
        </Typography>
      </Stack>

      <Stack direction="row" spacing={2}>
        <IconButton
          onClick={onTerminalClick}
          size="small"
          sx={{
            color: '#c4c7c8',
            p: 0.5,
            borderRadius: 0,
            '&:hover': {
              color: '#ffffff',
              bgcolor: 'transparent',
            },
          }}
        >
          <TerminalIcon sx={{ fontSize: 18 }} />
        </IconButton>
        <IconButton
          onClick={onHelpClick}
          size="small"
          sx={{
            color: '#c4c7c8',
            p: 0.5,
            borderRadius: 0,
            '&:hover': {
              color: '#ffffff',
              bgcolor: 'transparent',
            },
          }}
        >
          <HelpOutlineIcon sx={{ fontSize: 18 }} />
        </IconButton>
      </Stack>
    </Box>
  );
};
