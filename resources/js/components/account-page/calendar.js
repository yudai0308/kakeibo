import React, { useState } from "react";
import ReactDOM from "react-dom";
import Calendar from "react-calendar";

function MyCalendar() {
  const [date, setDate] = useState(new Date());
  const onChange = date => setDate(date);
  const onClickDay = () => {
    window.alert("test")
  }
  const tileClass = "custom-tile";
  const tileContent = "";

  return (
    <div>
      <Calendar
        locale="ja-JP"
        calendarType="US"
        className="color-primary"
        onChange={onChange}
        onClickDay={onClickDay}
        value={date}
        tileClassName={tileClass}
        tileContent={tileContent}
      >
      </Calendar>
    </div>
  )
}

export default MyCalendar;
