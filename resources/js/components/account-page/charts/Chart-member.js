import React from "react";
import ChartBase from "./Chart-base";
import { aggregateDataBy } from "../../item-libs";

function CategoryChart({ items }) {
  // const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#9b59b6"];
  // let data;
  // console.log(showChart.type)
  // switch (showChart.type) {
  //   case 1:
  //     data = aggregateDataBy(items, "sub_category");
  //     break;
  //   case 2:
  //     data = aggregateDataBy(items, "user_name");
  //     break;
  //   default:
  //     break;
  // }
  // const data = aggregateDataBy(items, "sub_category");
  const data = aggregateDataBy(items, "user_name");

  return <ChartBase data={data} />
  //   <ResponsiveContainer width="100%" height={400}>
  //     <PieChart>
  //       <Pie
  //         dataKey="value"
  //         data={data}
  //         innerRadius={70}
  //         outerRadius={100}
  //         paddingAngle={1}
  //         fill="#8884d8"
  //         label
  //       >
  //         {
  //           data.map((entry, index) => {
  //             return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
  //           })
  //         }
  //         <Label value={displayExpensesTotal(items)} position="center" fill="#6c757d" />
  //       </Pie>
  //       <Legend />
  //       <Tooltip offset={20} />
  //     </PieChart>
  //   </ResponsiveContainer>
  // );
}

export default CategoryChart;
