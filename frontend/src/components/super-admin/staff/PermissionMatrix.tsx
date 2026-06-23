import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { themeColors, themeFonts } from './themeColors';

export interface SystemPermission {
  id: string;
  name: string;
  description: string;
  enabled: boolean;
}

interface PermissionMatrixProps {
  accessLevelName: string;
  permissions: SystemPermission[];
  onTogglePermission: (id: string) => void;
  onReset: () => void;
  onCommit: () => void;
}

export const PermissionMatrix: React.FC<PermissionMatrixProps> = ({
  accessLevelName,
  permissions,
  onTogglePermission,
  onReset,
  onCommit,
}) => {
  return (
    <Box
      sx={{
        backgroundColor: themeColors.surfaceContainer,
        border: `1px solid ${themeColors.outlineVariant}`,
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 3,
          borderBottom: `1px solid ${themeColors.outlineVariant}`,
          backgroundColor: themeColors.surfaceContainerHigh,
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: 2,
        }}
      >
        <Box>
          <Typography
            sx={{
              ...themeFonts.labelMono,
              fontSize: '14px',
              color: themeColors.primary,
              fontWeight: 'bold',
            }}
          >
            PERMISSION ARCHITECTURE
          </Typography>
          <Typography
            sx={{
              ...themeFonts.labelMono,
              fontSize: '10px',
              color: themeColors.onSurfaceVariant,
              mt: 0.5,
            }}
          >
            MODIFYING ACCESS LEVEL:{' '}
            <span style={{ color: themeColors.primary }}>{accessLevelName.toUpperCase()}</span>
          </Typography>
        </Box>
        <Box sx={{ display: 'flex', gap: 1 }}>
          <ButtonBase
            onClick={onReset}
            sx={{
              px: 1.5,
              py: 0.75,
              border: `1px solid ${themeColors.outlineVariant}`,
              ...themeFonts.labelMono,
              fontSize: '10px',
              color: themeColors.primary,
              transition: 'background-color 0.15s ease',
              '&:hover': {
                backgroundColor: themeColors.surfaceBright,
              },
            }}
          >
            RESET
          </ButtonBase>
          <ButtonBase
            onClick={onCommit}
            sx={{
              px: 2,
              py: 0.75,
              backgroundColor: themeColors.primary,
              color: themeColors.onPrimary,
              fontWeight: 'bold',
              ...themeFonts.labelMono,
              fontSize: '10px',
              transition: 'background-color 0.15s ease',
              '&:hover': {
                backgroundColor: themeColors.onSurface,
              },
            }}
          >
            COMMIT
          </ButtonBase>
        </Box>
      </Box>

      {/* Permission Rows */}
      <Box sx={{ p: 3, display: 'flex', flexDirection: 'column' }}>
        <Typography
          sx={{
            ...themeFonts.labelMono,
            color: themeColors.primary,
            mb: 2.5,
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          }}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '14px' }}>
            lock_open
          </span>{' '}
          SYSTEM PERMISSION MATRIX
        </Typography>

        {permissions.map((perm, idx) => {
          const isLast = idx === permissions.length - 1;
          return (
            <Box
              key={perm.id}
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                py: 2,
                borderBottom: isLast ? 'none' : `1px solid rgba(68, 71, 72, 0.3)`, // outlineVariant at 30% opacity
                '&:hover': {
                  backgroundColor: 'rgba(31, 32, 32, 0.5)', // permission-row:hover style
                },
                px: 1,
                mx: -1,
                transition: 'background-color 0.15s ease',
              }}
            >
              <Box sx={{ pr: 2 }}>
                <Typography
                  sx={{
                    ...themeFonts.labelMono,
                    fontSize: '12px',
                    color: themeColors.primary,
                  }}
                >
                  {perm.name}
                </Typography>
                <Typography
                  sx={{
                    ...themeFonts.bodySm,
                    fontSize: '10px',
                    color: themeColors.onSurfaceVariant,
                    mt: 0.5,
                  }}
                >
                  {perm.description}
                </Typography>
              </Box>

              {/* Custom Toggle Switch */}
              <Box
                onClick={() => onTogglePermission(perm.id)}
                sx={{
                  width: 40,
                  height: 20,
                  backgroundColor: perm.enabled
                    ? themeColors.primary
                    : themeColors.surfaceContainerHighest,
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'background-color 0.15s ease',
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    position: 'absolute',
                    top: 2,
                    left: perm.enabled ? 'auto' : 2,
                    right: perm.enabled ? 2 : 'auto',
                    width: 16,
                    height: 16,
                    backgroundColor: perm.enabled ? themeColors.background : themeColors.outline,
                    transition: 'all 0.15s ease',
                  }}
                />
              </Box>
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};
