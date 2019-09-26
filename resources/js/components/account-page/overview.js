import React from "react";

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

  const separate = num => {
    num = String(num);
    var len = num.length;
    if (len > 3) {
      return separate(num.substring(0, len - 3)) + "," + num.substring(len - 3);
    } else {
      return num;
    }
  }

  return (
    <>
      <h3>収支： {getSumThisMonth()}円</h3>
    </>
  )
}

export default Overview;
