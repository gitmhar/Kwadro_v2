import {
  Box,
  Button,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import darkInputStyles from "../../theme/darkInputStyles";
import { useEffect, useState } from "react";
import { reservationServices } from "../../api/reservation";
import { useNavigate } from "react-router-dom";
import { checkOverlap } from "../../utils/booking/checkOverlap";
import type { CheckOverlap } from "../../types/booking";
import {
  isTooEarly,
  isTooLate,
  pastTheTime,
} from "../../utils/booking/timeUtils";
import { getAvailableDurations } from "../../utils/booking/availableDurations";
import { combineDateAndTime } from "../../utils/booking/dateUtils";

interface BookingFormProps {
  selectedDate: Date;
  tableNumber: number | null;
  getOperatingHours: (date: Date) => { open: number; close: number };
  busySlots: CheckOverlap[];
}

export default function Forms({
  selectedDate,
  tableNumber,
  getOperatingHours,
  busySlots,
}: BookingFormProps) {
  const { open, close } = getOperatingHours(selectedDate);
  const [startTime, setStartTime] = useState(
    `${String(open).padStart(2, "0")}:00`,
  );
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    duration: "1",
    attendees: "1",
  });
  const [isLoading, setIsLoading] = useState(false);
  const durationHours = Number(formData.duration);
  const hasConflict = checkOverlap(
    startTime,
    durationHours,
    selectedDate,
    busySlots,
  );
  const isPastTime = pastTheTime(startTime, selectedDate);
  const tooEarly = isTooEarly(startTime, selectedDate);
  const tooLate = isTooLate(startTime, durationHours, selectedDate);

  const isBlocked = tooEarly || tooLate || isPastTime || hasConflict;

  const minTime = `${String(open).padStart(2, "0")}:00`;
  const maxTime = `${String(close - 1).padStart(2, "0")}:59`;

  const durations = getAvailableDurations(startTime, selectedDate, busySlots);

  const getErrorMessage = () => {
    if (!isBlocked) return "";

    if (tooLate) {
      return `We close at ${close === 24 ? "12 MN" : close > 12 ? close - 12 + " PM" : close + " AM"}`;
    }
    if (tooEarly) {
      return `We open at ${open >= 12 ? (open === 12 ? "12 NN" : open - 12 + " PM") : open + " AM"}`;
    }
    if (isPastTime) {
      return "You cannot book in the past!";
    }
    return "Slot Occupied!";
  };

  useEffect(() => {
    const openingTime = `${open.toString().padStart(2, "0")}:00`;
    setStartTime(openingTime);
  }, [selectedDate, open]);

  const navigate = useNavigate();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleDurationChange = (
    event: React.MouseEvent<HTMLElement>,
    newDuration: string | null,
  ) => {
    if (newDuration !== null) {
      setFormData({
        ...formData,
        duration: newDuration,
      });
    }
  };

  const handleSubmit = async (event: React.SubmitEvent) => {
    event.preventDefault();
    if (isLoading || isBlocked) return;

    setIsLoading(true);

    const localDateTime = combineDateAndTime(selectedDate, startTime);

    const submissionData = {
      ...formData,
      startTime: localDateTime.toISOString(),
      tableNumber: tableNumber,
      paymentMethod: "stripe",
    };

    try {
      const data = await reservationServices.createReservation(submissionData);
      if (data.url) {
        window.location.href = data.url;
      } else {
        console.log("Reservation created without payment!");
        navigate("/");
      }
    } catch (error: any) {}
  };

  return (
    <Box component="form" sx={{ p: 2, borderRadius: 4 }}>
      <Stack spacing={2.5}>
        {/* Start Time */}
        <Box>
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
            Start Time
          </Typography>
          <TextField
            type="time"
            value={startTime}
            onChange={(e) => setStartTime(e.target.value)}
            error={isBlocked}
            fullWidth
            sx={darkInputStyles}
            helperText={getErrorMessage()} // Change this after checking what it does
            slotProps={{
              htmlInput: {
                min: minTime,
                max: maxTime,
              },
            }}
          />
        </Box>

        {/* Duration */}
        <Box>
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
            Duration
          </Typography>
          <ToggleButtonGroup
            value={formData.duration}
            onChange={handleDurationChange}
            exclusive
            fullWidth
            sx={{
              display: "flex",
              flexWrap: "wrap", // Allows buttons to drop to the next line
              gap: 1.5, // Space between the buttons
              "& .MuiToggleButton-root": {
                flex: "1 0 calc(33.33% - 12px)", // This makes 3 items per row on mobile
                minWidth: "80px",
                border: "1px solid rgba(255,255,255,0.1) !important",
                borderRadius: "50px !important",
                color: "white",
                textTransform: "none",
                fontSize: "0.85rem",
                py: 1,
                "&.Mui-selected": {
                  borderColor: "#2cf37d !important",
                  color: "#2cf37d",
                  bgcolor: "rgba(44, 243, 125, 0.1)",
                },
              },
            }}
          >
            {durations.map((d) => (
              <ToggleButton key={d} value={d}>
                {d} {d === 1 ? "Hour" : "Hours"}
              </ToggleButton>
            ))}
          </ToggleButtonGroup>
        </Box>

        {/* Contact Information */}
        <Box>
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
            Contact Info
          </Typography>
          <Stack spacing={1.5}>
            <TextField
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Email"
              fullWidth
              sx={darkInputStyles}
            />
            <TextField
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Name"
              fullWidth
              sx={darkInputStyles}
            />
            <TextField
              type="text"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              placeholder="Contact Number"
              fullWidth
              sx={darkInputStyles}
              slotProps={{
                htmlInput: {
                  minLength: 0,
                  maxLength: 11,
                  inputMode: "numeric",
                  pattern: [0 - 9],
                },
              }}
            />
          </Stack>
        </Box>

        {/* Number of Kasama */}

        <Box>
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
            Number of Attendees
          </Typography>
          <TextField
            type="number"
            name="attendees"
            value={formData.attendees}
            onChange={handleChange}
            placeholder="Number of Attendees"
            fullWidth
            sx={darkInputStyles}
          />
        </Box>

        {/* Confirm Button */}
        <Box sx={{ pt: 1 }}>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{
              bgcolor: "#00E676",
              color: "#606462",
              fontWeight: "900",
              py: { xs: 1.2, sm: 1.8 },
              borderRadius: "50px",
              fontSize: { xs: "0.85rem", sm: "1rem" },
              textTransform: "none",
              boxShadow: "0px 4px 20px rgba(44, 243, 125, 0.3)",
              "&:hover": { bgcolor: "#24cc68" },
            }}
          >
            Confirm Booking
          </Button>
          <Typography
            variant="caption"
            sx={{
              display: "flex",
              justifyContent: "center",
              textAlign: "center",
              color: "#9c9c9c",
              fontSize: { xs: "0.6rem", sm: "0.85rem" },
              mt: 2,
            }}
          >
            By confirming, you agree to our Terms of Service
          </Typography>
        </Box>
      </Stack>
    </Box>
  );
}
