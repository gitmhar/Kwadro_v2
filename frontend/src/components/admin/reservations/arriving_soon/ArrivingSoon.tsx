import { Box, Typography } from "@mui/material";
import ASGrid from "./ASGrid";

export default function ArrivingSoon() {
  return (
    <Box>
      <Box sx={{ mb: { xs: 2, sm: 3 } }}>
        <Typography
          variant="h4"
          sx={{ fontWeight: 600, fontSize: { xs: "1.5rem", sm: "2rem" } }}
        >
          Arriving Soon
        </Typography>
        <Typography
          variant="subtitle1"
          sx={{
            fontWeight: 400,
            color: "#777",
            fontSize: { xs: "0.9rem", sm: "1rem" },
          }}
        >
          Immediate operational priorities
        </Typography>
      </Box>
      <Box>
        <ASGrid />
      </Box>
    </Box>
  );
}
