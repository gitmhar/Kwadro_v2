import { Box, Button, Stack, Typography } from "@mui/material";
import AdminCard from "../../ui/AdminCard";
import InsightRow from "./InsightRow";
import Chart from "./Chart";

export default function IntelChart() {
  return (
    <AdminCard sx={{ p: 2, borderRadius: "24px", overflow: "hidden" }}>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          mb: 2,
        }}
      >
        <Box sx={{ flex: 1, p: { xs: 2, sm: 3 } }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              mb: 3,
              gap: 2,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.2rem", sm: "1.5rem" },
                }}
              >
                Booking Volume
              </Typography>
              <Typography
                variant="body2"
                sx={{ fontSize: { xs: "0.8rem", sm: "0.9rem" }, color: "#777" }}
              >
                Weekly performance tracking
              </Typography>
            </Box>

            {/* Toggle Buttons: Filters */}
            <Box
              sx={{
                display: "flex",
                bgcolor: "#f5f5f5",
                p: 0.5,
                borderRadius: "12px",
                height: "fit-content",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                fullWidth
                sx={{
                  borderRadius: "10px",
                  color: "#777",
                  textTransform: "none",
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                }}
              >
                Day
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#000",
                  borderRadius: "10px",
                  textTransform: "none",
                  fontSize: { xs: "0.75rem", sm: "0.85rem" },
                }}
              >
                Week
              </Button>
            </Box>
          </Box>

          {/* Chart */}
          <Box sx={{ height: { xs: 200, sm: 250 }, width: "100%" }}>
            <Chart />
          </Box>
        </Box>
        {/* Right Side: Insight */}
        <Box
          sx={{
            width: { xs: "100%", md: "280px" },
            p: { xs: 2, sm: 3 },
            borderTop: { xs: "1px solid #f0f0f0", md: "none" },
            borderLeft: { md: "1px solid #f0f0f0" },
            bgcolor: "#fafafa",
          }}
        >
          <Typography
            variant="overline"
            sx={{ color: "#a3a3a3", fontWeight: 700, letterSpacing: 1 }}
          >
            Traffic Insights
          </Typography>

          <Stack spacing={2} sx={{ my: 3 }}>
            <InsightRow label="Peak Hours" value="19:00 - 21:00" />
            <InsightRow label="Avg. Stay" value="1h 24m" />
            <InsightRow label="No Shows" value="2.4%" valueColor="#ff4d4d" />
          </Stack>

          {/* Smart Tip Box */}
          <Box sx={{ bgcolor: "#eee", p: 2, borderRadius: "16px" }}>
            <Typography variant="body2" sx={{ fontWeight: 700, fontSize: "0.85rem" }}>
              Smart Tip:{" "}
              <span style={{ fontWeight: 400, color: "#444" }}>
                Demand is projected to increase by 15% tomorrow evening.
              </span>
            </Typography>
          </Box>
        </Box>
      </Box>
    </AdminCard>
  );
}
