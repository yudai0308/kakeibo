import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { axios } from "../../axios";
import moment from "moment";
import { separate } from "../libs";

function MyCalendar(props) {
  const {
    items,
    setItems,
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

  const setClassToSaturday = ({ date, view }) => {
    const sat = "react-calendar__month-view__days__day--weekend--sat";
    return view === 'month' && date.getDay() === 6 ? sat : null;
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
    return <p className="mt-2" style={style}>¥{separate(Math.abs(sum))}</p>;
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

  // FIXME: DOMを操作するのではなく、item の中身を空にする
  const clearTotalAmount = () => {
    setItems(null);
  }

  const setTotalAmount = date => {
    const y = date.getFullYear();
    const m = date.getMonth() + 1;
    setYearMonth({ year: y, month: m });
  }

  // const handleDrillDown = (activeStartDate, view) => {
  //   if (view !== "month") return;
  //   const y = activeStartDate.getFullYear();
  //   const m = activeStartDate.getMonth() + 1;
  //   setYearMonth({ year: y, month: m });
  // }

  // month ビューページで月を前後に移動するボタンを押したときの処理
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
      className="color-primary mb-4"
      onClickDay={handleClickDay}
      onClickMonth={setTotalAmount}
      onDrillUp={clearTotalAmount}
      // onDrillDown={handleDrillDown}
      tileContent={setTileContent}
      tileClassName={setClassToSaturday}
      showNeighboringMonth={false}
      minDetail="decade"
    >
    </Calendar>
  )
}

export default MyCalendar;
