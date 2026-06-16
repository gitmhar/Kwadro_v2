import { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import { Box } from "@mui/material";
import { transformHeatmapData } from "../../../../utils/charts/heatmap/transformHeatmapData";
import { buildHeatmapOption } from "../../../../utils/charts/heatmap/buildHeatmapOption";

interface HeatmapChartProps {
  data: number[][];
}

export default function HeatmapChart({ data }: HeatmapChartProps) {
  const seriesData = useMemo(() => transformHeatmapData(data), [data]);

  const option = useMemo(() => buildHeatmapOption(seriesData), [seriesData]);

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
