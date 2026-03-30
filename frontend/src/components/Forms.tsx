import {
  Box,
  Button,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";

const darkInputStyles = {
  "& .MuiOutlinedInput-root": {
    color: "white",
    bgcolor: "#1a1d21",
    borderRadius: "16px",

    // Responsive font
    fontSize: { xs: "0.8rem", sm: "0.9rem" },

    // This controls input height
    "& input": {
      padding: {
        xs: "10px 12px", // mobile
        sm: "14px 16px", // desktop
      },
    },

    "& fieldset": { border: "none" },
    "&:hover fieldset": {
      border: "1px solid rgba(44, 243, 125, 0.3)",
    },
    "&.Mui-focused fieldset": {
      border: "1px solid #2cf37d",
    },
  },

  '& input[type="time"]::-webkit-calendar-picker-indicator': {
    filter: "invert(1)",
  },
};

export default function Forms() {
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
            fullWidth
            defaultValue="10:00"
            sx={darkInputStyles}
          />
        </Box>

        {/* Duration - Fix for Mobile Wrapping */}
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
            exclusive
            fullWidth
            sx={{
              display: "flex",
              flexWrap: "wrap", // This allows buttons to drop to the next line
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
            <ToggleButton value="1">1 Hour</ToggleButton>
            <ToggleButton value="2">2 Hours</ToggleButton>
            <ToggleButton value="3">3 Hours</ToggleButton>
            <ToggleButton value="4">4 Hours</ToggleButton>
            <ToggleButton value="5">5 Hours</ToggleButton>
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
            <TextField placeholder="Name" fullWidth sx={darkInputStyles} />
            <TextField
              placeholder="Contact Number"
              fullWidth
              sx={darkInputStyles}
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
            placeholder="Number of Attendees"
            type="number"
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
