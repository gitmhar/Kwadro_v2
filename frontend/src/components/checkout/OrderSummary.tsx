import { useEffect, useState } from "react";
import { Divider, Stack, Typography, Button, Box } from "@mui/material";
import PaymentsIcon from "@mui/icons-material/Payments";
import SummaryRow from "./shared/SummaryRow";
import { reservationServices } from "../../api/reservation";
import {
  calculateBookingPrice,
  formatPrice,
  HOURLY_RATE,
} from "../../utils/booking/price.util";
import BaseCard from "../ui/cards/BaseCard";
import { useNavigate } from "react-router-dom";
import { stripeServices } from "../../api/stripe";

interface OrderSummaryProps {
  duration: any;
  bookingData: any;
  reservationId: string;
  isSuccessPage: boolean;
  onBack: () => void;
}

export default function OrderSummary({
  duration,
  bookingData,
  reservationId,
  isSuccessPage = false,
  onBack,
}: OrderSummaryProps) {
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleFinalSubmit = async () => {
    setIsLoading(true);
    try {
      const response = await stripeServices.createCheckout(reservationId);
      console.log("Server Response:", response.data);
      if (response.url) {
        window.location.href = response.url;
      } else {
        throw new Error("Stripe URL not found in response");
      }
    } catch (error: any) {
      console.error("Payment Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleAddToCalendar = () => {
    console.log("Button clicked! Current data:", bookingData);
    if (!bookingData) return;

    try {
      const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";

      const formatGoogleDate = (date: string | Date) =>
        new Date(date).toISOString().replace(/-|:|\.\d\d\d/g, "");

      const start = formatGoogleDate(bookingData.startTime);

      const end = formatGoogleDate(
        new Date(
          new Date(bookingData.startTime).getTime() +
            bookingData.duration * 60 * 60 * 1000,
        ),
      );

      const params = new URLSearchParams({
        text: `Billiard Reservation: Table ${bookingData.tableNumber || "01"}`,
        dates: `${start}/${end}`,
        details: `Reservation for ${bookingData.name || "Guest"}. See you at the hall!`,
        location: "Quezon City",
      });

      window.open(`${baseUrl}&${params.toString()}`, "_blank");
    } catch (error) {
      console.error("Error generating calendar link", error);
    }
  };

  const displayTotal = calculateBookingPrice(duration);

  return (
    <BaseCard sx={{ p: 4, height: "100%", width: "350px" }}>
      <Stack spacing={3}>
        <Typography variant="h6" fontWeight="bold">
          Price Summary
        </Typography>
        <Stack spacing={2}>
          <SummaryRow
            label="Hourly Rate:"
            value={`$${HOURLY_RATE}.00`}
            bold={false}
            large={false}
          />
          <SummaryRow
            label="Duration:"
            value={`${duration} hour/s`}
            bold={false}
            large={false}
          />
          <SummaryRow
            label="Sub Total:"
            value={`${formatPrice(displayTotal)}`}
            bold={false}
            large={false}
          />
          <SummaryRow
            label="Taxes/Fee:"
            value={`${formatPrice(displayTotal)}`}
            bold={false}
            large={false}
          />
        </Stack>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.1)", my: 1 }} />
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography
              variant="caption"
              sx={{ color: "#888", display: "block", fontWeight: "bold" }}
            >
              TOTAL AMOUNT
            </Typography>
            <Typography
              variant="h3"
              sx={{ color: "#2cf37d", fontWeight: "bold" }}
            >
              {formatPrice(displayTotal)}
            </Typography>
          </Box>

          {/* Small Icon Box from your picture */}
          <Box
            sx={{ bgcolor: "rgba(44, 243, 125, 0.1)", p: 1, borderRadius: 1.5 }}
          >
            <PaymentsIcon sx={{ color: "#2cf37d" }} />
          </Box>
        </Box>
        <Stack spacing={2} sx={{ mt: 2 }}>
          {isSuccessPage ? (
            <>
              <Button
                variant="contained"
                onClick={handleAddToCalendar}
                disabled={isLoading}
                fullWidth
                size="large"
                sx={{
                  fontWeight: "bold",
                  borderRadius: "40px",
                  py: 2,
                  bgcolor: "#2cf37d",
                  color: "black",
                  "&:hover": { bgcolor: "#24c966" },
                }}
              >
                Add to Calendar
              </Button>
              <Button
                variant="outlined"
                onClick={() => navigate("/")}
                fullWidth
                sx={{
                  borderRadius: "40px",
                  py: 1.5,
                  color: "white",
                  borderColor: "#333",
                  textTransform: "none",
                }}
              >
                Back to Home
              </Button>
            </>
          ) : (
            <>
              <Button
                variant="contained"
                onClick={handleFinalSubmit}
                disabled={isLoading}
                fullWidth
                size="large"
                sx={{
                  fontWeight: "bold",
                  borderRadius: "40px",
                  py: 2,
                  bgcolor: "#2cf37d",
                  color: "black",
                  "&:hover": { bgcolor: "#24c966" },
                }}
              >
                {isLoading ? "Redirecting" : "Proceed to Payment"}
              </Button>

              <Button
                variant="outlined"
                onClick={onBack}
                fullWidth
                sx={{
                  borderRadius: "40px",
                  py: 1.5,
                  color: "white",
                  borderColor: "#333",
                  textTransform: "none",
                }}
              >
                Back to Home
              </Button>
            </>
          )}
        </Stack>
      </Stack>
    </BaseCard>
  );
}
