import React from 'react';
import { Box, Typography } from '@mui/material';
import { themeColors, themeFonts } from './themeColors';

export interface StaffMember {
  id: string;
  name: string;
  avatarUrl: string;
  role: string;
  status: 'ACTIVE' | 'OFFLINE' | 'FLAGGED';
  location: string;
  shift: string;
  kpi: number;
}

interface StaffDirectoryItemProps {
  staff: StaffMember;
  isActive: boolean;
  onSelect: (staff: StaffMember) => void;
}

export const StaffDirectoryItem: React.FC<StaffDirectoryItemProps> = ({
  staff,
  isActive,
  onSelect,
}) => {
  const getStatusBadge = () => {
    switch (staff.status) {
      case 'ACTIVE':
        return (
          <Box
            sx={{
              ...themeFonts.labelMono,
              fontSize: '8px',
              backgroundColor: themeColors.primary,
              color: themeColors.background,
              px: 1,
              py: '2px',
              fontWeight: 'bold',
            }}
          >
            ACTIVE
          </Box>
        );
      case 'FLAGGED':
        return (
          <Box
            sx={{
              ...themeFonts.labelMono,
              fontSize: '8px',
              border: `1px solid ${themeColors.error}50`,
              color: themeColors.error,
              px: 1,
              py: '2px',
            }}
          >
            FLAGGED
          </Box>
        );
      case 'OFFLINE':
      default:
        return (
          <Box
            sx={{
              ...themeFonts.labelMono,
              fontSize: '8px',
              color: themeColors.onSurfaceVariant,
              px: 1,
              py: '2px',
            }}
          >
            OFFLINE
          </Box>
        );
    }
  };

  return (
    <Box
      onClick={() => onSelect(staff)}
      sx={{
        backgroundColor: isActive ? themeColors.surfaceContainerHigh : themeColors.background,
        borderLeft: isActive ? `4px solid ${themeColors.primary}` : '4px solid transparent',
        border: isActive ? 'none' : `1px solid ${themeColors.outlineVariant}`,
        p: 1.5,
        display: 'flex',
        gap: 1.5,
        cursor: 'pointer',
        transition: 'background-color 0.15s ease, border-color 0.15s ease',
        '&:hover': {
          backgroundColor: themeColors.surfaceContainerHigh,
          '& .staff-name': {
            color: themeColors.primary,
          },
        },
      }}
    >
      <Box
        sx={{
          width: 40,
          height: 40,
          backgroundColor: isActive ? themeColors.background : themeColors.surfaceContainerHigh,
          border: `1px solid ${themeColors.outlineVariant}`,
          flexShrink: 0,
          overflow: 'hidden',
        }}
      >
        <Box
          component="img"
          src={staff.avatarUrl}
          alt={staff.name}
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            filter: 'grayscale(100%)',
          }}
        />
      </Box>

      <Box sx={{ flexGrow: 1, minWidth: 0 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Typography
            className="staff-name"
            sx={{
              ...themeFonts.labelMono,
              fontSize: '12px',
              color: isActive ? themeColors.primary : themeColors.onSurface,
              textTransform: 'uppercase',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              whiteSpace: 'nowrap',
              transition: 'color 0.15s ease',
            }}
          >
            {staff.name}
          </Typography>
          {getStatusBadge()}
        </Box>

        <Typography
          sx={{
            ...themeFonts.labelMono,
            fontSize: '9px',
            color: themeColors.onSurfaceVariant,
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
            mt: 0.5,
          }}
        >
          {staff.role}
        </Typography>

        <Box sx={{ mt: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Typography
            sx={{
              ...themeFonts.labelMono,
              fontSize: '8px',
              color: themeColors.outline,
            }}
          >
            {staff.location} / {staff.shift}
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <Typography
              sx={{
                ...themeFonts.labelMono,
                fontSize: '8px',
                color: themeColors.outline,
              }}
            >
              KPI
            </Typography>
            <Typography
              sx={{
                ...themeFonts.labelMono,
                fontSize: '10px',
                color: staff.status === 'FLAGGED' ? themeColors.error : themeColors.primary,
              }}
            >
              {staff.kpi.toFixed(1)}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};
