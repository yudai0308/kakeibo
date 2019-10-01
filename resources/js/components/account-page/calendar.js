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

  (function () {
    const prevButton = document.getElementsByClassName("react-calendar__navigation__prev-button")
    const prev2Button = document.getElementsByClassName("react-calendar__navigation__prev2-button")
    const nextButton = document.getElementsByClassName("react-calendar__navigation__next-button")
    const next2Button = document.getElementsByClassName("react-calendar__navigation__next2-button")
    let y = yearMonth.year;
    let m = yearMonth.month;
    if (prevButton[0]) {
      prevButton[0].onclick = () => {
        const ym = addOrSubMonth(y, m, -1);
        setYearMonth(ym);
      }
    }
    if (prev2Button[0]) {
      prev2Button[0].onclick = () => {
        const ym = addOrSubMonth(y, m, -12);
        setYearMonth(ym);
      }
    }
    if (nextButton[0]) {
      nextButton[0].onclick = () => {
        const ym = addOrSubMonth(y, m, 1);
        setYearMonth(ym);
      }
    }
    if (next2Button[0]) {
      next2Button[0].onclick = () => {
        const ym = addOrSubMonth(y, m, 12);
        setYearMonth(ym);
      }
    }
  })();

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
