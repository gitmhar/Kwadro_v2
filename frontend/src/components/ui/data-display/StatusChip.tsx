import { Box, Typography } from "@mui/material";

interface StatusChipProps {
  label: string;

  // Styling
  bg?: string;
  color?: string;
  variant?: "light" | "dark" | "custom";
  shape?: "square" | "pill";
  sx?: object;
}

export default function StatusChip({
  label,
  bg,
  color,
  variant = "custom",
  shape = "square",
  sx,
}: StatusChipProps) {
  const getVariantStyles = () => {
    if (variant === "dark") return { bg: "#000000", text: "#FFFFFF" };
    if (variant === "light") return { bg: "#F0F0F0", text: "#1A1C1C" };
    return { bg: bg || "transparent", text: color || "inherit" };
  };

  const styles = getVariantStyles();

  return (
    <Box
      sx={{
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: 0.5,
        // mt: 0.5,
        px: shape === "pill" ? 1.5 : 1,
        py: shape === "pill" ? 0.5 : 0.2,
        bgcolor: styles.bg,
        color: styles.text,
        borderRadius: shape === "pill" ? "20px" : "6px",
        ...sx,
      }}
    >
      <Typography
        sx={{
          fontWeight: 800,
          fontSize: "0.65rem",
          letterSpacing: 0.5,
          textTransform: "uppercase",
        }}
      >
        {label}
      </Typography>
    </Box>
  );
}
