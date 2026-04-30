import { Box, Stack, Typography } from "@mui/material";
import AdminCard from "../../../ui/AdminCard";
import { InfoOutline, VerifiedUser } from "@mui/icons-material";

export default function Permission() {
  return (
    <AdminCard sx={{ bgcolor: "#000000", p: 4 }}>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1, mb: 3 }}>
        <VerifiedUser sx={{ fontSize: 24, color: "#4ade80" }} />
        <Typography
          variant="h6"
          sx={{ fontWeight: 600, color: "#fff", lineHeight: 1 }}
        >
          Your Permissions
        </Typography>
      </Box>
      <Box>
        <Typography
          variant="caption"
          sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 2 }}
        >
          CURRENT ROLE
        </Typography>
        <Typography
          variant="h4"
          sx={{
            color: "#ffffff",
            fontWeight: 600,
            fontStyle: "italic",
            letterSpacing: -0.5,
            textTransform: "uppercase",
          }}
        >
          Admin
        </Typography>
      </Box>
      <Stack spacing={3} my={3}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #262626",
            pb: 1,
          }}
        >
          <Typography sx={{ color: "#fff" }}>Booking Management</Typography>
          <Box
            sx={{
              borderRadius: 1,
              bgcolor: "#262626",
              color: "#fff",
              fontSize: "0.8rem",
              px: 0.9,
              py: 0.2,
            }}
          >
            Enabled
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #262626",
            pb: 1,
          }}
        >
          <Typography sx={{ color: "#fff" }}>Table Monitoring</Typography>
          <Box
            sx={{
              borderRadius: 1,
              bgcolor: "#262626",
              color: "#fff",
              fontSize: "0.8rem",
              px: 0.9,
              py: 0.2,
            }}
          >
            Enabled
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #262626",
            pb: 1,
          }}
        >
          <Typography sx={{ color: "#fff" }}>Transaction</Typography>
          <Box
            sx={{
              borderRadius: 1,
              bgcolor: "#262626",
              color: "#fff",
              fontSize: "0.8rem",
              px: 0.9,
              py: 0.2,
            }}
          >
            Enabled
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderBottom: "1px solid #262626",
            pb: 1,
          }}
        >
          <Typography sx={{ color: "#fff" }}>System Settings</Typography>
          <Box
            sx={{
              borderRadius: 1,
              bgcolor: "#262626",
              color: "#fff",
              fontSize: "0.8rem",
              px: 0.9,
              py: 0.2,
            }}
          >
            Enabled
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "flex-start",
            gap: 0.5,
            bgcolor: "#171717",
            p: 1.5,
            borderRadius: "12px",
          }}
        >
          <InfoOutline sx={{ fontSize: 18, color: "#737373" }} />
          <Typography variant="caption" sx={{ color: "#a3a3a3" }}>
            Permission levels are managed by the Head of Operations. Contact IT
            support or Manager to requrest additional access.
          </Typography>
        </Box>
      </Stack>
    </AdminCard>
  );
}
