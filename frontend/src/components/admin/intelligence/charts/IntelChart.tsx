import { Box, Button, Stack, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import InsightRow from "../../../ui/data-display/InsightRow";
import Chart from "./Chart";
import type { ReactNode } from "react";

interface IntelChartProps {
  chartComponent?: ReactNode;
}

export default function IntelChart({ chartComponent }: IntelChartProps) {
  return (
    <AdminCard
      sx={{
        p: 0,
        borderRadius: "24px",
        overflow: "hidden",
        bgcolor: "#ffffff",
        border: "1px solid #f0f0f0",
        boxShadow: "none",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
        }}
      >
        <Box sx={{ flex: 1, p: { xs: 2.5, sm: 4 } }}>
          {/* Header */}
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: "space-between",
              alignItems: { xs: "flex-start", sm: "center" },
              mb: 4,
              gap: 3,
            }}
          >
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  fontSize: { xs: "1.25rem", sm: "1.4rem" },
                  color: "#1a1c1c",
                  mb: 0.5,
                }}
              >
                Booking Volume
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  fontSize: { xs: "0.8rem", sm: "0.9rem" },
                  color: "#777",
                  fontWeight: 700,
                }}
              >
                Weekly performance tracking
              </Typography>
            </Box>

            {/* Toggle Buttons: Filters */}
            <Box
              sx={{
                display: "flex",
                bgcolor: "#f5f5f5",
                p: 0.6,
                borderRadius: "14px",
                height: "fit-content",
                width: { xs: "100%", sm: "auto" },
              }}
            >
              <Button
                fullWidth
                sx={{
                  borderRadius: "10px",
                  color: "#a3a3a3",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "0.75rem",
                  py: 1,
                  px: 3,
                  "&:hover": { bgcolor: "#e5e5e5" },
                }}
              >
                Day
              </Button>
              <Button
                fullWidth
                variant="contained"
                sx={{
                  bgcolor: "#1a1c1c",
                  color: "#ffffff",
                  borderRadius: "10px",
                  fontWeight: 700,
                  textTransform: "none",
                  fontSize: "0.75rem",
                  boxShadow: "none",
                  py: 1,
                  px: 3,
                  "&:hover": { bgcolor: "#474747" },
                }}
              >
                Week
              </Button>
            </Box>
          </Box>

          {/* Chart */}
          <Box sx={{ height: { xs: 220, sm: 280 }, width: "100%" }}>
            {chartComponent ? (
              chartComponent
            ) : (
              <Box
                sx={{
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  bgcolor: "#fafafa",
                  borderRadius: "16px",
                  color: "#a3a3a3",
                }}
              >
                <Chart />
              </Box>
            )}
          </Box>
        </Box>
        {/* Right Side: Insight */}
        <Box
          sx={{
            width: { xs: "100%", md: "320px" },
            p: { xs: 2.5, sm: 4 },
            borderTop: { xs: "1px solid #f0f0f0", md: "none" },
            borderLeft: { md: "1px solid #f0f0f0" },
            bgcolor: "#fafafa",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <Typography
              variant="overline"
              sx={{
                color: "#a3a3a3",
                fontWeight: 800,
                letterSpacing: 1.5,
                fontSize: "0.7rem",
              }}
            >
              Traffic Insights
            </Typography>

            <Stack spacing={2.5} sx={{ my: 3 }}>
              <InsightRow label="Peak Hours" value="19:00 - 21:00" />
              <InsightRow label="Avg. Stay" value="1h 24m" />
              <InsightRow label="No Shows" value="2.4%" valueColor="#e11d48" />
            </Stack>
          </Box>

          {/* Smart Tip Box */}
          <Box
            sx={{
              bgcolor: "#fff",
              p: 2.5,
              borderRadius: "18px",
              border: "1px solid #e5e5e5",
              boxShadow: "none",
              mt: 2,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                fontWeight: 800,
                fontSize: "0.8rem",
                color: "#1a1c1c",
                mb: 0.5,
              }}
            >
              Smart Tip:
            </Typography>
            <Typography
              variant="body2"
              sx={{ color: "#666", fontSize: "0.75rem", lineHeight: 1.4 }}
            >
              Demand is projected to increase by 15% tomorrow evening.
            </Typography>
          </Box>
        </Box>
      </Box>
    </AdminCard>
  );
}
