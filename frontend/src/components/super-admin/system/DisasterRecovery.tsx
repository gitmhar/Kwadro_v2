import React from 'react';
import {
  Box,
  Typography,
  Stack,
  Button,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import SettingsBackupRestoreIcon from '@mui/icons-material/SettingsBackupRestore';
import InfoIcon from '@mui/icons-material/Info';

export interface RestorePoint {
  timestamp: string;
  snapshotId: string;
  size: string;
  integrity: 'VERIFIED' | 'FAILED' | 'PENDING';
}

interface DisasterRecoveryProps {
  restorePoints?: RestorePoint[];
  onCreateSnapshot?: () => void;
  onRollback?: (snapshotId: string) => void;
}

const defaultRestorePoints: RestorePoint[] = [
  {
    timestamp: '2023-10-27 04:00:01',
    snapshotId: 'SYS_AUTO_BACKUP_20231027_0400',
    size: '2.4 GB',
    integrity: 'VERIFIED',
  },
  {
    timestamp: '2023-10-26 04:00:05',
    snapshotId: 'SYS_AUTO_BACKUP_20231026_0400',
    size: '2.4 GB',
    integrity: 'VERIFIED',
  },
  {
    timestamp: '2023-10-25 23:42:00',
    snapshotId: 'SYS_MANUAL_PRE_MIGRATION',
    size: '2.3 GB',
    integrity: 'VERIFIED',
  },
];

export const DisasterRecovery: React.FC<DisasterRecoveryProps> = ({
  restorePoints = defaultRestorePoints,
  onCreateSnapshot,
  onRollback,
}) => {
  return (
    <Box
      sx={{
        bgcolor: '#141414',
        border: '1px solid #2E2E2E',
        p: 4,
      }}
    >
      <Stack
        direction={{ xs: 'column', md: 'row' }}
        justifyContent="space-between"
        alignItems={{ xs: 'flex-start', md: 'center' }}
        spacing={2}
        sx={{ mb: 4 }}
      >
        <Stack direction="row" alignItems="center" spacing={1.5}>
          <SettingsBackupRestoreIcon sx={{ color: 'text.secondary', opacity: 0.5, fontSize: 24 }} />
          <Box>
            <Typography
              variant="subtitle1"
              sx={{
                fontFamily: 'Inter, sans-serif',
                fontSize: '18px',
                fontWeight: 700,
                color: '#ffffff',
              }}
            >
              Automated Disaster Recovery
            </Typography>
            <Typography
              sx={{
                fontFamily: 'JetBrains Mono, monospace',
                fontSize: '10px',
                color: 'text.secondary',
                opacity: 0.4,
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                mt: 0.5,
              }}
            >
              Immutable Restore Points Table
            </Typography>
          </Box>
        </Stack>

        <Button
          onClick={onCreateSnapshot}
          variant="contained"
          sx={{
            bgcolor: '#ffffff',
            color: '#000000',
            fontFamily: 'JetBrains Mono, monospace',
            fontWeight: 900,
            fontSize: '11px',
            borderRadius: 0,
            px: 4,
            py: 1.5,
            letterSpacing: '0.05em',
            textTransform: 'uppercase',
            '&:hover': {
              bgcolor: '#ffffff',
              color: '#000000',
              letterSpacing: '0.12em',
            },
            transition: 'all 0.2s ease-in-out',
          }}
        >
          Create Emergency Snapshot
        </Button>
      </Stack>

      <TableContainer
        sx={{
          border: '1px solid #2E2E2E',
          bgcolor: '#000000',
          borderRadius: 0,
        }}
      >
        <Table sx={{ minWidth: 650 }}>
          <TableHead>
            <TableRow sx={{ bgcolor: '#292a2a', borderBottom: '1px solid #2E2E2E' }}>
              <TableCell
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'text.secondary',
                  opacity: 0.5,
                  borderBottom: 'none',
                  py: 1.5,
                  px: 2,
                }}
              >
                TIMESTAMP
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'text.secondary',
                  opacity: 0.5,
                  borderBottom: 'none',
                  py: 1.5,
                  px: 2,
                }}
              >
                SNAPSHOT_ID
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'text.secondary',
                  opacity: 0.5,
                  borderBottom: 'none',
                  py: 1.5,
                  px: 2,
                }}
              >
                SIZE
              </TableCell>
              <TableCell
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'text.secondary',
                  opacity: 0.5,
                  borderBottom: 'none',
                  py: 1.5,
                  px: 2,
                }}
              >
                INTEGRITY
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  fontFamily: 'JetBrains Mono, monospace',
                  fontSize: '11px',
                  fontWeight: 700,
                  color: 'text.secondary',
                  opacity: 0.5,
                  borderBottom: 'none',
                  py: 1.5,
                  px: 2,
                }}
              >
                ACTION
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {restorePoints.map((row, index) => (
              <TableRow
                key={index}
                sx={{
                  borderBottom: index < restorePoints.length - 1 ? '1px solid #2E2E2E' : 'none',
                  transition: 'background-color 0.15s ease',
                  '&:hover': {
                    bgcolor: '#1b1c1c',
                  },
                }}
              >
                <TableCell
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: '#e3e2e2',
                    borderBottom: 'none',
                    py: 2,
                    px: 2,
                  }}
                >
                  {row.timestamp}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    fontWeight: 700,
                    color: '#ffffff',
                    borderBottom: 'none',
                    py: 2,
                    px: 2,
                  }}
                >
                  {row.snapshotId}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    color: '#e3e2e2',
                    borderBottom: 'none',
                    py: 2,
                    px: 2,
                  }}
                >
                  {row.size}
                </TableCell>
                <TableCell
                  sx={{
                    fontFamily: 'JetBrains Mono, monospace',
                    fontSize: '11px',
                    borderBottom: 'none',
                    py: 2,
                    px: 2,
                  }}
                >
                  <Box
                    component="span"
                    sx={{
                      color:
                        row.integrity === 'VERIFIED'
                          ? '#22c55e'
                          : row.integrity === 'FAILED'
                          ? '#ffb4ab'
                          : '#e5e2e1',
                    }}
                  >
                    {row.integrity}
                  </Box>
                </TableCell>
                <TableCell
                  align="right"
                  sx={{
                    borderBottom: 'none',
                    py: 2,
                    px: 2,
                  }}
                >
                  <Button
                    onClick={() => onRollback && onRollback(row.snapshotId)}
                    variant="outlined"
                    sx={{
                      border: '1px solid #8e9192',
                      borderRadius: 0,
                      color: '#c4c7c8',
                      fontFamily: 'JetBrains Mono, monospace',
                      fontSize: '11px',
                      fontWeight: 500,
                      px: 2,
                      py: 0.5,
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
                    Rollback
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Stack direction="row" spacing={1} alignItems="center" sx={{ mt: 2, opacity: 0.4 }}>
        <InfoIcon sx={{ color: 'text.secondary', fontSize: 16 }} />
        <Typography
          sx={{
            fontFamily: 'JetBrains Mono, monospace',
            fontSize: '10px',
          }}
        >
          Restoring from a snapshot will overwrite all data since the timestamp. This action is logged and immutable.
        </Typography>
      </Stack>
    </Box>
  );
};
