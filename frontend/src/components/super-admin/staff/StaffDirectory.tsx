import { Box, Typography } from "@mui/material";
import { themeColors, themeFonts } from "./themeColors";
import { StaffDirectoryItem, type StaffMember } from "./StaffDirectoryItem";

interface StaffDirectoryProps {
  staffList: StaffMember[];
  activeStaffId: string;
  onSelectStaff: (staff: StaffMember) => void;
  totalActiveCount: number;
  pendingRequestsCount: number;
}

export default function StaffDirectory({
  staffList,
  activeStaffId,
  onSelectStaff,
  totalActiveCount,
  pendingRequestsCount,
}: StaffDirectoryProps) {
  return (
    <Box
      sx={{
        backgroundColor: themeColors.surfaceContainer,
        border: `1px solid ${themeColors.outlineVariant}`,
        display: "flex",
        flexDirection: "column",
        height: "100%",
        overflow: "hidden",
      }}
    >
      {/* Header */}
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid ${themeColors.outlineVariant}`,
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: themeColors.surfaceContainerHigh,
        }}
      >
        <Typography
          component="div"
          sx={{
            ...themeFonts.labelMono,
            color: themeColors.primary,
            display: "flex",
            alignItems: "center",
            gap: 1,
          }}
        >
          <Box
            sx={{
              width: 8,
              height: 8,
              backgroundColor: themeColors.primary,
            }}
          />
          STAFF DIRECTORY
        </Typography>
      </Box>

      {/* Staff List */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          p: 1.5,
          display: "flex",
          flexDirection: "column",
          gap: 1.5,
          /* Scrollbar styling */
          "&::-webkit-scrollbar": {
            width: "4px",
          },
          "&::-webkit-scrollbar-track": {
            background: themeColors.background,
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#2e2e2e",
          },
        }}
      >
        {staffList.map((staff) => (
          <StaffDirectoryItem
            key={staff.id}
            staff={staff}
            isActive={staff.id === activeStaffId}
            onSelect={onSelectStaff}
          />
        ))}
      </Box>

      {/* Footer Counters */}
      <Box
        sx={{
          p: 2,
          borderTop: `1px solid ${themeColors.outlineVariant}`,
          backgroundColor: themeColors.surfaceContainerLow,
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 1,
        }}
      >
        <Box>
          <Typography
            sx={{
              ...themeFonts.labelMono,
              fontSize: "8px",
              color: themeColors.onSurfaceVariant,
              textTransform: "uppercase",
            }}
          >
            Total Active Staff
          </Typography>
          <Typography
            sx={{
              ...themeFonts.displayLg,
              fontSize: "18px",
              color: themeColors.primary,
            }}
          >
            {totalActiveCount.toLocaleString()}
          </Typography>
        </Box>
        <Box
          sx={{
            borderLeft: `1px solid ${themeColors.outlineVariant}`,
            pl: 2,
          }}
        >
          <Typography
            sx={{
              ...themeFonts.labelMono,
              fontSize: "8px",
              color: themeColors.onSurfaceVariant,
              textTransform: "uppercase",
            }}
          >
            Pending Access Requests
          </Typography>
          <Typography
            sx={{
              ...themeFonts.displayLg,
              fontSize: "18px",
              color: themeColors.error,
            }}
          >
            {pendingRequestsCount}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
