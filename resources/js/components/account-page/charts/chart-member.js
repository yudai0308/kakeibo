import React from "react";
import ChartBase from "./chart-base";
import { aggregateExpensesBy } from "../../item-libs";

function CategoryChart({ items }) {
  const data = aggregateExpensesBy(items, "user_name");
  return <ChartBase data={data} />
}

export default CategoryChart;
