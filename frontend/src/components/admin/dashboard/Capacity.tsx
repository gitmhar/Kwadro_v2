import { Box, Typography } from "@mui/material";
import AdminCard from "../../ui/cards/AdminCard";
import MetricBox from "../../ui/data-display/MetricBox";
import PercentageHero from "../../ui/data-display/PercentageHero";

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
        <PercentageHero
          label="CURRENT CAPACITY"
          value={84}
          suffix="%"
          description={`Operational velocity is within target parameters. 
            4 tables undergoing maintenance`}
        />

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
