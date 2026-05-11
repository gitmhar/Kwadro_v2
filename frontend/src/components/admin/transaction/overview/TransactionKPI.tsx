import { Box, Stack, Typography } from "@mui/material";
import MetricItem from "./MetricItem";
import AdminCard from "../../../ui/cards/AdminCard";

export default function TransactionKPI() {
  return (
    <AdminCard
      sx={{
        p: { xs: 4, md: 6 },
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        borderRadius: "24px",
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
            letterSpacing: 1,
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
            color: "#1a1c1c",
            mb: 2,
            fontSize: { xs: "3rem", md: "4.5rem" },
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
            maxWidth: 520,
            fontWeight: 500,
          }}
        >
          Aggregated reservation volume across all 12 professional tables.
          Reflecting a 14% increase from previous operational cycle.
        </Typography>
      </Box>

      {/* Bottom Metrics Section */}
      <Stack
        direction={{ xs: "column", sm: "row" }}
        spacing={{ xs: 2.5, sm: 6 }}
        sx={{
          mt: { xs: 4, md: 0 },
          pt: 4,
        }}
      >
        <MetricItem label="Total Sessions" value="2,100" />
        <MetricItem label="Avg. Duration" value="1.2 Hours" />
        <MetricItem label="No-Show Rate" value="0.4%" />
      </Stack>
    </AdminCard>
  );
}
