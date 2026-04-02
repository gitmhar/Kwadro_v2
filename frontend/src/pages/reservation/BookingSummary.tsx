import { Box, Container, Card, Grid, Divider, Typography } from "@mui/material";
import BillingInformation from "../../components/checkout/BillingInformation";
import OrderSummary from "../../components/checkout/OrderSummary";
import { Navigate, useLocation } from "react-router-dom";

export default function BookingSummary() {
  const location = useLocation();
  const bookingData = location.state;

  if (!bookingData) return <Navigate to="/book" />;

  return (
    <Box sx={{ display: "flex", p: 4 }}>
      <Container maxWidth="md">
        <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
            Checkout
          </Typography>
          <Divider sx={{ mb: 3 }} />
          {/* Checkout details */}
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <BillingInformation data={bookingData.submissionData} />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <OrderSummary
                duration={bookingData.submissionData.duration}
                total={bookingData.submissionData.totalAmount}
                bookingData={bookingData.submissionData}
              />
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
