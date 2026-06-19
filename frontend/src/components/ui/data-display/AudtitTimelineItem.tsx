import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import StatusChip from "./StatusChip";

export interface AuditEntry {
  id: string;
  time: string;
  title: string;
  desc: string;
  active: boolean;
}

interface AuditTimelineItemProps {
  entry: AuditEntry;
  isLast?: boolean;
}

export default function AuditTimelineItem({
  entry,
  isLast,
}: AuditTimelineItemProps) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <TimelineItem>
      <TimelineSeparator>
        <TimelineDot
          sx={{
            bgcolor: entry.active ? "#000000" : "#D1D1D1",
            boxShadow: entry.active ? "0 0 0 4px rgba(0,0,0,0.05)" : "none",
            width: 12,
            height: 12,
            my: 1.5,
          }}
        />
        {!isLast && (
          <TimelineConnector sx={{ bgcolor: "#E0E0E0", width: "1px" }} />
        )}
      </TimelineSeparator>
      <TimelineContent sx={{ pb: 6, ml: { xs: 1, md: 3 } }}>
        <Box
          sx={{
            display: "flex",
            flexDirection: isMobile ? "column" : "row",
            justifyContent: "space-between",
            alignItems: "flex-start",
            gap: isMobile ? 1.5 : 0,
          }}
        >
          <Box sx={{ maxWidth: { md: "80%" } }}>
            <Typography
              variant="caption"
              sx={{
                fontWeight: 700,
                color: entry.active ? "#1A1C1F" : "#A3A3A3",
                letterSpacing: 0.5,
              }}
            >
              {entry.time}
            </Typography>
            <Typography
              variant="body1"
              sx={{
                fontWeight: 700,
                color: entry.active ? "#1A1C1F" : "#A3A3A3",
                mt: 0.5,
                lineHeight: 1.3,
              }}
            >
              {entry.title}
            </Typography>
            <Typography variant="body2" sx={{ color: "#A3A3A3", mt: 0.5 }}>
              {entry.desc}
            </Typography>
          </Box>

          <StatusChip
            label={entry.id}
            sx={{
              bgcolor: "#fff",
              color: entry.active ? "#1A1C1C" : "#A3A3A3",
              fontWeight: 700,
              fontSize: "0.65rem",
              borderRadius: "8px",
              height: "28px",
              border: "1px solid #E5E7EB",
              alignSelf: "flex-start",
              mt: isMobile ? 1 : 0.5,
            }}
          />
        </Box>
      </TimelineContent>
    </TimelineItem>
  );
}
