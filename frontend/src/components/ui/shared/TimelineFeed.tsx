import type { ReactNode } from "react";
import { cueColors } from "../../../theme/dashboard/cueColors";
import {
  Timeline,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineSeparator,
} from "@mui/lab";
import { Box, Typography } from "@mui/material";

export interface TimelineEntry {
  id: string;
  header: ReactNode;
  subheader?: ReactNode;
  detail?: ReactNode;
}

interface TimelineFeedProps {
  entries: TimelineEntry[];
  dotColor?: string;
  connectorColor?: string;
  dotSize?: number;
  sx?: object;
}

export default function TimelineFeed({
  entries,
  dotColor = cueColors.primary,
  connectorColor = cueColors.outlineVariant,
  dotSize = 6,
  sx,
}: TimelineFeedProps) {
  return (
    <Timeline sx={{ p: 0, m: 0, ...sx }}>
      {entries.map((entry, idx) => (
        <TimelineItem
          key={entry.id}
          sx={{ minHeight: 0, "&:before": { display: "none" } }}
        >
          <TimelineSeparator>
            <TimelineDot
              sx={{
                backgroundColor: dotColor,
                width: dotSize,
                height: dotSize,
                borderRadius: 0,
                m: 0,
                p: 0,
                boxShadow: "none",
              }}
            />
            {idx < entries.length - 1 && (
              <TimelineConnector
                sx={{ backgroundColor: connectorColor, width: "1px" }}
              />
            )}
          </TimelineSeparator>

          <TimelineContent
            sx={{
              pb: idx === entries.length - 1 ? 0 : "16px",
              pt: 0,
              pl: "16px",
              pr: 1,
            }}
          >
            {/* Header */}
            <Box
              sx={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                mb: entry.detail ? "4px" : 0,
              }}
            >
              <Typography
                sx={{
                  fontFamily: '"Inter", sans-serif',
                  fontSize: "14px",
                  color: cueColors.onSurface,
                }}
              >
                {entry.header}
              </Typography>
              {entry.subheader && (
                <Typography
                  sx={{
                    color: cueColors.onSurfaceVariant,
                    fontFamily: '"JetBrains Mono", monospace',
                    fontSize: "10px",
                    whiteSpace: "nowrap",
                    ml: "8px",
                  }}
                >
                  {entry.subheader}
                </Typography>
              )}
            </Box>
            {/* Detail */}
            {entry.detail && (
              <Typography
                sx={{
                  fontSize: "11px",
                  fontFamily: '"JetBrains Mono", monospace',
                  textTransform: "uppercase",
                  opacity: 0.5,
                  color: cueColors.onSurface,
                }}
              >
                {entry.detail}
              </Typography>
            )}
          </TimelineContent>
        </TimelineItem>
      ))}
    </Timeline>
  );
}
