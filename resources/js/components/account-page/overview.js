import React from "react";
import { separate } from "../libs";
import { Dropdown } from "react-bootstrap";

function Overview(props) {
  const {
    sumThisMonth, viewType,
    setViewType, yearMonth,
  } = props;

  const sumOrHyphen = () => {
    return sumThisMonth !== null
      ? separate(sumThisMonth)
      : "- ";
  }

  const currentViewName = () => {
    switch (viewType) {
      case 1:
        return "カレンダー"
      case 2:
        return "固定費入力";
      case 3:
        return "カテゴリー別";
      case 4:
        return "メンバー別";
      default:
        return;
    }
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
        <Dropdown className="mb-2">
          <Dropdown.Toggle variant="info" id="dropdown-basic" size="sm">
            {currentViewName()}
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item onClick={() => setViewType(1)}>カレンダー</Dropdown.Item>
            <Dropdown.Item onClick={() => setViewType(2)}>固定費入力</Dropdown.Item>
            <Dropdown.Item onClick={() => setViewType(3)}>カテゴリー別</Dropdown.Item>
            <Dropdown.Item onClick={() => setViewType(4)}>メンバー別</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </>
  )
}

export default Overview;
