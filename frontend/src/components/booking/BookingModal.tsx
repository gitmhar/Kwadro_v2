import {
  Box,
  Container,
  Divider,
  Grid,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { Close } from "@mui/icons-material";
import { useState } from "react";
import BookingCalendar from "./BookingCalendar";
import Forms from "../Forms";
import ScheduleBlock from "./partials/ScheduleBlock";

export default function BookingModal({
  open,
  handleClose,
}: {
  open: boolean;
  handleClose: () => void;
}) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  return (
    <Modal open={open} onClose={handleClose}>
      <Box
        sx={{
          bgcolor: "#121417",
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",

          width: { xs: "95%", md: "800px" },
          maxHeight: "90vh",
          overflowY: "auto",

          borderRadius: "24px",
          p: 2,
          boxShadow: 24,
          outline: "none",
        }}
      >
        <IconButton
          onClick={handleClose}
          sx={{
            position: "absolute",
            right: 16,
            top: 16,
            color: "#9c9c9c",
            "&:hover": { color: "white" },
          }}
        >
          <Close />
        </IconButton>

        <Container maxWidth="lg">
          <Box>
            <Typography
              variant="caption"
              sx={{
                color: "#00E676",
                fontWeight: "bold",
                mb: 1,
                display: "block",
                textTransform: "uppercase",
              }}
            >
              Standard 9FT
            </Typography>
            <Typography
              variant="h4"
              component="h1"
              fontWeight={600}
              gutterBottom
              sx={{ color: "white" }}
            >
              Book Table 01
            </Typography>
          </Box>
          <Divider sx={{ border: "1px solid #606462", mb: 2 }} />
          <Grid container spacing={2}>
            <Grid size={{ xs: 12, md: 6 }}>
              <BookingCalendar
                selectedDate={selectedDate}
                setSelectedDate={setSelectedDate}
              />
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <Typography
                variant="caption"
                sx={{
                  color: "#9c9c9c",
                  fontWeight: "bold",
                  mb: 1,
                  display: "block",
                  textTransform: "uppercase",
                }}
              >
                Today's Schedule
              </Typography>
              <Stack spacing={2}>
                <ScheduleBlock
                  status="Occupied"
                  time="14:00 - 15:30"
                  type="occupied"
                />
                <ScheduleBlock
                  status="RESERVED"
                  time="15:30 - 17:00"
                  type="reserved"
                />
                <ScheduleBlock
                  status="AVAILABLE"
                  time="17:00 - 22:00"
                  type="available"
                />
              </Stack>
              <Forms />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Modal>
  );
}
