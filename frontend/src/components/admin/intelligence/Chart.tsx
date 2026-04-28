import {
  Area,
  Bar,
  ComposedChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  { name: "MON", actual: 12, projected: 10 },
  { name: "TUE", actual: 18, projected: 15 },
  { name: "WED", actual: 10, projected: 12 },
  { name: "THU", actual: 22, projected: 20 },
  { name: "FRI", actual: 28, projected: 25 },
  { name: "SAT", actual: 20, projected: 22 },
  { name: "SUN", actual: 32, projected: 30 },
];

export default function Chart() {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <ComposedChart data={data}>
        <XAxis
          dataKey="name"
          axisLine={false}
          tickLine={false}
          stroke="#a3a3a3"
          tick={{ fontSize: 12 }}
        />
        <YAxis hide />
        <Tooltip cursor={{ fill: "transparent" }} />

        <Area
          type="monotone"
          dataKey="projected"
          fill="#f0f0f0"
          stroke="#ccc"
        />
        <Bar
          dataKey="actual"
          barSize={20}
          fill="#000000"
          radius={[4, 4, 0, 0]}
        />
      </ComposedChart>
    </ResponsiveContainer>
  );
}
