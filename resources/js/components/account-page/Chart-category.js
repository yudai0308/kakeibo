import React from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

function CategoryChart() {
  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data = [
    { name: 'Group A', value: 400 }, { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 }, { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 }, { name: 'Group F', value: 189 },
  ];

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {
            data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            })
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CategoryChart;
