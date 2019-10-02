import React from "react";
import { separate } from "../libs";

function Overview(props) {
  const { items } = props;
  const getSumThisMonth = () => {
    if (items === null) return "-";
    let sum = 0;
    for (const date in items) {
      for (const index in items[date]) {
        const item = items[date][index];
        if (item.isIncome) {
          sum += item.amount;
        } else {
          sum -= item.amount;
        }
      }
    }
    return separate(sum);
  }

  return (
    <>
      <h3>収支： <span id="sum-this-month">{getSumThisMonth()}</span>円</h3>
    </>
  )
}

export default Overview;
