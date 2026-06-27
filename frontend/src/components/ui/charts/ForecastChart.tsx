import {
  Area,
  CartesianGrid,
  ComposedChart,
  Line,
  ReferenceLine,
  ResponsiveContainer,
  Text,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

import { Box, Typography } from "@mui/material";
import { cueColors } from "../../../theme/dashboard/cueColors";

export interface ForecastDataPoint {
  time: string;
  historical?: number;
  predictive?: number;
  confidenceLower?: number;
  confidenceUpper?: number;
}

export interface ForecastEngineChartProps {
  data?: ForecastDataPoint[];
  currentMarkerTime?: string;
}

export default function ForecastEngineChart({
  data,
  currentMarkerTime = "22:00",
}: ForecastEngineChartProps) {

  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart
        data={data}
        margin={{ top: 15, right: 10, left: -40, bottom: 0 }}
      >
        <CartesianGrid vertical={false} stroke="#2E2E2E" strokeWidth={1} />

        <XAxis
          dataKey="time"
          tickLine={false}
          stroke={cueColors.secondaryContainer}
          strokeWidth={1}
          tick={{
            fill: cueColors.onSurfaceVariant,
            fontFamily: '"JetBrains Mono", monospace',
            fontSize: 10,
          }}
          dy={6}
        />

        <YAxis
          tickLine={false}
          axisLine={false}
          tick={false}
          domain={["auto", "auto"]}
        />

        <Tooltip
          cursor={{
            stroke: cueColors.outlineVariant,
            strokeWidth: 1,
            strokeDasharray: "4 4",
          }}
          isAnimationActive={false}
          content={({ active, payload }) => {
            if (!active || !payload || !payload.length) return null;

            const dataPoint = payload[0].payload;

            return (
              <Box
                sx={{
                  backgroundColor: cueColors.surface,
                  border: `1px solid ${cueColors.outlineVariant}`,
                  p: 1.5,
                  display: "flex",
                  flexDirection: "column",
                  gap: 0.5,
                }}
              >
                <Typography
                  sx={{
                    fontFamily: "JetBrains Mono, monospace",
                    fontSize: "10px",
                    color: cueColors.onSurfaceVariant,
                  }}
                >
                  TIME: {dataPoint.time}
                </Typography>
                {dataPoint.historical !== undefined && (
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: cueColors.primary,
                    }}
                  >
                    HISTORICAL: {dataPoint.historical}
                  </Typography>
                )}
                {dataPoint.predictive !== undefined && (
                  <Typography
                    sx={{
                      fontFamily: "JetBrains Mono, monospace",
                      fontSize: "11px",
                      fontWeight: 700,
                      color: cueColors.primary,
                    }}
                  >
                    PROJECTED: {dataPoint.predictive}
                  </Typography>
                )}
              </Box>
            );
          }}
        />

        <Area
          type="monotone"
          dataKey="confidenceUpper"
          stroke="none"
          fill="rgba(255, 255, 255, 0.07)"
          activeDot={false}
        />

        <Line
          type="monotone"
          dataKey="historical"
          stroke={cueColors.primary}
          strokeWidth={2}
          dot={(props: any) => {
            if (props.payload?.time === currentMarkerTime) {
              return (
                <circle
                  cx={props.cx}
                  cy={props.cy}
                  r={4}
                  fill={cueColors.primary}
                />
              );
            }
            return null;
          }}
          activeDot={{
            r: 5,
            fill: cueColors.primary,
            stroke: cueColors.surfaceContainerLow,
            strokeWidth: 2,
          }}
        />

        <Line
          type="monotone"
          dataKey="predictive"
          stroke="#ffffff"
          strokeDasharray="6 6"
          strokeWidth={2}
          dot={false}
          activeDot={{
            r: 5,
            fill: cueColors.primary,
            stroke: cueColors.surfaceContainerLow,
            strokeWidth: 2,
          }}
        />

        <ReferenceLine
          x={currentMarkerTime}
          stroke={cueColors.secondaryContainer}
          strokeDasharray="2 2"
          label={(props) => {
            const { viewBox } = props;
            if (!viewBox) return null;

            const fallbackY = viewBox.y + viewBox.height / 2;

            return (
              <Text
                x={viewBox.x + 8}
                y={viewBox.y ? viewBox.y + 220 : fallbackY}
                textAnchor="start"
                fill={cueColors.primary}
                style={{
                  fontFamily: '"JetBrains Mono", monospace',
                  fontSize: "10px",
                  fontWeight: 700,
                  letterSpacing: "0.05em",
                }}
              >
                NOW
              </Text>
            );
          }}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
