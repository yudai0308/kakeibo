import React from "react";
import ChartBase from "./chart-base";
import { aggregateExpensesBy } from "../../item-libs";

function CategoryChart({ items }) {
  const data = aggregateExpensesBy(items, "sub_category");
  return <ChartBase data={data} />
}

export default CategoryChart;
