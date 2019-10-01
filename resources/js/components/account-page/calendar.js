import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { axios } from "../../axios";
import moment from "moment";
import { separate } from "../libs";

function MyCalendar(props) {
  const {
    items,
    setNewItem,
    showModal,
    yearMonth,
    setYearMonth,
    setShowItemForm,
  } = props;

  const handleClickDay = e => {
    setShowItemForm(false);
    showModal();
    const clickedDate = new Date(e).toLocaleString("ja-JP");
    setNewItem(newItem => ({ ...newItem, date: clickedDate }));
  }

  const setTileContent = ({ date, view }) => {
    if (items === null || view !== "month") return;
    const curDate = moment(date).format("YYYY-MM-DD");
    const dates = Object.keys(items);
    if (!dates.includes(curDate)) return;
    let sum = 0;
    for (let i = 0; i < items[curDate].length; ++i) {
      const itemGrp = items[curDate];
      if (itemGrp[i].isIncome) {
        sum += itemGrp[i].amount;
      } else {
        sum -= itemGrp[i].amount
      }
    }
    let style = { fontSize: "1.2vw" }
    style.color = sum >= 0 ? "#212529" : "#b33e5c";
    return <p className="mt-2" style={style}>{separate(Math.abs(sum))}</p>;
  }

  const addOrSubMonth = (year, month, step) => {
    const date = moment(`${year}-${month}-01`);
    let yearMonth = { year: year, month: month, }
    if (step === 0) return yearMonth;
    if (step > 0) {
      const added = date.add(step, "M");
      yearMonth.year = added.year();
      yearMonth.month = added.month() + 1
    } else {
      const subed = date.subtract(Math.abs(step), "M");
      yearMonth.year = subed.year();
      yearMonth.month = subed.month() + 1;
    }
    return yearMonth;
  }

  const setYearMonthByClick = () => {
    const prev = document.getElementsByClassName("react-calendar__navigation__prev-button")
    const prev2 = document.getElementsByClassName("react-calendar__navigation__prev2-button")
    const next = document.getElementsByClassName("react-calendar__navigation__next-button")
    const next2 = document.getElementsByClassName("react-calendar__navigation__next2-button")
    const buttons = [
      { elem: prev[0], step: -1 },
      { elem: prev2[0], step: -12 },
      { elem: next[0], step: 1 },
      { elem: next2[0], step: 12 },
    ];
    let y = yearMonth.year;
    let m = yearMonth.month;
    for (const button of buttons) {
      if (!button.elem) continue;
      button.elem.onclick = () => {
        const ym = addOrSubMonth(y, m, button.step);
        setYearMonth(ym);
      }
    }
  }
  setYearMonthByClick();

  return (
    <Calendar
      locale="ja-JP"
      calendarType="US"
      className="color-primary"
      onClickDay={handleClickDay}
      tileContent={setTileContent}
      showNeighboringMonth={false}
      minDetail="decade"
    >
    </Calendar>
  )
}

export default MyCalendar;
