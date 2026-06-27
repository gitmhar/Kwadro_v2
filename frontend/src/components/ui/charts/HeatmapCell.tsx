import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { Box } from "@mui/material";
import { transformHeatmapData } from "../../../utils/charts/heatmap/transformHeatmapData";
import { buildHeatmapOption } from "../../../utils/charts/heatmap/buildHeatmapOption";

interface HeatmapChartProps {
  data: number[][];
  xAxisLabels: string[];
  yAxisLabels: string[];
  xAxisTickInterval?: (index: number, value: string) => boolean;
  tooltipFormatter?: (params: any) => string;
}

export default function HeatmapChart({
  data,
  xAxisLabels,
  yAxisLabels,
  xAxisTickInterval,
  tooltipFormatter,
}: HeatmapChartProps) {
  const seriesData = useMemo(() => transformHeatmapData(data), [data]);

  const option = useMemo(() => {
    return buildHeatmapOption({
      rawData: data,
      xAxisLabels,
      yAxisLabels,
      xAxisTickInterval,
      tooltipFormatter,
    });
  }, [data, xAxisLabels, yAxisLabels, xAxisTickInterval, tooltipFormatter]);

  const EChartsComponent: any = ReactECharts;

  return (
    <Box sx={{ width: "100%", height: { xs: 260, sm: 280, md: 300 } }}>
      <EChartsComponent
        option={option}
        style={{ height: "100%", width: "100%" }}
        opts={{ renderer: "canvas" }}
        theme="dark"
      />
    </Box>
  );
}
