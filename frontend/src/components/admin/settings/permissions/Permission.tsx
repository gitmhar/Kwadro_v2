import { Box, Stack, Typography } from "@mui/material";
import AdminCard from "../../../ui/cards/AdminCard";
import { InfoOutline, VerifiedUser } from "@mui/icons-material";
import PermissionRow from "../../../ui/data-display/PermissionRow";

const permissions = [
  "Booking Management",
  "Table Monitoring",
  "Transaction",
  "System Settings",
];

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
        {permissions.map((permission, i) => (
          <PermissionRow key={i} label={permission} />
        ))}
      </Stack>
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
    </AdminCard>
  );
}
