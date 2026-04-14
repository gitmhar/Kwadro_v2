import CelebrationIcon from "@mui/icons-material/Celebration";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { reservationServices } from "../../api/reservation";
import { socket } from "../../lib/socket";
import CheckoutLayout from "../../components/checkout/layout/CheckoutLayout";
import CheckoutHeader from "../../components/checkout/layout/CheckoutHeader";
import { Box, Stack } from "@mui/material";
import TableInformation from "../../components/checkout/TableInformation";
import GuestInformation from "../../components/checkout/GuestInformation";
import OrderSummary from "../../components/checkout/OrderSummary";

export default function Success() {
  const [status, setStatus] = useState("loading");
  const [bookingData, setBookingData] = useState<any>(null);
  const location = useLocation();
  const params = new URLSearchParams(location.search);
  const reservationId = params.get("id");

  useEffect(() => {
    if (!reservationId) return;

    const checkStatus = async () => {
      try {
        const res = await reservationServices.getReservationId(reservationId);
        setBookingData(res);
        setStatus(res.status);
        setBookingData(res);
      } catch (err: any) {
        console.error(err.message);
        setStatus("error");
      }
    };

    checkStatus();

    const handlePaid = (data: any) => {
      if (data.reservationId === reservationId) {
        setStatus("paid");
        setBookingData((prev: any) => ({
          ...prev,
          status: "COMPLETED",
        }));
      }
    };

    socket.on("reservation_paid", handlePaid);
    return () => {
      socket.off("reservation_paid", handlePaid);
    };
  }, [reservationId]);

  if (status === "loading") return <h1>Verifying Payment...</h1>;
  if (status === "error" || !bookingData)
    return <h1>Error verifying reservation</h1>;

  return (
    <CheckoutLayout
      header={
        <CheckoutHeader
          title="Booking Confirmed!"
          subtitle={
            <>
              Your table is polished and ready. We've sent a confirmation email
              to your inbox.
            </>
          }
          icon={
            <CelebrationIcon sx={{ fontSize: { xs: 36, sm: 42, md: 50 } }} />
          }
        />
      }
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          gap: { xs: 3, sm: 4 },
        }}
      >
        <Box sx={{ flex: 1.5 }}>
          <Stack spacing={3}>
            <TableInformation data={bookingData} />
            <GuestInformation data={bookingData} />
          </Stack>
        </Box>
        <Box sx={{ flex: 1 }}>
          <OrderSummary
            duration={bookingData.duration}
            total={bookingData.totalAmount}
            bookingData={bookingData}
            isSuccessPage={true}
          />
        </Box>
      </Box>
    </CheckoutLayout>
  );
}
