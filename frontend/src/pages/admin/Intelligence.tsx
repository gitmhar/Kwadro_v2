import { Box } from "@mui/material";
import CustomerCRM from "../../components/admin/intelligence/crm/CustomerCRM";
import AnalyticsCard from "../../components/admin/intelligence/analytics/AnalyticsCard";
import IntelChart from "../../components/admin/intelligence/charts/IntelChart";

export default function Intelligence() {
  return (
    <Box
      sx={{
        maxWidth: "1450px",
        width: "100%",
        mx: "auto",
        px: { xs: 1, sm: 2, lg: 0 },
        overflow: "hidden",
        boxSizing: "border-box",
      }}
    >
      <Box sx={{ width: "100%", overflow: "hidden" }}>
        <AnalyticsCard />
      </Box>
      <Box my={{ xs: 2, sm: 3 }} sx={{ width: "100%", overflow: "hidden" }}>
        <IntelChart />
      </Box>
      <Box sx={{ my: { xs: 2, sm: 3 }, width: "100%", overflow: "hidden" }}>
        <CustomerCRM />
      </Box>
    </Box>
  );
}
