import React from "react";
import { separate } from "../libs";

function Overview(props) {
  const { sumThisMonth } = props;
  const sumOrHyphen = () => {
    return sumThisMonth
      ? separate(sumThisMonth)
      : "- ";
  }

  return (
    <>
      <h3>収支： <span id="sum-this-month">{sumOrHyphen()}</span>円</h3>
    </>
  )
}

export default Overview;
