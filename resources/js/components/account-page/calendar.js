import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";

function MyCalendar(props) {
  const {
    date,
    onDateChange,
    tileContent,
    newItem,
    setNewItem,
    showModal,
  } = props;

  const handleClickDay = e => {
    showModal();
    const clickedDate = new Date(e).toLocaleString('ja-JP');
    setNewItem(newItem => ({...newItem, date: clickedDate}))
  }

  return (
    <div>
      <Calendar
        locale="ja-JP"
        calendarType="US"
        className="color-primary"
        onChange={onDateChange(date)}
        onClickDay={handleClickDay}
        value={date}
        tileContent={tileContent}
      >
      </Calendar>
    </div>
  )
}

export default MyCalendar;
