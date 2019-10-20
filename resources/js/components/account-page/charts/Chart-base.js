import React from "react";
import { Alert } from "react-bootstrap"
import {
  PieChart, Pie, Cell, Label, Legend, Tooltip, ResponsiveContainer,
} from "recharts";
import { separate } from "../../libs";

function ChartBase({ data }) {
  console.log(data)
  if (!data.length) {
    return (
      <Alert variant="info" className="text-center">
        支出の集計を見ることができます。
      </Alert>
    );
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#9b59b6"];
  const vals = data.map(d => d.value);
  const sum = vals.reduce((sum, val) => sum + val);
  const dispSum = `¥ ${separate(sum)}`;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          innerRadius={70}
          outerRadius={100}
          paddingAngle={1}
          fill="#8884d8"
          label
        >
          {
            data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            })
          }
          <Label value={dispSum} position="center" fill="#6c757d" />
        </Pie>
        <Legend />
        <Tooltip offset={20} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default ChartBase;
