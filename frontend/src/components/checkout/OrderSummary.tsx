import { Divider, Stack, Typography, Button } from "@mui/material";
import SummaryRow from "./SummaryRow";
import { useState } from "react";
import { reservationServices } from "../../api/reservation";
import { calculateBookingPrice, formatPrice, HOURLY_RATE } from "../../utils/booking/price.util";

export default function OrderSummary({ duration, bookingData }: any) {
  const [isLoading, setIsLoading] = useState(false);

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    try {
      
      const finalData = {
        ...bookingData,
        paymentMethod: 'stripe',
      }

      // console.log("Sending data to backend:", bookingData);
      const response = await reservationServices.createReservation(finalData);
      console.log("Server Response:", response.data);
      if (response.url) window.location.href = response.url;
    } catch (error: any) {
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  const displayTotal = calculateBookingPrice(duration);

  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
        Order Summary
      </Typography>
      <SummaryRow
        label="Booking Price:"
        value={`$${HOURLY_RATE}.00`}
        bold={false}
        large={false}
      />
      <SummaryRow
        label="Game Duration"
        value={`${duration} hours`}
        bold={false}
        large={false}
      />
      <Divider />
      <SummaryRow label="Total Amount" value={formatPrice(displayTotal)} bold large />
      <Button
        onClick={handleFinalSubmit}
        disabled={isLoading}
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3, fontWeight: "bold" }}
        color="primary"
      >
        {isLoading ? "Redirecting" : "Proceed to Payment"}
      </Button>
    </Stack>
  );
}
