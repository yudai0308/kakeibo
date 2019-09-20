import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";

function MyCalendar(props) {
  const {
    date,
    onDateChange,
    onClickDay,
    tileContent
  } = props;

  return (
    <div>
      <Calendar
        locale="ja-JP"
        calendarType="US"
        className="color-primary"
        onChange={onDateChange(date)}
        onClickDay={onClickDay}
        value={date}
        tileContent={tileContent}
      >
      </Calendar>
    </div>
  )
}

export default MyCalendar;
