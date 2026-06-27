import { Box } from "@mui/material";
import {
  Bar,
  BarChart,
  Cell,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import { cueColors } from "../../../../theme/dashboard/cueColors";

export interface TrafficDataPoint {
  label: string;
  value: number;
  borderAlpha?: number;
  isHighlighted?: boolean;
}

interface WeeklyTrafficProps {
  data: TrafficDataPoint[];
  height?: number;
}

const CustomizedBar = (props: any) => {
  const { x, y, width, height, payload } = props;

  const isHighlighted = payload.isHighlighted;
  const topBorderAlpha = payload.borderAlpha ?? 0.3;

  const barColor = isHighlighted ? "#ffffff" : "#343535";
  const borderColor = `rgba(255, 255, 255, ${topBorderAlpha})`;

  if (height <= 0) return null;

  return (
    <g>
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        fill={barColor}
        style={{
          transition: "background-color 0.15s ease-in-out",
          cursor: "pointer",
        }}
      />

      <line
        x1={x}
        y1={y}
        x2={x + width}
        y2={y}
        stroke={isHighlighted ? "#ffffff" : borderColor}
        strokeWidth={1}
        opacity={isHighlighted ? 0.5 : 1}
      />
    </g>
  );
};

export default function WeeklyTrafficChart({
  data,
  height = 200,
}: WeeklyTrafficProps) {
  return (
    <ResponsiveContainer width="100%" height={height}>
      <BarChart
        data={data}
        margin={{ top: 10, right: 5, left: 5, bottom: 0 }}
        barGap={0}
        barCategoryGap="4%"
      >
        <XAxis
          dataKey="label"
          tickLine={false}
          axisLine={false}
          tick={(props) => {
            const { x, y, payload } = props;

            const item = data[payload.index];
            const isHighlighted = item?.isHighlighted;
            return (
              <Text
                x={x}
                y={y}
                dy={12}
                textAnchor="middle"
                fill={
                  isHighlighted ? cueColors.primary : cueColors.onSurfaceVariant
                }
                style={{
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "9px",
                  fontWeight: isHighlighted ? 700 : 400,
                }}
              >
                {payload.value}
              </Text>
            );
          }}
        />
        <YAxis hide domain={[0, "maxData"]} />

        <Tooltip
          cursor={{ fill: "rgba(255,255,255,0.03)" }}
          isAnimationActive={false}
          content={({ active, payload }) => {
            if (!active || !payload || !payload.length) return null;
            const dataPoint = payload[0].payload as TrafficDataPoint;
            return (
              <Box
                sx={{
                  backgroundColor: cueColors.surfaceDim,
                  border: `1px solid ${cueColors.outlineVariant}`,
                  p: 1,
                  fontFamily: "JetBrains Mono, monospace",
                  fontSize: "10px",
                  color: cueColors.primary,
                }}
              >
                VAL: {dataPoint.value}%
              </Box>
            );
          }}
        />

        <Bar
          dataKey="value"
          maxBarSize={200}
          shape={<CustomizedBar />}
          background={{ fill: "transparent" }}
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
