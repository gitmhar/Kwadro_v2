import type { ReactNode } from "react";
import { Box, Button } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import Chart from "./Chart";
import SectionHeader from "../../../ui/shared/SectionHeader";
import InsightPanel from "../../../ui/data-display/InsightPanel";

interface IntelChartProps {
  chartComponent?: ReactNode;
}

const insightRows = [
  { label: "Peak Hours", value: "19:00 - 21:00" },
  { label: "Avg. Stay", value: "1h 24m" },
  { label: "No Shows", value: "2.4%", valueColor: "#E11D48" },
];

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
            <SectionHeader
              variant="admin"
              titleFirst
              title="Booking Volume"
              textVariant="h5"
              titleSx={{
                fontSize: { xs: "1.25rem", sm: "1.4rem" },
                fontWeight: 700,
                mb: 0.5,
              }}
              subtitle="Weekly performance tracking"
              subtitleVariant="body2"
              subtitleSx={{
                fontSize: { xs: "0.8rem", sm: "0.9rem" },
                fontWeight: 700,
                textTransform: "none",
                letterSpacing: "none",
              }}
            />

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
            {chartComponent || (
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
        <InsightPanel
          title="Traffic Insights"
          rows={insightRows}
          tip={{
            title: "Smart Tips:",
            message: "Demand is projected to increase by 15% tomorrow evening",
          }}
        />
      </Box>
    </AdminCard>
  );
}
