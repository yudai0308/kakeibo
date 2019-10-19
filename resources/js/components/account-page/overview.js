import React from "react";
import { separate } from "../libs";
import MenuIcons from "./menu-icons";

function Overview(props) {
  const {
    sumThisMonth, yearMonth,
    setShowFixedCost, setShowChart,
  } = props;

  const sumOrHyphen = () => {
    return sumThisMonth !== null
      ? separate(sumThisMonth)
      : "- ";
  }

  const currentYearMonth = () => {
    const y = yearMonth.year;
    const m = yearMonth.month;
    return `${y}年${m}月`;
  }

  return (
    <>
      <h6>{currentYearMonth()}</h6>
      <div className="d-flex justify-content-between">
        <h4>収支： <span id="sum-this-month">{sumOrHyphen()}</span>円</h4>
        <MenuIcons
          setShowFixedCost={setShowFixedCost}
          setShowChart={setShowChart}
        >
        </MenuIcons>
      </div>
    </>
  )
}

export default Overview;
