import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { Box } from "@mui/material";

const DAYS = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
const HOURS = Array.from({ length: 24 }, (_, i) => i);

interface HeatmapChartProps {
  data: number[][];
}

export default function HeatmapChart({ data }: HeatmapChartProps) {
  const seriesData = useMemo(() => {
    const result: [number, number, number][] = [];
    for (let dayIdx = 0; dayIdx < DAYS.length; dayIdx++) {
      for (let hourIdx = 0; hourIdx < HOURS.length; hourIdx++) {
        const value = data[dayIdx]?.[hourIdx] ?? 0;
        result.push([hourIdx, dayIdx, value]);
      }
    }
    return result;
  }, [data]);

  const option = {
    tooltip: {
      trigger: "item",
      formatter: (params: any) => {
        const [hourIdx, dayIdx, value] = params.data;
        const loadPercent = Math.round(value * 100);
        return `Day: ${DAYS[dayIdx]}<br/>Hour: ${hourIdx}:00<br/>Load: ${loadPercent}%`;
      },
      borderWidth: 1,
      borderColor: "#ccc",
      backgroundColor: "rgba(0,0,0,0.8)",
      textStyle: { color: "white", fontSize: 12 },
    },
    xAxis: {
      type: "category",
      data: HOURS.map((h) => `${h}:00`),
      name: "Hour",
      nameLocation: "middle",
      nameGap: 30,
      axisLabel: {
        rotate: 45,
        interval: 3, // show every 3rd hour to avoid clutter
        fontSize: 10,
      },
    },
    yAxis: {
      type: "category",
      data: DAYS,
      name: "Day",
      nameLocation: "middle",
      nameGap: 40,
      axisLabel: {
        fontSize: 11,
      },
    },
    visualMap: {
      min: 0,
      max: 1,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: 0,
      inRange: {
        // Color gradient: low load (white/green) → high load (dark red)
        color: ["#ffffff", "#fbbf24", "#ef4444"],
      },
      outOfRange: { color: ["#e5e7eb"] },
      formatter: (value: number) => `${Math.round(value * 100)}%`,
    },
    series: [
      {
        name: "Load",
        type: "heatmap",
        data: seriesData,
        label: {
          show: false, // keep clean, tooltip handles info
        },
        emphasis: {
          itemStyle: {
            shadowBlur: 10,
            shadowColor: "rgba(0,0,0,0.5)",
            borderWidth: 1,
            borderColor: "#333",
          },
        },
        itemStyle: {
          borderRadius: 2,
        },
      },
    ],
    grid: {
      containLabel: true,
      left: 50,
      right: 20,
      top: 30,
      bottom: 50,
    },
    backgroundColor: "transparent",
  };

  // echarts-for-react has problematic typings for JSX in some TS configs.
  // Cast to any to satisfy JSX element typing.
  const EChartsComponent: any = ReactECharts;

  return (
    <Box sx={{ width: "100%", height: 400, position: "relative" }}>
      <EChartsComponent
        option={option}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "canvas" }}
      />
    </Box>
  );
}
