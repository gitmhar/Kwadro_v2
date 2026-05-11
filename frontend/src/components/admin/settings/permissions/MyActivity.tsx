import { Avatar, Box, Button, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { EditOutlined, History, Login, Payment } from "@mui/icons-material";

export default function MyActivity() {
  return (
    <AdminCard sx={{ height: "100%", bgcolor: "#f3f3f3" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          mb: 3,
        }}
      >
        <Box sx={{ display: "flex", alignItems: "center", gap: 1.5 }}>
          <History sx={{ fontSize: 24, color: "#1a1c1c" }} />
          <Typography
            variant="h6"
            sx={{ fontWeight: 700, color: "#1a1c1c", lineHeight: 1 }}
          >
            My Activity
          </Typography>
        </Box>

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
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", py: 2, gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: "#fff",
            color: "#1a1c1c",
            border: "1px solid #f0f0f0",
            width: 48,
            height: 48,
          }}
        >
          <Login sx={{ fontSize: 20 }} />
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1c1c" }}
          >
            Successful Login
          </Typography>
          <Typography
            sx={{ color: "#a3a3a3", fontSize: "0.85rem", fontWeight: 500 }}
          >
            IP: 192.168.1.45 • Chrome / macOS
          </Typography>
        </Box>

        {/* 3. RIGHT: The Timestamp */}
        <Typography
          sx={{ color: "#a3a3a3", fontSize: "0.75rem", fontWeight: 600 }}
        >
          2M AGO
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", py: 2, gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: "#fff",
            color: "#1a1c1c",
            border: "1px solid #f0f0f0",
            width: 48,
            height: 48,
          }}
        >
          <EditOutlined sx={{ fontSize: 20 }} />
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1c1c" }}
          >
            Updated Booking #402
          </Typography>
          <Typography
            sx={{ color: "#a3a3a3", fontSize: "0.85rem", fontWeight: 500 }}
          >
            Shifted Table 4 to Table 12
          </Typography>
        </Box>

        <Typography
          sx={{ color: "#a3a3a3", fontSize: "0.75rem", fontWeight: 600 }}
        >
          1H AGO
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", py: 2, gap: 2 }}>
        <Avatar
          sx={{
            bgcolor: "#fff",
            color: "#1a1c1c",
            border: "1px solid #f0f0f0",
            width: 48,
            height: 48,
          }}
        >
          <Payment sx={{ fontSize: 20 }} />
        </Avatar>

        <Box sx={{ flex: 1 }}>
          <Typography
            sx={{ fontWeight: 700, fontSize: "0.95rem", color: "#1a1c1c" }}
          >
            Refund Processed
          </Typography>
          <Typography
            sx={{ color: "#a3a3a3", fontSize: "0.85rem", fontWeight: 500 }}
          >
            Transaction ID: TXN_9920
          </Typography>
        </Box>

        <Typography
          sx={{ color: "#a3a3a3", fontSize: "0.75rem", fontWeight: 600 }}
        >
          4H AGO
        </Typography>
      </Box>
    </AdminCard>
  );
}
