import { Box, Button, Typography } from '@mui/material';
import { cueColors } from './cueColors';

export interface AlertItemProps {
  type: 'FAILED_PAYMENT' | 'ABUSE_DETECTION' | 'LATENCY_WARNING' | string;
  time: string;
  message: string;
  buttonLabel: string;
  onAction?: () => void;
}

export default function AlertItem({
  type,
  time,
  message,
  buttonLabel,
  onAction,
}: AlertItemProps) {
  const isLatency = type === 'LATENCY_WARNING';
  const typeColor = isLatency ? cueColors.onSecondaryContainer : cueColors.error;

  return (
    <Box
      sx={{
        p: '16px',
        borderBottom: `1px solid ${cueColors.outlineVariant}`,
        transition: 'background-color 0.15s',
        '&:hover': {
          backgroundColor: cueColors.surfaceBright,
        },
      }}
    >
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: '4px' }}>
        <Typography
          sx={{
            color: typeColor,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
            fontWeight: 'bold',
          }}
        >
          {type}
        </Typography>
        <Typography
          sx={{
            color: cueColors.onSurfaceVariant,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '10px',
          }}
        >
          {time}
        </Typography>
      </Box>

      <Typography
        sx={{
          fontFamily: 'Inter, sans-serif',
          fontSize: '14px',
          lineHeight: 1.5,
          color: cueColors.onSurface,
          mb: '8px',
        }}
      >
        {message}
      </Typography>

      <Button
        variant="outlined"
        onClick={onAction}
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: '10px',
          color: cueColors.primary,
          borderColor: cueColors.primary,
          borderRadius: 0,
          px: '8px',
          py: '4px',
          minWidth: 0,
          lineHeight: 1,
          transition: 'all 0.15s',
          '&:hover': {
            backgroundColor: cueColors.primary,
            color: cueColors.onPrimary,
            borderColor: cueColors.primary,
          },
        }}
      >
        {buttonLabel}
      </Button>
    </Box>
  );
}
