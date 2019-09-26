import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { axios } from "../../axios";
import moment from "moment";
import {separate} from "../libs";

function MyCalendar(props) {
  const {
    date,
    onDateChange,
    tileContent,
    items,
    newItem,
    setNewItem,
    showModal,
  } = props;

  const handleClickDay = e => {
    showModal();
    const clickedDate = new Date(e).toLocaleString("ja-JP");
    setNewItem(newItem => ({ ...newItem, date: clickedDate }))
  }

  useEffect(() => {
    //
  });

  const test = ({ date, view }) => {
    if (items === null) return;
    const curDate = moment(date).format("YYYY-MM-DD");
    const dates = Object.keys(items);
    if (! dates.includes(curDate)) return;
    let sum = 0;
    for (let i = 0; i < items[curDate].length; ++i) {
      const itemGrp = items[curDate];
      if (itemGrp[i].isIncome) {
        sum += itemGrp[i].amount;
      } else {
        sum -= itemGrp[i].amount
      }
    }
    return <p>{sum}</p>;
  }
  // const formatDate = date => {
  //   const year = date.getFullYear();
  //   const month = ("0" + (date.getMonth() + 1)).slice(-2);
  //   const day = ("0" + date.getDate()).slice(-2);
  //   return `${year}-${month}-${day}`;
  // }

  return (
    <Calendar
      locale="ja-JP"
      calendarType="US"
      className="color-primary"
      onChange={onDateChange(date)}
      onClickDay={handleClickDay}
      value={date}
      tileContent={test}
    >
    </Calendar>
  )
}

export default MyCalendar;
