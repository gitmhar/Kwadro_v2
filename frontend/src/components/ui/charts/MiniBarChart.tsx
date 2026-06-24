import { Box } from "@mui/material";

interface MiniBarChartProps {
  data: number[];
  height?: number;
  barWidth?: number;
  gap?: number;
  color?: string;
  highlightColor?: string;
  highlightIndices?: number[];
  maxValue?: number;
  flexBars?: boolean;
}

export default function MiniBarChart({
  data,
  height = 32,
  barWidth = 4,
  gap = 4,
  color,
  highlightColor,
  highlightIndices = [],
  maxValue,
  flexBars,
}: MiniBarChartProps) {
  const max = maxValue ?? Math.max(...data, 1);

  return (
    <Box
      sx={{
        mt: "24px",
        display: "flex",
        gap: "8px",
        height: "40px",
        alignItems: "flex-end",
        overflow: "hidden",
      }}
    >
      {data.map((value, idx) => {
        const isHighlight = highlightIndices.includes(idx);

        return (
          <Box
            key={idx}
            sx={{
              ...(flexBars ? { flex: 1 } : { width: `${barWidth}px` }),
            //   width: `${barWidth}px`,
              height: `${(value / max) * 100}%`,
              backgroundColor:
                isHighlight && highlightColor ? highlightColor : color,
              transition: "height 0.3s ease",
            }}
          />
        );
      })}
    </Box>
  );
}
