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
      secondary: "#9c9c9c"
    }
  },
});
theme = responsiveFontSizes(theme);

export default theme;
