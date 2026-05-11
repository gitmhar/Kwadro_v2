import { Box, Typography } from "@mui/material";
import AdminCard from "../../ui/cards/AdminCard";
import MetricBox from "../../ui/data-display/MetricBox";

export default function Capacity() {
  return (
    <AdminCard>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start", lg: "center" },
          justifyContent: "space-between",
          gap: 3,
        }}
      >
        {/* Left Column */}
        <Box
          sx={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "column",
            textAlign: { xs: "center", lg: "left" },
            alignItems: { xs: "center", lg: "flex-start" },
          }}
        >
          <Typography
            variant="subtitle2"
            sx={{
              textTransform: "uppercase",
              color: "#a3a3a3",
              letterSpacing: 1.5,
              fontWeight: 700,
              mb: 0.5,
            }}
          >
            CURRENT CAPACITY
          </Typography>
          <Typography
            variant="h1"
            sx={{
              fontWeight: 700,
              my: 1,
              fontSize: {
                xs: "2.5rem",
                sm: "3rem",
                md: "3.75rem",
              },
              lineHeight: 1,
            }}
          >
            84
            <Box
              component="span"
              sx={{
                fontSize: { xs: "1.75rem", md: "2.25rem" },
                color: "#a3a3a3",
              }}
            >
              %
            </Box>
          </Typography>
          <Typography
            variant="body2"
            sx={{ color: "#474747", mt: 1, mb: { xs: 2, md: 0 } }}
          >
            Operational velocity is within target parameters. <br />4 tables
            undergoing maintenance
          </Typography>
        </Box>

        {/* Right Column */}
        <Box
          sx={{
            display: "flex",
            gap: 2,
            width: { xs: "100%", md: "auto" },
            justifyContent: { xs: "center", md: "flex-end" },
            flexWrap: "wrap",
          }}
        >
          <MetricBox label="Active" value="24" />
          <MetricBox label="Queued" value="12" />
        </Box>
      </Box>
    </AdminCard>
  );
}
