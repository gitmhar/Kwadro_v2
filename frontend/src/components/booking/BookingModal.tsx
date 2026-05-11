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
import Forms from "./BookingForm";
import ScheduleBlock from "./shared/ScheduleBlock";
import { getOperatingHours } from "../../utils/booking/operatingHours";
import { useBusySlots } from "../../hooks/useBusySlots";
import { getFullSchedule } from "../../utils/booking/timeUtils";

interface BookingModalProps {
  open: boolean;
  handleClose: () => void;
  tableNumber: number | null;
}

export default function BookingModal({
  open,
  handleClose,
  tableNumber,
}: BookingModalProps) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const displayTableNum = tableNumber
    ? tableNumber.toString().padStart(2, "0")
    : "00";
  const { busySlots } = useBusySlots(tableNumber, selectedDate);

  return (
    <Modal open={open} onClose={handleClose} role="dialog">
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
              Book Table {displayTableNum}
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
              <Box
                sx={{
                  maxHeight: "200px",
                  overflowY: "auto",
                  pr: 1,
                  "&::-webkit-scrollbar": {
                    width: "6px",
                  },
                  "&::-webkit-scrollbar-track": {
                    backgroundColor: "rgba(255,255,255,0.0.5)",
                    borderRadius: "10px",
                  },
                  "&::-webkit-scrollbar-thumb": {
                    backgroundColor: "#444444",
                    borderRadius: "10px",
                    "&:hover": {
                      backgroundColor: "#555555",
                    },
                  },
                }}
              >
                <Stack spacing={2}>
                  {getFullSchedule(busySlots, selectedDate)
                    .sort((a, b) => {
                      if (a.type === "available" && b.type !== "available")
                        return -1;
                      if (a.type !== "available" && b.type === "available")
                        return 1;
                      return 0;
                    })
                    .map((block, index) => (
                      <ScheduleBlock
                        key={index}
                        status={block.status}
                        time={block.time}
                        type={block.type}
                      />
                    ))}
                </Stack>
              </Box>

              <Forms
                selectedDate={selectedDate}
                tableNumber={tableNumber}
                getOperatingHours={getOperatingHours}
                busySlots={busySlots}
                handleClose={handleClose}
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </Modal>
  );
}
