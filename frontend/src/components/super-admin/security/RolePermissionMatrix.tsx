import {
  Box,
  Typography,
  Button,
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell,
} from '@mui/material';
import CheckBoxIcon from '@mui/icons-material/CheckBox';
import CloseIcon from '@mui/icons-material/Close';
import { cueColors } from '../../../theme/dashboard/cueColors';

interface PermissionRow {
  feature: string;
  superAdmin: boolean;
  executive: boolean;
  opLead: boolean;
  financial: boolean;
  fieldStaff: boolean;
  guest: boolean;
}

const matrixData: PermissionRow[] = [
  {
    feature: 'SYSTEM_GLOBAL_CONFIG',
    superAdmin: true,
    executive: false,
    opLead: false,
    financial: false,
    fieldStaff: false,
    guest: false,
  },
  {
    feature: 'AUDIT_LOG_READ',
    superAdmin: true,
    executive: true,
    opLead: true,
    financial: false,
    fieldStaff: false,
    guest: false,
  },
  {
    feature: 'FINANCIAL_TX_APPROVE',
    superAdmin: true,
    executive: true,
    opLead: false,
    financial: true,
    fieldStaff: false,
    guest: false,
  },
  {
    feature: 'IOT_TABLE_CONTROL',
    superAdmin: true,
    executive: true,
    opLead: true,
    financial: false,
    fieldStaff: true,
    guest: false,
  },
];

const headerCellSx = {
  fontFamily: '"JetBrains Mono", monospace',
  fontSize: '0.6875rem',
  fontWeight: 700,
  letterSpacing: '0.08em',
  textTransform: 'uppercase' as const,
  color: cueColors.primary,
  opacity: 0.6,
  backgroundColor: cueColors.surfaceContainerHigh,
  borderBottom: `1px solid ${cueColors.outlineVariant}`,
  py: '12px',
  px: '16px',
};

const cellSx = {
  py: '12px',
  px: '16px',
  borderBottom: `1px solid ${cueColors.outlineVariant}`,
};

export default function RolePermissionMatrix() {
  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainerLow,
        border: `1px solid ${cueColors.outlineVariant}`,
        width: '100%',
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
          flexWrap: 'wrap',
          gap: '12px',
        }}
      >
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Typography
            sx={{
              fontFamily: '"JetBrains Mono", monospace',
              fontSize: '0.6875rem',
              fontWeight: 700,
              color: cueColors.primary,
              letterSpacing: '0.05em',
            }}
          >
            ROLE PERMISSION MATRIX
          </Typography>
          <Box
            sx={{
              fontSize: '0.625rem',
              px: '8px',
              py: '2px',
              backgroundColor: cueColors.surfaceBright,
              border: `1px solid ${cueColors.outlineVariant}`,
              fontFamily: '"JetBrains Mono", monospace',
              color: cueColors.primary,
            }}
          >
            v4.2 STABLE
          </Box>
        </Box>
        <Button
          variant="outlined"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: '0.6875rem',
            borderColor: cueColors.outlineVariant,
            color: cueColors.primary,
            px: '12px',
            py: '4px',
            borderRadius: 0,
            '&:hover': {
              borderColor: cueColors.primary,
              backgroundColor: cueColors.surfaceBright,
            },
          }}
        >
          EDIT ROLES
        </Button>
      </Box>

      {/* Table container */}
      <Box sx={{ overflowX: 'auto' }}>
        <Table sx={{ width: '100%', borderCollapse: 'collapse', textAlign: 'center' }}>
          <TableHead>
            <TableRow>
              <TableCell sx={{ ...headerCellSx, textAlign: 'left', minWidth: '180px' }}>Feature Scope</TableCell>
              <TableCell align="center" sx={headerCellSx}>Super Admin</TableCell>
              <TableCell align="center" sx={headerCellSx}>Executive</TableCell>
              <TableCell align="center" sx={headerCellSx}>Op Lead</TableCell>
              <TableCell align="center" sx={headerCellSx}>Financial</TableCell>
              <TableCell align="center" sx={headerCellSx}>Field Staff</TableCell>
              <TableCell align="center" sx={headerCellSx}>Guest</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {matrixData.map((row, idx) => (
              <TableRow
                key={idx}
                sx={{
                  transition: 'background-color 150ms ease-in-out',
                  '&:hover': {
                    backgroundColor: cueColors.surfaceBright,
                  },
                }}
              >
                <TableCell
                  sx={{
                    ...cellSx,
                    textAlign: 'left',
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: '0.75rem',
                    color: cueColors.onSurface,
                    opacity: 0.7,
                  }}
                >
                  {row.feature}
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  {row.superAdmin ? (
                    <CheckBoxIcon sx={{ color: cueColors.primary, fontSize: '0.875rem' }} />
                  ) : (
                    <CloseIcon sx={{ color: cueColors.onSurfaceVariant, opacity: 0.2, fontSize: '0.875rem' }} />
                  )}
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  {row.executive ? (
                    <CheckBoxIcon sx={{ color: cueColors.primary, fontSize: '0.875rem' }} />
                  ) : (
                    <CloseIcon sx={{ color: cueColors.onSurfaceVariant, opacity: 0.2, fontSize: '0.875rem' }} />
                  )}
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  {row.opLead ? (
                    <CheckBoxIcon sx={{ color: cueColors.primary, fontSize: '0.875rem' }} />
                  ) : (
                    <CloseIcon sx={{ color: cueColors.onSurfaceVariant, opacity: 0.2, fontSize: '0.875rem' }} />
                  )}
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  {row.financial ? (
                    <CheckBoxIcon sx={{ color: cueColors.primary, fontSize: '0.875rem' }} />
                  ) : (
                    <CloseIcon sx={{ color: cueColors.onSurfaceVariant, opacity: 0.2, fontSize: '0.875rem' }} />
                  )}
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  {row.fieldStaff ? (
                    <CheckBoxIcon sx={{ color: cueColors.primary, fontSize: '0.875rem' }} />
                  ) : (
                    <CloseIcon sx={{ color: cueColors.onSurfaceVariant, opacity: 0.2, fontSize: '0.875rem' }} />
                  )}
                </TableCell>
                <TableCell align="center" sx={cellSx}>
                  {row.guest ? (
                    <CheckBoxIcon sx={{ color: cueColors.primary, fontSize: '0.875rem' }} />
                  ) : (
                    <CloseIcon sx={{ color: cueColors.onSurfaceVariant, opacity: 0.2, fontSize: '0.875rem' }} />
                  )}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
    </Box>
  );
}
