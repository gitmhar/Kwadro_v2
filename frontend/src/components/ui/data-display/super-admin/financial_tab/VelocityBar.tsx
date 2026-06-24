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
}

export default function VelocityBar({
  value,
  minLabel = "MIN FLOW",
  maxLabel = "PEAK CAPACITY",
  color = cueColors.primary,
  trackColor = cueColors.surfaceContainer,
  height = 6,
}: VelocityBarProps) {
  return (
    <Box>
      <ProgressBar
        percentageFilled={value}
        color={color}
        sx={{ backgroundColor: trackColor, height: `${height}px` }}
        barSx={{ backgroundColor: color, transition: "width 0.5s ease" }}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          mt: "8px",
          fontFamily: '"JetBrains Mono", monospace',
          fontSize: "10px",
          opacity: 0.4,
          color: cueColors.primary,
          textTransform: "uppercase",
        }}
      >
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </Box>
    </Box>
  );
}
