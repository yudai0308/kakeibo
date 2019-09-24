import React, { useEffect } from "react";
import Calendar from "react-calendar";
import { axios } from '../../axios';

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
    const formated = formatDate(clickedDate);
    setNewItem(newItem => ({ ...newItem, date: formated }))
  }

  useEffect(() => {
    //
  });


  const test = async ({ date, view }) => {
    // 今月の item を取得する
    const month = date.getMonth() + 1;
    const id = newItem.id;
    // 同じ日の item は収支を計算して表示するコンポーネントを作る

    // if (view === 'month' && date.getMonth() === 8) {
    //   return <p>OK!</p>
    // }
  }

  return (
    <Calendar
      locale="ja-JP"
      calendarType="US"
      className="color-primary"
      onChange={onDateChange(date)}
      onClickDay={handleClickDay}
      value={date}
      tileContent=""
    >
    </Calendar>
  )
}

export default MyCalendar;
