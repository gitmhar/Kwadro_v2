import { Box, Grid, LinearProgress, Typography } from "@mui/material";
import AdminCard from "../../ui/AdminCard";
import {
  CachedOutlined,
  CalendarMonthOutlined,
  SensorsOutlined,
  TrendingUp,
} from "@mui/icons-material";

export default function AnalyticsCard() {
  return (
    <Grid container spacing={2}>
      {[1, 2, 3].map((_, i) => (
        <Grid key={i} size={{ xs: 12, md: 4 }} sx={{ display: "flex", alignItems: "center"}}>
          <AdminCard
            sx={{
              p: { xs: 2, sm: 3 },
              bgcolor: i === 2 ? "#000" : "#fff",
              color: i === 2 ? "#fff" : "#000",
            }}
          >
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: 2,
              }}
            >
              {/* TOP ROW (Title + Icon) */}
              <Box
                sx={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Typography
                  variant="subtitle2"
                  sx={{
                    textTransform: "uppercase",
                    letterSpacing: 1,
                    fontWeight: 600,
                    color: i === 2 ? "#e2e2e2" : "#47474799",
                  }}
                >
                  {i === 0
                    ? "TOTAL BOOKINGS"
                    : i === 1
                      ? "ACTIVE SESSIONS"
                      : "Demand Pressure"}
                </Typography>

                {/* ICON */}
                <Box sx={{ opacity: 0.7 }}>
                  {i === 0 && (
                    <CalendarMonthOutlined sx={{ fontSize: "1.6rem" }} />
                  )}
                  {i === 1 && <SensorsOutlined sx={{ fontSize: "1.6rem" }} />}
                  {i === 2 && <TrendingUp sx={{ fontSize: "1.6rem" }} />}
                </Box>
              </Box>

              {/* VALUE */}
              <Typography
                variant="h1"
                sx={{
                  fontWeight: 700,
                  fontSize: {
                    xs: "2.2rem",
                    sm: "2.8rem",
                    md: "3.5rem",
                  },
                  lineHeight: 1.1,
                }}
              >
                {i === 0 ? "1,234" : i === 1 ? "42" : "+32%"}
              </Typography>

              {/* FOOTER */}
              {i !== 2 ? (
                <Typography
                  sx={{
                    color: "#a3a3a3",
                    fontSize: "0.85rem",
                    display: "flex",
                    alignItems: "center",
                    gap: 0.5,
                  }}
                >
                  {i === 0 ? (
                    <>
                      <TrendingUp sx={{ fontSize: "0.9rem" }} /> 12% from last
                      month
                    </>
                  ) : (
                    <>
                      <CachedOutlined sx={{ fontSize: "0.9rem" }} /> Live
                      updates
                    </>
                  )}
                </Typography>
              ) : (
                <Box>
                  <Box
                    sx={{
                      display: "flex",
                      justifyContent: "space-between",
                      mb: 0.5,
                    }}
                  >
                    <Typography sx={{ fontSize: "0.7rem", color: "#777" }}>
                      STRESS LEVEL
                    </Typography>
                    <Typography
                      sx={{
                        fontSize: "0.7rem",
                        fontWeight: 700,
                      }}
                    >
                      ELEVATED
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
