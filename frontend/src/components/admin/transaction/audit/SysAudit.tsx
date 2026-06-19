import {
  Box,
  Paper,
} from "@mui/material";
import {
  Timeline,
} from "@mui/lab";
import SectionHeader from "../../../ui/shared/SectionHeader";
import AuditTimelineItem, { type AuditEntry } from "../../../ui/data-display/AudtitTimelineItem";

const auditData: AuditEntry[] = [
  {
    id: "#AUDIT-8842",
    time: "TODAY, 04:12 PM",
    title: "Admin Mhar changed hourly rate to ₱250.00",
    desc: "Global pricing update applied to all standard tables.",
    active: true,
  },
  {
    id: "#AUDIT-8841",
    time: "YESTERDAY, 11:45 AM",
    title: "Executive Sarah initiated bulk export of 'Q3 Financials'",
    desc: "Data destination: corporate-hq@billiard-hall.hq",
    active: false,
  },
  {
    id: "#AUDIT-8840",
    time: "OCT 24, 09:20 PM",
    title: "System Security Automatic Lockout triggered for IP 192.168.1.104",
    desc: "Reason: 5 failed administrative login attempts.",
    active: false,
  },
];

export default function SystemAuditTrail() {
  return (
    <Box sx={{ mt: 5, mb: 8 }}>
      {/* Header */}
      <SectionHeader
        variant="admin"
        titleFirst
        title="System Audit Trail"
        titleSx={{ fontWeight: 600 }}
        subtitle="Immutable chronicle of administrative modifications"
        subtitleSx={{
          fontWeight: 500,
          color: "#A3A3A3",
          letterSpacing: "none",
          textTransform: "none",
        }}
        subtitleVariant="body2"
        sx={{ mb: 3 }}
      />

      {/* Audit Card */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#F5F5F5",
          borderRadius: "28px",
          p: { xs: 3, md: 5 },
          border: "1px solid #F3F4F6",
        }}
      >
        <Timeline
          sx={{
            p: 0,
            [`& .MuiTimelineItem-root:before`]: {
              flex: 0,
              padding: 0,
            },
          }}
        >
          {auditData.map((entry, index) => (
            <AuditTimelineItem
              key={entry.id}
              entry={entry}
              isLast={index === auditData.length}
            />
          ))}
        </Timeline>
      </Paper>
    </Box>
  );
}
