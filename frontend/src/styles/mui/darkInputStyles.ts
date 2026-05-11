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

export default darkInputStyles;