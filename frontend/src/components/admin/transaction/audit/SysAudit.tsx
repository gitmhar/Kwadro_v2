import {
  Box,
  Typography,
  Chip,
  Paper,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@mui/lab";

const auditData = [
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
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box sx={{ mt: 5, mb: 8 }}>
      {/* Header */}
      <Box sx={{ mb: 4 }}>
        <Typography variant="h4" sx={{ fontWeight: 700, color: "#1a1c1c" }}>
          System Audit Trail
        </Typography>
        <Typography variant="body2" sx={{ color: "#a3a3a3", fontWeight: 500 }}>
          Immutable chronicle of administrative modifications.
        </Typography>
      </Box>

      {/* Audit Card */}
      <Paper
        elevation={0}
        sx={{
          bgcolor: "#f5f5f5",
          borderRadius: "28px",
          p: { xs: 3, md: 5 },
          border: "1px solid #f3f4f6",
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
          {auditData.map((item, index) => (
            <TimelineItem key={item.id}>
              <TimelineSeparator>
                <TimelineDot
                  sx={{
                    bgcolor: item.active ? "#000" : "#d1d1d1",
                    boxShadow: item.active
                      ? "0 0 0 4px rgba(0,0,0,0.05)"
                      : "none",
                    width: 12,
                    height: 12,
                    my: 1.5,
                  }}
                />
                {index !== auditData.length - 1 && (
                  <TimelineConnector
                    sx={{ bgcolor: "#e0e0e0", width: "1px" }}
                  />
                )}
              </TimelineSeparator>

              <TimelineContent sx={{ pb: 6, ml: { xs: 1, md: 3 } }}>
                <Box
                  sx={{
                    display: "flex",
                    // SWITCH DIRECTION ON MOBILE
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
                        color: item.active ? "#1a1c1f" : "#a3a3a3",
                        letterSpacing: 0.5,
                      }}
                    >
                      {item.time}
                    </Typography>
                    <Typography
                      variant="body1"
                      sx={{
                        fontWeight: 700,
                        color: item.active ? "#1a1c1f" : "#a3a3a3",
                        mt: 0.5,
                        lineHeight: 1.3,
                      }}
                    >
                      {item.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "#a3a3a3", mt: 0.5 }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>

                  <Chip
                    label={item.id}
                    sx={{
                      bgcolor: "#fff",
                      color: item.active ? "#1a1c1c" : "#a3a3a3",
                      fontWeight: 700,
                      fontSize: "0.65rem",
                      borderRadius: "8px",
                      height: "28px",
                      border: "1px solid #e5e7eb",
                      alignSelf: "flex-start",
                      mt: isMobile ? 1 : 0.5,
                    }}
                  />
                </Box>
              </TimelineContent>
            </TimelineItem>
          ))}
        </Timeline>
      </Paper>
    </Box>
  );
}
