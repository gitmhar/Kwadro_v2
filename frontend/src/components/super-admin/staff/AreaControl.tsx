import React from 'react';
import { Box, Typography, ButtonBase } from '@mui/material';
import { themeColors, themeFonts } from './themeColors';

export interface ZoneUnit {
  id: string;
  name: string;
  status: 'ACTIVE' | 'OFFLINE' | 'NEW';
}

export interface Zone {
  id: string;
  name: string;
  subtitle: string;
  units: ZoneUnit[];
}

interface AreaControlProps {
  zones: Zone[];
  onAuthorizeNewZone: () => void;
}

export const AreaControl: React.FC<AreaControlProps> = ({ zones, onAuthorizeNewZone }) => {
  const renderUnitBadge = (unit: ZoneUnit) => {
    switch (unit.status) {
      case 'NEW':
        return (
          <Box
            key={unit.id}
            sx={{
              backgroundColor: themeColors.primary,
              color: themeColors.background,
              px: 1,
              py: 0.5,
              ...themeFonts.labelMono,
              fontSize: '9px',
              fontWeight: 'bold',
            }}
          >
            {unit.name}
          </Box>
        );
      case 'ACTIVE':
        return (
          <Box
            key={unit.id}
            sx={{
              backgroundColor: themeColors.surfaceContainerHigh,
              color: themeColors.primary,
              px: 1,
              py: 0.5,
              border: `1px solid ${themeColors.primary}33`, // 20% opacity primary border
              ...themeFonts.labelMono,
              fontSize: '9px',
            }}
          >
            {unit.name}
          </Box>
        );
      case 'OFFLINE':
      default:
        return (
          <Box
            key={unit.id}
            sx={{
              backgroundColor: themeColors.surfaceContainerHigh,
              color: themeColors.onSurfaceVariant,
              px: 1,
              py: 0.5,
              border: `1px solid ${themeColors.outlineVariant}`,
              opacity: 0.5,
              ...themeFonts.labelMono,
              fontSize: '9px',
            }}
          >
            {unit.name}
          </Box>
        );
    }
  };

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
          p: 2,
          borderBottom: `1px solid ${themeColors.outlineVariant}`,
          backgroundColor: themeColors.surfaceContainerHigh,
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
            hub
          </span>{' '}
          AREA CONTROL / ZONES
        </Typography>
      </Box>

      {/* Content */}
      <Box
        sx={{
          p: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          flexGrow: 1,
          overflowY: 'auto',
          '&::-webkit-scrollbar': {
            width: '4px',
          },
          '&::-webkit-scrollbar-track': {
            background: themeColors.background,
          },
          '&::-webkit-scrollbar-thumb': {
            background: '#2e2e2e',
          },
        }}
      >
        {zones.map((zone) => (
          <Box
            key={zone.id}
            sx={{
              backgroundColor: themeColors.background,
              border: `1px solid ${themeColors.outlineVariant}`,
              p: 2,
            }}
          >
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                mb: 1.5,
              }}
            >
              <Typography
                sx={{
                  ...themeFonts.labelMono,
                  fontSize: '11px',
                  color: themeColors.primary,
                  fontWeight: 'bold',
                }}
              >
                {zone.name}
              </Typography>
              <Typography
                sx={{
                  ...themeFonts.labelMono,
                  fontSize: '9px',
                  color: themeColors.onSurfaceVariant,
                }}
              >
                {zone.subtitle}
              </Typography>
            </Box>
            <Box
              sx={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: 1,
              }}
            >
              {zone.units.map(renderUnitBadge)}
            </Box>
          </Box>
        ))}

        {/* Add Zone Button */}
        <ButtonBase
          onClick={onAuthorizeNewZone}
          sx={{
            width: '100%',
            border: `2px dashed ${themeColors.outlineVariant}`,
            p: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            ...themeFonts.labelMono,
            fontSize: '10px',
            color: themeColors.onSurfaceVariant,
            transition: 'all 0.15s ease',
            '&:hover': {
              borderColor: themeColors.primary,
              color: themeColors.primary,
            },
          }}
        >
          + AUTHORIZE NEW ZONE
        </ButtonBase>
      </Box>
    </Box>
  );
};
export type { AreaControlProps };
