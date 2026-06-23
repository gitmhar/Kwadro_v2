import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { themeColors, themeFonts } from './themeColors';

export interface AuditLogEntry {
  id: string;
  name: string;
  action: string;
  module: string;
  timestamp: string;
  riskLevel: 'LOW' | 'ELEVATED' | 'CRITICAL';
}

interface ActivityMonitorProps {
  logs: AuditLogEntry[];
  onViewAllLogs: () => void;
}

export const ActivityMonitor: React.FC<ActivityMonitorProps> = ({ logs, onViewAllLogs }) => {
  const getRiskBadge = (level: 'LOW' | 'ELEVATED' | 'CRITICAL') => {
    let bgColor = themeColors.outlineVariant;
    let textColor = themeColors.background;
    if (level === 'ELEVATED') {
      bgColor = themeColors.yellowElevated;
      textColor = '#000000';
    } else if (level === 'CRITICAL') {
      bgColor = themeColors.redCritical;
      textColor = '#ffffff';
    }

    return (
      <Box
        component="span"
        sx={{
          backgroundColor: bgColor,
          color: textColor,
          px: 1,
          py: 0.5,
          display: 'inline-block',
          ...themeFonts.labelMono,
          fontSize: '9px',
        }}
      >
        {level}
      </Box>
    );
  };

  return (
    <Box
      sx={{
        backgroundColor: themeColors.surfaceContainer,
        border: `1px solid ${themeColors.outlineVariant}`,
        display: 'flex',
        flexDirection: 'column',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${themeColors.outlineVariant}`,
          backgroundColor: themeColors.surfaceContainerHigh,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 1.5,
        }}
      >
        <Typography
          sx={{
            ...themeFonts.labelMono,
            color: themeColors.primary,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
            visibility
          </span>{' '}
          ADMIN ACTIVITY MONITORING
        </Typography>

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
          <Typography
            sx={{
              ...themeFonts.labelMono,
              fontSize: '9px',
              color: themeColors.onSurfaceVariant,
            }}
          >
            REAL-TIME TELEMETRY ACTIVE
          </Typography>
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: '#22c55e', // Green-500
              borderRadius: '50%',
              animation: 'pulse 2s infinite',
              '@keyframes pulse': {
                '0%': {
                  transform: 'scale(0.95)',
                  boxShadow: '0 0 0 0 rgba(34, 197, 94, 0.7)',
                },
                '70%': {
                  transform: 'scale(1)',
                  boxShadow: '0 0 0 6px rgba(34, 197, 94, 0)',
                },
                '100%': {
                  transform: 'scale(0.95)',
                  boxShadow: '0 0 0 0 rgba(34, 197, 94, 0)',
                },
              },
            }}
          />
        </Box>
      </Box>

      {/* Table Container */}
      <Box sx={{ overflowX: 'auto', width: '100%' }}>
        <Box
          component="table"
          sx={{
            width: '100%',
            textAlign: 'left',
            borderCollapse: 'collapse',
          }}
        >
          <Box component="thead">
            <Box
              component="tr"
              sx={{
                backgroundColor: themeColors.background,
                borderBottom: `1px solid ${themeColors.outlineVariant}`,
              }}
            >
              {['NAME', 'ACTION', 'MODULE', 'TIMESTAMP (UTC)', 'RISK LEVEL'].map((header) => (
                <Box
                  component="th"
                  key={header}
                  sx={{
                    p: 2,
                    color: themeColors.onSurfaceVariant,
                    ...themeFonts.tableHeader,
                  }}
                >
                  {header}
                </Box>
              ))}
            </Box>
          </Box>
          <Box component="tbody" sx={{ ...themeFonts.labelMono, fontSize: '11px' }}>
            {logs.map((log) => (
              <Box
                component="tr"
                key={log.id}
                sx={{
                  borderBottom: `1px solid rgba(68, 71, 72, 0.3)`,
                  transition: 'background-color 0.15s ease',
                  '&:hover': {
                    backgroundColor: themeColors.surfaceContainerHigh,
                  },
                }}
              >
                <Box component="td" sx={{ p: 2, color: themeColors.primary }}>
                  {log.name}
                </Box>
                <Box component="td" sx={{ p: 2, color: themeColors.onSurface }}>
                  {log.action}
                </Box>
                <Box component="td" sx={{ p: 2, color: themeColors.onSurface }}>
                  {log.module}
                </Box>
                <Box component="td" sx={{ p: 2, color: themeColors.onSurface }}>
                  {log.timestamp}
                </Box>
                <Box component="td" sx={{ p: 2 }}>
                  {getRiskBadge(log.riskLevel)}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>

      {/* Footer view details */}
      <Box
        sx={{
          p: 1.5,
          borderTop: `1px solid ${themeColors.outlineVariant}`,
          backgroundColor: themeColors.surfaceContainerLow,
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <ButtonBase
          onClick={onViewAllLogs}
          sx={{
            ...themeFonts.labelMono,
            fontSize: '10px',
            color: themeColors.onSurfaceVariant,
            transition: 'color 0.15s ease',
            display: 'flex',
            alignItems: 'center',
            gap: 1,
            '&:hover': {
              color: themeColors.primary,
            },
          }}
        >
          VIEW ALL SYSTEM LOGS{' '}
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
            arrow_forward
          </span>
        </ButtonBase>
      </Box>
    </Box>
  );
};
export type { ActivityMonitorProps };
