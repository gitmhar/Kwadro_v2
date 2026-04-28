import { Box } from "@mui/material";
import CustomerCRM from "../../components/admin/intelligence/CustomerCRM";
import AnalyticsCard from "../../components/admin/intelligence/AnalyticsCard";
import IntelChart from "../../components/admin/intelligence/IntelChart";

export default function Intelligence() {
  return (
    <Box sx={{ maxWidth: "1450px", width: "100%", mx: "auto" }}>
      <Box>
        <AnalyticsCard />
      </Box>
      <Box my={3}>
        <IntelChart />
      </Box>
      <Box sx={{ my: 2 }}>
        <CustomerCRM />
      </Box>
    </Box>
  );
}
