import type { ECBasicOption } from "echarts/types/dist/shared";
import { DAYS, HOURS } from "./constants";
import { formatHeatmapTooltip } from "./formatHeatmapTooltip";

interface BuildOptionsParams {
  rawData: number[][];
  xAxisLabels: string[];
  yAxisLabels: string[];
  xAxisTickInterval?: (index: number, value: string) => boolean;
  tooltipFormatter?: (params: any) => string;
}

export function buildHeatmapOption({
  rawData,
  xAxisLabels,
  yAxisLabels,
  xAxisTickInterval,
  tooltipFormatter,
}: BuildOptionsParams): ECBasicOption {
  if (!yAxisLabels || !xAxisLabels || !rawData) {
    return {
      xAxis: { type: "category", data: [] },
      yAxis: { type: "category", data: [] },
      series: [],
    };
  }

  const seriesData: [number, number, number][] = [];
  const totalRows = yAxisLabels.length;
  const totalCols = xAxisLabels.length;

  for (let r = 0; r < totalRows; r++) {
    for (let c = 0; c < totalCols; c++) {
      const intensity = rawData[r]?.[c] ?? 0;
      // Invert rows so index 0 (e.g., T-12 or Monday) stays perfectly at the top of your visual canvas
      const invertedRowIndex = totalRows - 1 - r;
      seriesData.push([c, invertedRowIndex, intensity]);
    }
  }

  return {
    tooltip: {
      trigger: "item",
      formatter:
        formatHeatmapTooltip ||
        ((params: any) => {
          return `Value: ${(params.value[2] * 100).toFixed(0)}%`;
        }),
      backgroundColor: "rgba(33, 33, 33, 0.95)",
      borderColor: "#444",
      borderWidth: 1,
      textStyle: {
        color: "#E0E0E0",
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 11,
      },
    },

    xAxis: {
      type: "category",
      data: xAxisLabels,
      position: "top",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#9E9E9E",
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10,
        interval: xAxisTickInterval || 0,
        margin: 12,
      },
    },

    yAxis: {
      type: "category",
      data: [...yAxisLabels].reverse(),
      splitArea: { show: false },
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#9E9E9E",
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10,
        margin: 12,
      },
    },

    visualMap: {
      show: false,
      min: 0,
      max: 1,
      inRange: {
        color: [
          "#262626",
          "#424242",
          "#616161",
          "#9E9E9E",
          "#BDBDBD",
          "#FFFFFF",
        ],
      },
    },

    series: [
      {
        name: "Utilization Density",
        type: "heatmap",
        data: seriesData,
        label: { show: false },
        itemStyle: {
          borderColor: "#121212",
          borderWidth: 1,
        },
        emphasis: {
          itemStyle: {
            borderColor: "#FFFFFF",
            borderWidth: 1,
          },
        },
      },
    ],

    grid: {
      containLabel: true,
      left: 42,
      right: 10,
      top: 10,
      bottom: 20,
    },

    backgroundColor: "transparent",
  };
}
