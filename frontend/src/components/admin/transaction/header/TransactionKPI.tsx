import { Box, Typography } from "@mui/material";
import MetricItem from "./MetricItem";
import AdminCard from "../../../ui/AdminCard";

export default function TransactionKPI() {
  return (
    <AdminCard
      sx={{
        p: 6,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        gap: { xs: 3, md: 4 },
      }}
    >
      {/* Top Section */}
      <Box>
        <Typography
          variant="caption"
          sx={{
            fontWeight: 700,
            color: "#a3a3a3",
            textTransform: "uppercase",
            letterSpacing: 2,
            display: "block",
            mb: 1,
          }}
        >
          Monthly Booking Volume
        </Typography>

        <Typography
          variant="h1"
          sx={{
            fontWeight: 700,
            color: "#000",
            mb: 2,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "4.5rem" },
            lineHeight: 1.1,
          }}
        >
          1,234
        </Typography>

        <Typography
          variant="body2"
          sx={{
            color: "#777",
            lineHeight: 1.6,
            maxWidth: { xs: "100%", md: "60%" },
            fontWeight: 500,
          }}
        >
          Aggregated reservation volume across all 12 professional tables.
          Reflecting a 14% increase from previous operational cycle.
        </Typography>
      </Box>

      {/* Bottom Metrics Section */}
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          gap: { xs: 2, sm: 4 },
          borderTop: "none",
        }}
      >
        <MetricItem label="Total Sessions" value="2,100" />
        <MetricItem label="Avg. Duration" value="1.2 Hours" />
        <MetricItem label="No-Show Rate" value="0.4%" />
      </Box>
    </AdminCard>
  );
}
