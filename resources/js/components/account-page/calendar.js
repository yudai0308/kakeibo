import React, { useEffect } from "react";
import ReactDOM from "react-dom";
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
    if (!document.getElementsByClassName("react-calendar__navigation__label")) return null;
    getItems();
  });

  const getItems = async () => {
    const { year, month } = getYearAndMonth();
    const id = newItem.id;
    const url = `/api/account/${id}/items?year=${year}&month=${month}`;
    // TODO: エラーハンドリング
    const res = await axios.get(url);
  }

  // 無理やりなやり方のため、年月の取得方法については要検討。
  const getYearAndMonth = () => {
    const elem = document.getElementsByClassName("react-calendar__navigation__label");
    let text = elem[0].innerText;
    text = text.replace("月", "");
    const [year, month] = text.split("年");
    return { year: year, month: month };
  }

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
