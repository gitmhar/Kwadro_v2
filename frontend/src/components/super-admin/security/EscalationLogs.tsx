import React from 'react';
import { Box, Typography, Button, Stack } from '@mui/material';
import PriorityHighIcon from '@mui/icons-material/PriorityHigh';
import { cueColors } from '../../../theme/dashboard/cueColors';

export default function EscalationLogs() {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        boxSizing: 'border-box',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: '16px',
          borderBottom: `1px solid ${cueColors.outlineVariant}`,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.6875rem',
            fontWeight: 700,
            color: cueColors.primary,
            letterSpacing: '0.05em',
          }}
        >
          ESCALATION LOGS
        </Typography>
        <PriorityHighIcon sx={{ color: '#eab308', fontSize: '1rem' }} />
      </Box>

      {/* Logs list */}
      <Stack spacing={2} sx={{ p: '16px', flex: 1, overflowY: 'auto' }}>
        {/* Log Item 1 */}
        <Box
          sx={{
            p: '12px',
            backgroundColor: cueColors.surfaceDim,
            borderLeft: '2px solid #eab308',
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '4px' }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                color: '#eab308',
              }}
            >
              PRIVILEGE_CHANGE
            </Typography>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                opacity: 0.4,
              }}
            >
              2M AGO
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', color: cueColors.onSurfaceVariant, lineHeight: 1.3 }}>
            <Box component="span" sx={{ color: cueColors.primary, fontWeight: 700 }}>m.chen</Box> promoted to <i>Regional Lead</i> by system_auto.
          </Typography>
          <Button
            variant="text"
            sx={{
              mt: '8px',
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.625rem',
              color: cueColors.primary,
              textDecoration: 'underline',
              p: 0,
              minWidth: 'auto',
              textTransform: 'uppercase',
              '&:hover': { textDecoration: 'underline', backgroundColor: 'transparent' },
            }}
          >
            REVIEW SCOPE
          </Button>
        </Box>

        {/* Log Item 2 */}
        <Box
          sx={{
            p: '12px',
            backgroundColor: cueColors.surfaceDim,
            borderLeft: `2px solid ${cueColors.primary}`,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '4px' }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                opacity: 0.5,
              }}
            >
              SUDO_EXECUTION
            </Typography>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                opacity: 0.4,
              }}
            >
              15M AGO
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', color: cueColors.onSurfaceVariant, lineHeight: 1.3 }}>
            <Box component="span" sx={{ color: cueColors.primary, fontWeight: 700 }}>v.novak</Box> executed <Box component="code" sx={{ backgroundColor: '#000', px: '4px', fontFamily: '"JetBrains Mono", monospace' }}>DB_FLUSH_CACHE</Box>.
          </Typography>
        </Box>

        {/* Log Item 3 */}
        <Box
          sx={{
            p: '12px',
            backgroundColor: cueColors.surfaceDim,
            borderLeft: `2px solid ${cueColors.error}`,
          }}
        >
          <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: '4px' }}>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                color: cueColors.error,
              }}
            >
              ESCALATION_DENIED
            </Typography>
            <Typography
              sx={{
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.625rem',
                opacity: 0.4,
              }}
            >
              1H AGO
            </Typography>
          </Box>
          <Typography sx={{ fontSize: '0.75rem', color: cueColors.onSurfaceVariant, lineHeight: 1.3 }}>
            <Box component="span" sx={{ color: cueColors.primary, fontWeight: 700 }}>j.smith</Box> attempted restricted access to <Box component="span" sx={{ color: cueColors.error }}>CREDIT_TRANSFERS</Box>.
          </Typography>
          <Box sx={{ mt: '8px', display: 'flex', gap: '8px' }}>
            <Button
              variant="contained"
              sx={{
                backgroundColor: cueColors.error,
                color: cueColors.onError,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.5625rem',
                fontWeight: 700,
                px: '8px',
                py: '4px',
                borderRadius: 0,
                boxShadow: 'none',
                minWidth: 'auto',
                '&:hover': { backgroundColor: cueColors.error, opacity: 0.9, boxShadow: 'none' },
              }}
            >
              REVOKE ACCESS
            </Button>
            <Button
              variant="outlined"
              sx={{
                borderColor: cueColors.outlineVariant,
                color: cueColors.primary,
                fontFamily: '"JetBrains Mono", monospace',
                fontSize: '0.5625rem',
                px: '8px',
                py: '4px',
                borderRadius: 0,
                minWidth: 'auto',
                '&:hover': { borderColor: cueColors.primary, backgroundColor: cueColors.surfaceBright },
              }}
            >
              DISMISS
            </Button>
          </Box>
        </Box>
      </Stack>
    </Box>
  );
}
