import { Box, Typography } from "@mui/material";
import BadgeIcon from "@mui/icons-material/Badge";
import { cueColors } from "../../../theme/dashboard/cueColors";

interface ActivityItem {
  id: string;
  name: string;
  action: string;
  time: string;
  detail: string;
}

export default function StaffActivitySnapshot() {
  const activities: ActivityItem[] = [
    {
      id: "1",
      name: "M. Chen",
      action: "checked in",
      time: "08:45",
      detail: "Location: HKG-Central",
    },
    {
      id: "2",
      name: "J. Smith",
      action: "initiated table maintenance",
      time: "09:12",
      detail: "Table: 12 | Status: Offline",
    },
    {
      id: "3",
      name: "L. Valenti",
      action: "processed refund",
      time: "09:44",
      detail: "Transaction ID: #99021-AX",
    },
    {
      id: "4",
      name: "A. Russo",
      action: "Shift Leader Override",
      time: "10:05",
      detail: "Action: POS Price Unlock",
    },
    {
      id: "5",
      name: "K. Tanaka",
      action: "session terminated",
      time: "10:15",
      detail: "Reason: Shift End | Location: TYO-Shibuya",
    },
  ];

  return (
    <Box
      sx={{
        backgroundColor: cueColors.surfaceContainer,
        border: `1px solid ${cueColors.outlineVariant}`,
        p: "24px",
        height: "400px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <Typography
        sx={{
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "11px",
          fontWeight: "bold",
          color: cueColors.onSurface,
          textTransform: "uppercase",
          mb: "24px",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        <BadgeIcon sx={{ fontSize: "18px", color: cueColors.primary }} />
        STAFF ACTIVITY SNAPSHOT
      </Typography>

      {/* Log Feed */}
      <Box
        sx={{
          flexGrow: 1,
          overflowY: "auto",
          pr: "8px",
          "&::-webkit-scrollbar": { width: "4px" },
          "&::-webkit-scrollbar-track": { background: cueColors.surface },
          "&::-webkit-scrollbar-thumb": { background: "#2E2E2E" },
        }}
      >
        {activities.map((activity) => (
          <Box
            key={activity.id}
            sx={{
              position: "relative",
              pl: "24px",
              borderLeft: `1px solid ${cueColors.outlineVariant}`,
              pb: "16px",
            }}
          >
            {/* Rigid Square Marker Dot */}
            <Box
              sx={{
                position: "absolute",
                left: "-4.5px",
                top: "6px",
                width: "8px",
                height: "8px",
                backgroundColor: cueColors.primary,
                borderRadius: 0,
              }}
            />

            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: "4px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: "Inter, sans-serif",
                  fontSize: "14px",
                  color: cueColors.onSurface,
                }}
              >
                <strong>{activity.name}</strong>{" "}
                <span style={{ opacity: 0.7 }}>{activity.action}</span>
              </Typography>
              <Typography
                sx={{
                  color: cueColors.onSurfaceVariant,
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                }}
              >
                {activity.time}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontSize: "11px",
                fontFamily: '"JetBrains Mono", monospace',
                textTransform: "uppercase",
                opacity: 0.5,
                color: cueColors.onSurface,
              }}
            >
              {activity.detail}
            </Typography>
          </Box>
        ))}
      </Box>
    </Box>
  );
}
