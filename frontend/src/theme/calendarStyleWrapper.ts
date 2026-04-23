import { styled } from "@mui/material";

export const calendarStyleWrapper = styled("div")(({ theme }) => ({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  // Calendar

  "&& .react-calendar": {
    width: "100%",
    // aspectRatio: "3/4",
    maxWidth: "400px",
    padding: "10px",
    border: "none",
    backgroundColor: "transparent",
    color: "#000000",
    fontFamily: theme.typography.fontFamily,
    borderRadius: "24px",
  },

  // Calendar Navigations

  "& .react-calendar__navigation": {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: "20px",
    height: "44px",
  },

  "& .react-calendar__navigation__label": {
    background: "none",
    color: "#474747",
    fontWeight: 700,
    fontSize: "1.1rem",
    pointerEvents: "none",
    flexGrow: " 0 !important",
    padding: "0 10px",
    minWidth: "150px",
    textAlign: "center",
  },

  "& .react-calendar__navigation__prev-button, .react-calendar__navigation__next-button, .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button, ":
    {
      color: "#9c9c9c",
      background: "none",
      fontSize: "1.2rem",
      minWidth: "40px",
      fontWeight: 200,
    },

  "& .react-calendar__navigation__prev2-button, .react-calendar__navigation__next2-button":
    {
      background: "transparent !important",
    },

  "& .react-calendar__navigation button:enabled:hover": {
    background: "none",
    color: "#000000",
  },

  //   The Weekdays [MON - SUN]

  "& .react-calendar__month-view__weekdays": {
    color: "#474747",
  },

  "& .react-calendar__month-view__weekdays__weekday": {
    textAlign: "center",
    padding: "10px 0",
    fontSize: "0.75rem",
    fontWeight: 700,
    color: "#a3a3a3",
    "& abbr": {
      textDecoration: "none",
    },
  },

  "& .react-calendar__month-view__days": {
    display: "grid !important",
    gridTemplateColumns: "repeat(7,1fr)",
  },

  //   Grid and Selection

  "& .react-calendar__tile": {
    borderRadius: "8px",
    // aspectRatio: "2/2",
    height: "50px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "0.9rem",
    fontWeight: 600,
    color: "#000000",
  },

  "& .react-calendar__month-view__days_day--neighboringMonth": {
    opacity: 0,
    pointerEvents: "none",
  },

  "& .react-calendar__tile--active": {
    background: "#000000 !important",
    color: "#e2e2e2",
    fontWeight: 600,
    boxShadow: "none",
  },

  "& .react-calendar__tile:enabled:hover:not(.react-calendar__tile--active)": {
    background: "#000000 !important",
  },
}));
