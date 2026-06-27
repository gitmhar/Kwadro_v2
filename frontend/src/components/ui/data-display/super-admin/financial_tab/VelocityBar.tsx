import { Box } from "@mui/material";
import { cueColors } from "../../../../../theme/dashboard/cueColors";
import ProgressBar from "../../../shared/ProgressBar";

interface VelocityBarProps {
  value: number;
  minLabel?: string;
  maxLabel?: string;
  color?: string;
  trackColor?: string;
  height?: number;
  tier?: {
    opacity?: number;
  };
}

export default function VelocityBar({
  value,
  minLabel,
  maxLabel,
  color = cueColors.primary,
  trackColor = cueColors.surfaceContainer,
  height = 6,
  tier,
}: VelocityBarProps) {
  const showLabels = Boolean(minLabel || maxLabel);

  return (
    <Box>
      <ProgressBar
        percentageFilled={value}
        color={color}
        sx={{
          backgroundColor: trackColor,
          height: `${height}px`,
          opacity: tier?.opacity ?? 1,
        }}
        barSx={{ backgroundColor: color, transition: "width 0.5s ease-in-out" }}
      />
      {showLabels && (
        <Box
          sx={{
            display: "flex",
            justifyContent: minLabel ? "space-between" : "flex-end",
            mt: "8px",
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: "10px",
            opacity: 0.4,
            color: color,
            textTransform: "uppercase",
          }}
        >
          {minLabel && <span>{minLabel}</span>}
          {maxLabel && <span>{maxLabel}</span>}
        </Box>
      )}
    </Box>
  );
}
