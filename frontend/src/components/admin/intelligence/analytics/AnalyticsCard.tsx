import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import {
  CachedOutlined,
  CalendarMonthOutlined,
  SensorsOutlined,
  TrendingUp,
} from "@mui/icons-material";

export default function AnalyticsCard() {
  const analyticsData = [
    {
      title: "TOTAL BOOKINGS",
      value: "1,234",
      trend: "12% from last month",
      type: "primary",
      icon: <CalendarMonthOutlined sx={{ fontSize: "1.6rem" }} />,
    },
    {
      title: "ACTIVE SESSIONS",
      value: "42",
      trend: "Live updates",
      type: "primary",
      icon: <SensorsOutlined sx={{ fontSize: "1.6rem" }} />,
    },
    {
      title: "Demand Pressure",
      value: "+32%",
      trend: "ELEVATED",
      type: "stress",
      icon: <TrendingUp sx={{ fontSize: "1.6rem" }} />,
    },
  ];

  return (
    <Grid container spacing={3}>
      {analyticsData.map((item, i) => (
        <Grid
          key={item.title}
          size={{ xs: 12, md: 4 }}
          sx={{ display: "flex", alignItems: "stretch" }}
        >
          <AdminCard
            sx={{
              p: { xs: 2.5, sm: 3 },
              bgcolor: item.type === "stress" ? "#000" : "#fff",
              color: item.type === "stress" ? "#fff" : "#000",
              border: item.type === "stress" ? "none" : "1px solid #f0f0f0",
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
                    color: item.type === "stress" ? "#e2e2e2" : "#a3a3a3",
                  }}
                >
                  {item.title}
                </Typography>

                <Box
                  sx={{
                    opacity: 0.7,
                    color: item.type === "stress" ? "#fff" : "#474747",
                  }}
                >
                  {item.icon}
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
                {item.value}
              </Typography>
            </Box>

            {/* FOOTER */}
            <Box>
              {item.type !== "stress" ? (
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
                  {i === 0 ? (
                    <>
                      <TrendingUp sx={{ fontSize: "1rem", color: "#22c55e" }} />
                      <Box component="span" sx={{ color: "#22c55e" }}>
                        +12%
                      </Box>{" "}
                      from last month
                    </>
                  ) : (
                    <>
                      <CachedOutlined sx={{ fontSize: "1rem" }} /> Live updates
                    </>
                  )}
                </Typography>
              ) : (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 1,
                    }}
                  >
                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        color: "#a3a3a3",
                        fontWeight: 800,
                        letterSpacing: 0.5,
                      }}
                    >
                      STRESS LEVEL
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.65rem",
                        fontWeight: 800,
                        color: "#fff",
                      }}
                    >
                      {item.trend}
                    </Typography>
                  </Box>

                  <LinearProgress
                    variant="determinate"
                    value={62}
                    sx={{
                      bgcolor: "#333",
                      "& .MuiLinearProgress-bar": { bgcolor: "#fff" },
                      borderRadius: 1,
                      height: 6,
                    }}
                  />
                </Box>
              )}
            </Box>
          </AdminCard>
        </Grid>
      ))}
    </Grid>
  );
}
