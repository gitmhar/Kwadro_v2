import {
  Divider,
  Stack,
  Box,
  Typography,
  Button,
  CardActions,
} from "@mui/material";
import SummaryRow from "./SummaryRow";

export default function OrderSummary() {
  return (
    <Stack spacing={2}>
      <Typography variant="h6" component="h2" fontWeight="bold" mb={1}>
        Order Summary
      </Typography>
      <SummaryRow
        label="Booking Price:"
        value="$20.00"
        bold={false}
        large={false}
      />
      <SummaryRow
        label="Game Duration"
        value="5 hours"
        bold={false}
        large={false}
      />
      <Divider />
      <SummaryRow label="Total Amount" value="$100.00" bold large />
      <Button
        variant="contained"
        fullWidth
        size="large"
        sx={{ mt: 3, fontWeight: "bold" }}
        color="primary"
      >
        Proceed to Payment
      </Button>
    </Stack>
  );
}
