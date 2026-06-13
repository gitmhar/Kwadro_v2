import { DAYS, HOURS } from "./constants";
import { formatHeatmapTooltip } from "./formatHeatmapTooltip";

export function buildHeatmapOption(seriesData: [number, number, number][]) {
  return {
    tooltip: {
      trigger: "item",
      formatter: formatHeatmapTooltip,
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
      data: HOURS,
      position: "top",
      axisLine: { show: false },
      axisTick: { show: false },
      axisLabel: {
        color: "#9E9E9E",
        fontFamily: '"JetBrains Mono", monospace',
        fontSize: 10,
        interval: 0,
        margin: 12,
      },
    },

    yAxis: {
      type: "category",
      data: DAYS,
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
        color: ["#262626", "#424242", "#616161", "#9E9E9E", "#BDBDBD", "#FFFFFF"],
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
      left: 10,
      right: 10,
      top: 10,
      bottom: 20,
    },

    backgroundColor: "transparent",
  };
}