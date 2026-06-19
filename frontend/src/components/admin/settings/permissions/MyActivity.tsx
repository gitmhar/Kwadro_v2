import { Avatar, Box, Button, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { EditOutlined, History, Login, Payment } from "@mui/icons-material";
import ActivityRow from "../../../ui/data-display/ActivityRows";
import SectionHeader from "../../../ui/shared/SectionHeader";

const activities = [
  {
    icon: <Login sx={{ fontSize: 20 }} />,
    title: "Successful Login",
    description: "IP: 192.168.1.45 • Chrome / macOS",
    timestamp: "2M AGO",
  },
  {
    icon: <EditOutlined sx={{ fontSize: 20 }} />,
    title: "Updated Booking #402",
    description: "Shifted Table 4 to Table 12",
    timestamp: "1H AGO",
  },
  {
    icon: <Payment sx={{ fontSize: 20 }} />,
    title: "Refund Processed",
    description: "Transaction ID: TXN_9920",
    timestamp: "4H AGO",
  },
];

export default function MyActivity() {
  return (
    <AdminCard sx={{ height: "100%", bgcolor: "#f3f3f3" }}>
      <SectionHeader
        variant="admin"
        icon={
          <History sx={{ display: "flex", fontSize: 24, color: "#1A1C1C" }} />
        }
        title="My Activity"
        textVariant="h6"
        titleSx={{ fontWeight: 700, color: "#1A1C1C", lineHeight: 1 }}
        rightElement={
          <Box>
            <Button
              variant="text"
              sx={{
                color: "#000",
                fontWeight: 600,
                fontSize: "0.85rem",
                textTransform: "uppercase",
              }}
            >
              View Full Log
            </Button>
          </Box>
        }
        sx={{ mb: 3, alignItems: "center" }}
      />
      {activities.map((activity, i) => (
        <ActivityRow key={i} {...activity} />
      ))}
    </AdminCard>
  );
}
