import { Box } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

interface ProgressBarProps {
  percentageFilled: number;
  color?: string;
}

export default function ProgressBar({
  percentageFilled,
  color = "rgba(34, 197, 94, 0.2)",
}: ProgressBarProps) {
  return (
    <Box
      sx={{
        height: "20px",
        flex: 1,
        backgroundColor: cueColors.surfaceDim,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          top: 0,
          bottom: 0,
          left: 0,
          backgroundColor: color,
          width: `${percentageFilled}%`,
        }}
      />
    </Box>
  );
}
