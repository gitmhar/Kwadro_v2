import type { ReactNode } from "react";
import AdminCard from "../cards/AdminCard";
import { Box, LinearProgress, Typography } from "@mui/material";

interface StressMetricCardProps {
  title: string;
  value: string;
  icon: ReactNode;
  stressLevel: number; // Zero to Isang Daan
  stressLabel: string;
}

export default function StressMetricCard({
  title,
  value,
  icon,
  stressLevel,
  stressLabel,
}: StressMetricCardProps) {
  return (
    <AdminCard
      sx={{
        p: { xs: 2.5, sm: 3 },
        bgcolor: "#000",
        color: "#fff",
        border: "none",
        boxShadow: "none",
        borderRadius: "24px",
        width: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
      }}
    >
      <Box>
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
              color: "#E2E2E2",
            }}
          >
            {title}
          </Typography>
          <Box sx={{ opacity: 0.7, color: "#ffffff" }}>{icon}</Box>
        </Box>
        {/* Value */}
        <Typography
          variant="h2"
          sx={{
            fontWeight: 800,
            fontSize: { xs: "2.5rem", sm: "3rem", md: "3.5rem" },
            lineHeight: 1,
            mb: 3,
          }}
        >
          {value}
        </Typography>
      </Box>
      <Box>
        <Box sx={{ display: "flex", justifyContent: "space-between", mb: 1 }}>
          <Typography
            sx={{
              fontSize: "0.65rem",
              color: "#A3A3A3",
              fontWeight: 800,
              letterSpacing: 0.5,
            }}
          >
            STRESS LEVEL
          </Typography>
          <Typography
            sx={{ fontSize: "0.65rem", fontWeight: 800, color: "#FFFFFF" }}
          >
            {stressLabel}
          </Typography>
        </Box>
        <LinearProgress
          variant="determinate"
          value={stressLevel}
          sx={{
            bgcolor: "#333333",
            "& .MuiLinearProgress-bar": { bgcolor: "#FFFFFF" },
            height: 6,
            borderRadius: 1,
          }}
        />
      </Box>
    </AdminCard>
  );
}
