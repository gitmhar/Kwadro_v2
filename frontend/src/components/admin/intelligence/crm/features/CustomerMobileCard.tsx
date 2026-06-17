import { Box, Button, Grid, Typography } from "@mui/material";
import AdminCard from "../../../../ui/cards/AdminCard";
import UserIdentity from "../../../../ui/data-display/UserIdentity";
import { Campaign } from "@mui/icons-material";
import type { CustomerData } from "../../../../../types/crmRows";


interface CustomerMobileCardProps {
  customer: CustomerData;
  onEmailBlast?: (customer: CustomerData) => void;
}

export default function CustomerMobileCard({
  customer,
  onEmailBlast,
}: CustomerMobileCardProps) {
  return (
    <AdminCard sx={{ p: 3, borderRadius: "24px" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          mb: 3,
        }}
      >
        <UserIdentity name={customer.name} email={customer.email} />
      </Box>
      <Grid container spacing={3} sx={{ mb: 3 }}>
        <Grid size={{ xs: 6 }}>
          <Typography
            variant="caption"
            sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
          >
            LIFETIME VALUE
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "1rem", mt: 0.5 }}>
            {customer.value}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography
            variant="caption"
            sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
          >
            ACTIVITY
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "1rem", mt: 0.5 }}>
            {customer.visits}
          </Typography>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography
            variant="caption"
            sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
          >
            STATUS
          </Typography>
          <Box
            sx={{
              bgcolor: "#000",
              color: "#fff",
              px: 1,
              py: 0.2,
              borderRadius: "8px",
              fontSize: "0.65rem",
              fontWeight: 800,
              mt: 0.5,
              width: "fit-content",
              textTransform: "uppercase",
            }}
          >
            {customer.status}
          </Box>
        </Grid>
        <Grid size={{ xs: 6 }}>
          <Typography
            variant="caption"
            sx={{ color: "#a3a3a3", fontWeight: 600, letterSpacing: 1 }}
          >
            LAST ACTIVE
          </Typography>
          <Typography sx={{ fontWeight: 500, fontSize: "1rem", mt: 0.5 }}>
            {customer.lastActive}
          </Typography>
        </Grid>
      </Grid>
      <Button
        fullWidth
        variant="contained"
        startIcon={<Campaign />}
        onClick={() => onEmailBlast?.(customer)}
        sx={{
          display: { sm: "none" },
          bgcolor: "#000000",
          color: "#ffffff",
          py: 2,
          borderRadius: "16px",
          fontWeight: 800,
          fontSize: "0.85rem",
          letterSpacing: 1,
          "&:hover": { bgcolor: "#333333" },
        }}
      >
        Send Email Blast
      </Button>
    </AdminCard>
  );
}
