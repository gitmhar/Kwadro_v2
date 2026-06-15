import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../../theme/dashboard/cueColors";

interface PricingInputProps {
  label: string;
  description: string;
  prefix: string;
  value: string;
  onChange: (value: string) => void;
}

export default function PricingInput({
  label,
  description,
  prefix,
  value,
  onChange,
}: PricingInputProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.875rem",
            lineHeight: 1.5,
            fontWeight: 600,
            color: cueColors.onSurface,
          }}
        >
          {label}
        </Typography>
        <Typography
          sx={{
            fontFamily: '"Inter", sans-serif',
            fontSize: "0.75rem",
            color: cueColors.onSurfaceVariant,
            opacity: 0.6,
          }}
        >
          {description}
        </Typography>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: "8px" }}>
        <Typography
          component="span"
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            lineHeight: 1.2,
            color: cueColors.primary,
            opacity: 0.4,
          }}
        >
          {prefix}
        </Typography>
        <Box
          component="input"
          type="text"
          value={value}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            onChange(e.target.value)
          }
          sx={{
            width: "64px",
            backgroundColor: cueColors.surfaceDim,
            border: `1px solid ${cueColors.outlineVariant}`,
            p: "8px",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "0.8rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            lineHeight: 1.2,
            textAlign: "center",
            color: cueColors.primary,
            "&:focus": {
              outline: "none",
              borderColor: cueColors.primary,
            },
          }}
        />
      </Box>
    </Box>
  );
}
