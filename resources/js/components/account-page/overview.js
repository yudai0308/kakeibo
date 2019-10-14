import React from "react";
import { separate } from "../libs";
import { Dropdown } from "react-bootstrap";

function Overview(props) {
  const { sumThisMonth, viewType, setViewType } = props;

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
        return "カテゴリー別";
      case 3:
        return "メンバー別";
      default:
        return;
    }
  }

  return (
    <div className="d-flex justify-content-between">
      <h4>収支： <span id="sum-this-month">{sumOrHyphen()}</span>円</h4>
      <Dropdown className="mb-2">
        <Dropdown.Toggle variant="info" id="dropdown-basic" size="sm">
          {currentViewName()}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Dropdown.Item onClick={() => setViewType(1)}>カレンダー</Dropdown.Item>
          <Dropdown.Item onClick={() => setViewType(2)}>カテゴリー別</Dropdown.Item>
          <Dropdown.Item onClick={() => setViewType(3)}>メンバー別</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  )
}

export default Overview;
