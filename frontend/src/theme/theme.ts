import { createTheme, responsiveFontSizes } from "@mui/material/styles";

let theme = createTheme({
  typography: {
    fontFamily: '"Poppins", "Great Vibes", sans-serif',

    h1: { fontWeight: 900 },
    h2: { fontWeight: 700 },
  },
  palette: {
    primary: {
      main: "#212529",
    },
    secondary: {
      main: "#10b981",
    },
    text: {
      primary: "#00E676",
      secondary: "#9c9c9c",
    },
    background: {
      default: "#121417",
      paper: "#1a1d21",
    },
  },
});
theme = responsiveFontSizes(theme);

export default theme;
