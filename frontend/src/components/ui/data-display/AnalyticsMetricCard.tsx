import type { ReactNode } from "react";
import AdminCard from "../cards/AdminCard";
import { Box, Typography } from "@mui/material";

interface AnalyticsMetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  trend?: ReactNode;
}

export default function AnalyticsMetricCard({
  title,
  value,
  icon,
  trend,
}: AnalyticsMetricCardProps) {
  return (
    <AdminCard
      sx={{
        p: { xs: 2.5, sm: 3 },
        bgcolor: "#fff",
        color: "#000",
        border: "1px solid #f0f0f0",
        boxShadow: "none",
        borderRadius: "24px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
        {/* TOP ROW (Title + Icon) */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              textTransform: "uppercase",
              letterSpacing: 1.2,
              fontWeight: 800,
              fontSize: "0.75rem",
              color: "#a3a3a3",
            }}
          >
            {title}
          </Typography>

          <Box
            sx={{
              opacity: 0.7,
              color: "#474747",
            }}
          >
            {icon}
          </Box>
        </Box>

        {/* VALUE */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: {
              xs: "2.5rem",
              sm: "3rem",
              md: "3.5rem",
            },
            lineHeight: 1,
            mb: 3,
          }}
        >
          {value}
        </Typography>
      </Box>
      {/* FOOTER */}
      {trend && (
        <Box>
          <Typography
            sx={{
              color: "#666",
              fontSize: "0.8rem",
              display: "flex",
              alignItems: "center",
              gap: 0.8,
              fontWeight: 700,
            }}
          >
            {trend}
          </Typography>
        </Box>
      )}
    </AdminCard>
  );
}
