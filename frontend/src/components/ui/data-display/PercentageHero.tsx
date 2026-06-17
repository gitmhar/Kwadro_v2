import { Box, Typography } from "@mui/material";

interface PercentageHeroProps {
  label: string;
  value: number;
  suffix?: string;
  description?: string;
  color?: string;
  subtitleColor?: string;
}

export default function PercentageHero({
  label,
  value,
  suffix = "%",
  description,
  color = "#000000",
  subtitleColor = "#A3A3A3",
}: PercentageHeroProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "column",
        textAlign: { xs: "center", lg: "left" },
        alignItems: { xs: "center", lg: "flex-start" },
      }}
    >
      <Typography
        variant="subtitle2"
        sx={{
          textTransform: "uppercase",
          color: subtitleColor,
          letterSpacing: 1.5,
          fontWeight: 700,
          mb: 0.5,
        }}
      >
        {label}
      </Typography>
      <Typography
        variant="h1"
        sx={{
          fontWeight: 700,
          my: 1,
          fontSize: {
            xs: "2.5rem",
            sm: "3rem",
            md: "3.75rem",
          },
          lineHeight: 1,
          color,
        }}
      >
        {value}
        <Box
          component="span"
          sx={{
            fontSize: { xs: "1.75rem", md: "2.25rem" },
            color: subtitleColor,
          }}
        >
          {suffix}
        </Box>
      </Typography>
      {description && (
        <Typography
          variant="body2"
          sx={{
            color: "#474747",
            mt: 1,
            mb: { xs: 2, md: 0 },
            whiteSpace: "pre-line",
          }}
        >
          {description}
        </Typography>
      )}
    </Box>
  );
}
