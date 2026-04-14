import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { Box, Stack } from "@mui/material";
import OrderSummary from "../../components/checkout/OrderSummary";
import TableInformation from "../../components/checkout/TableInformation";
import GuestInformation from "../../components/checkout/GuestInformation";
import CheckoutLayout from "../../components/checkout/layout/CheckoutLayout";
import CheckoutHeader from "../../components/checkout/layout/CheckoutHeader";
import { reservationServices } from "../../api/reservation";

export default function CheckoutPage() {
  const location = useLocation();
  const bookingData = location.state;
  const navigate = useNavigate();
  if (!bookingData) return <Navigate to="/book" />;

  const handleBack = async () => {
    navigate("/book");
  };

  return (
    <CheckoutLayout
      header={
        <CheckoutHeader
          title="Finalize Booking"
          subtitle={
            <>
              Almost there! <strong>Review your booking details.</strong> Please
              ensure all information is correct before you proceed.
            </>
          }
        />
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: { xs: "center", md: "flex-start" },
          gap: { xs: 3, sm: 4 },
        }}
      >
        <Box sx={{ flex: 1.5 }}>
          <Stack spacing={3}>
            <TableInformation data={bookingData.submissionData} />
            <GuestInformation data={bookingData.submissionData} />
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <OrderSummary
            duration={bookingData.submissionData.duration}
            total={bookingData.submissionData.totalAmount}
            bookingData={bookingData.submissionData}
            isSuccessPage={false}
            onBack={handleBack}
          />
        </Box>
      </Box>
    </CheckoutLayout>
  );
}
