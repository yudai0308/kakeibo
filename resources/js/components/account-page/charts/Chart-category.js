import React from 'react';
import {
  PieChart, Pie, Cell, Label, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';
import { aggregateDataBy, displayExpensesTotal } from "../../item-libs";

function CategoryChart({ items }) {
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#9b59b6"];
  const data = aggregateDataBy(items, "sub_category");

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
          <Label value={displayExpensesTotal(items)} position="center" fill="#6c757d" />
        </Pie>
        <Legend />
        <Tooltip offset={20} />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CategoryChart;
