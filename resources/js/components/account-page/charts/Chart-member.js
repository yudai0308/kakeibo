import React from "react";
import ChartBase from "./chart-base";
import { aggregateDataBy } from "../../item-libs";

function CategoryChart({ items }) {
  const data = aggregateDataBy(items, "user_name");
  return <ChartBase data={data} />
}

export default CategoryChart;
