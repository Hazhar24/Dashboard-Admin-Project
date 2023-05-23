import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

export default function Chart({ Title, Data, DataKey, Grid }) {
  return (
    <div className="chart">
      <h3 className="chart-title">{Title}</h3>
      <ResponsiveContainer width="100%" aspect={5}>
        <LineChart data={Data}>
          <XAxis dataKey="name" stroke="#5550bd" />
          <Line type="monotone" dataKey={DataKey} stroke="#5550bd" />
          <Tooltip />
          {Grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="10" />}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
