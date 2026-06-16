import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";
import { ExpandLess, ExpandMore } from "@mui/icons-material";

interface StepperSettingProps {
  label: string;
  description: string;
  value: number;
  onIncrement: () => void;
  onDecrement: () => void;
  formatValue?: (val: number) => string;
  step?: number;
}

export default function StepperSetting({
  label,
  description,
  value,
  onIncrement,
  onDecrement,
  formatValue = (val) => val.toFixed(1).padStart(4, "0"),
  step,
}: StepperSettingProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        py: "8px",
        borderBottom: `1px dashed ${cueColors.outlineVariant}`,
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
      <Box sx={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <Typography
          sx={{
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "1rem",
            fontWeight: 500,
            letterSpacing: "0.05em",
            lineHeight: 1.2,
            color: cueColors.primary,
            minWidth: "50px",
            textAlign: "right",
          }}
        >
          {formatValue(value)}
        </Typography>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 0 }}>
          <ExpandLess
            onClick={onIncrement}
            className="material-symbols-outlined"
            sx={{
              fontSize: "1rem",
              color: cueColors.primary,
              opacity: 0.6,
              cursor: "pointer",
              "&:hover": { opacity: 1 },
            }}
          />

          <ExpandMore
            onClick={onDecrement}
            className="material-symbols-outlined"
            sx={{
              fontSize: "1rem",
              color: cueColors.primary,
              opacity: 0.6,
              cursor: "pointer",
              "&:hover": { opacity: 1 },
            }}
          />
        </Box>
      </Box>
    </Box>
  );
}
