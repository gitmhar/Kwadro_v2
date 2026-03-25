import {
  Box,
  Container,
  Card,
  Grid,
  Stack,
  Divider,
  Typography,
  CardActions,
  Button,
} from "@mui/material";

export default function BookingSummary() {
  return (
    <Box sx={{ display: "flex", p: 4 }}>
      <Container maxWidth="md">
        <Card sx={{ p: 3, borderRadius: 2, boxShadow: 3 }}>
          <Typography variant="h4" component="h1" fontWeight={600} gutterBottom>
            Checkout
          </Typography>
          <Divider sx={{ mb: 3 }} />

          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
                Billing Information
              </Typography>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  component="p"
                  fontWeight="semibold"
                  color="#9C9C9C"
                >
                  Reservation Date and Time:
                </Typography>
                <Typography variant="body1" component="span">
                  2026-03-26 | 02:00 PM-03:00 PM
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  component="p"
                  fontWeight="semibold"
                  color="#9C9C9C"
                >
                  Biller's Name:
                </Typography>
                <Typography variant="body1" component="span">
                  Johnny Bravado
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  component="p"
                  fontWeight="semibold"
                  color="#9C9C9C"
                >
                  Biller's Email:
                </Typography>
                <Typography variant="body1" component="span">
                  j0hnmh4r23@gmail.com
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  component="p"
                  fontWeight="semibold"
                  color="#9C9C9C"
                >
                  Biller's Contact Number:
                </Typography>
                <Typography variant="body1" component="span">
                  09123456789
                </Typography>
              </Box>
              <Box sx={{ mb: 2 }}>
                <Typography
                  variant="body1"
                  component="p"
                  fontWeight="semibold"
                  color="#9C9C9C"
                >
                  Number of Attendees:
                </Typography>
                <Typography variant="body1" component="span">
                  10 persons
                </Typography>
              </Box>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
                Order Summary
              </Typography>
              <Stack spacing={1}>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body1"
                    component="p"
                    fontWeight="semibold"
                    color="#9C9C9C"
                  >
                    Booking Price:
                  </Typography>
                  <Typography variant="body1" component="span">
                    $20.00
                  </Typography>
                </Box>
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography
                    variant="body1"
                    component="p"
                    fontWeight="semibold"
                    color="#9C9C9C"
                  >
                    Game Duration:
                  </Typography>
                  <Typography variant="body1" component="span">
                    5 hours
                  </Typography>
                </Box>
                <Divider />
                <Box sx={{ display: "flex", justifyContent: "space-between" }}>
                  <Typography variant="h6" component="h2" fontWeight="bold">
                    Total Amount:
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    fontWeight={600}
                  >
                    $100.00
                  </Typography>
                </Box>
              </Stack>
              <CardActions>
                <Button
                  variant="contained"
                  fullWidth
                  size="large"
                  sx={{ mt: 3, fontWeight: "bold"}}
                  color="primary"
                >
                  Proceed to Payment
                </Button>
              </CardActions>
            </Grid>
          </Grid>
        </Card>
      </Container>
    </Box>
  );
}
