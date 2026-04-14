import { Box, Typography } from "@mui/material";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import type { ReactNode } from "react";

interface CheckoutHeaderProps {
  title: string;
  subtitle: ReactNode;
  icon?: ReactNode;
}

export default function CheckoutHeader({
  title,
  subtitle,
  icon,
}: CheckoutHeaderProps) {
  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: 900,
        mx: "auto",
        px: { xs: 1, sm: 2 },
        textAlign: { xs: "center", md: "left" },
        mb: { xs: 4, md: 6 },
      }}
    >
      <Box
        sx={{
          width: { xs: 70, sm: 80, md: 90 },
          height: { xs: 70, sm: 80, md: 90 },
          mx: {xs: "auto", md: 0},
          mb: 3,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "rgba(44,243,125, 0.1)",
          border: "1px solid rgba(44, 243, 125, 0.05)",
          animation: "pulse 2s infinite ease-in-out",
          "@keyframes pulse": {
            "0%": { transform: "scale(0.95)", opacity: 0.8 },
            "50%": { transform: "scale(1)", opacity: 1 },
            "100%": { transform: "scale(0.95)", opacity: 0.8 },
          },
        }}
      >
        {icon || (
          <CheckCircleIcon sx={{ fontSize: { xs: 36, sm: 42, md: 50 } }} />
        )}
      </Box>
      <Typography
        variant="h3"
        component="h1"
        sx={{
          fontWeight: 600,
          color: "#fff",
          mb: 2,
          fontSize: {
            xs: "1.8rem",
            sm: "2.2rem",
            md: "2.8rem",
          },
        }}
      >
        {title}
      </Typography>
      <Typography
        variant="subtitle1"
        component="h2"
        sx={{
          color: "#c5bebe",
          fontWeight: 300,
          letterSpacing: "0.5px",
          maxWidth: 550,
          mx: { xs: "auto", md: 0 },
          fontSize: {
            xs: "0.95rem",
            sm: "1rem",
            md: "1.05rem",
          },
          lineHeight: 1.6,
        }}
      >
        {subtitle}
      </Typography>
    </Box>
  );
}
