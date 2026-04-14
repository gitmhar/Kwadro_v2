import { Box, Container, Card, Grid, Divider, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
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
          <Box
            sx={{
              width: 90,
              height: 90,
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "rgba(44,243,125, 0.1)",
              border: "1px solid rgba(44, 243, 125, 0.05)",
              animation: "pulse 2s infinite ease-in-out",
              "@keyframes pulse": {
                "0%": { transform: "scale(0.95)", opacity: 0.8 },
                "50%": { transform: "scale(1)", opacity: 1 },
                "100%": { transform: "scale(0.95)", opacity: 0.8 },
              },
            }}
          >
            <CheckCircleIcon sx={{ fontSize: 50 }} />
          </Box>
          <Typography
            variant="h3"
            component="h1"
            sx={{ fontWeight: 600, color: "#fff", mb: 4 }}
          >
            Finalize Booking
          </Typography>
          <Typography
            variant="subtitle1"
            component="h2"
            sx={{
              color: "#c5bebe",
              mb: 1,
              fontWeight: 300,
              letterSpacing: "0.5px",
            }}
          >
            Almost there! <strong>Review your booking details.</strong> Please
            ensure all information <br /> is correct before proceeding to
            checkout.
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
