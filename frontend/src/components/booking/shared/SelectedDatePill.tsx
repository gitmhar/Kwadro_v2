import { Box, Stack, Typography } from "@mui/material";

export default function SelectedDatePill({
  dateString,
}: {
  dateString: string;
}) {
  return (
    <Box
      sx={{
        bgcolor: "#1a1d21",
        borderRadius: { xs: "20px", sm: "28px", md: "32px" },
        px: { xs: 1.5, sm: 2 },
        py: { xs: 1.2, sm: 1.5 },
        border: "1px solid rgba(255,255,255, 0.05)",
        width: "100%",
        boxSizing: "border-box",
      }}
    >
      <Stack spacing={0.5}>
        <Typography
          variant="caption"
          sx={{
            color: "#9c9c9c",
            fontWeight: "900",
            textTransform: "uppercase",
            letterSpacing: "1px",
            fontSize: { xs: "0.55rem", sm: "0.65rem" },
          }}
        >
          Selected Date:
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "white",
            fontWeight: "700",
            fontSize: { xs: "0.9rem", sm: "1rem", md: "1.1rem" },
          }}
        >
          {dateString}
        </Typography>
      </Stack>
    </Box>
  );
}
