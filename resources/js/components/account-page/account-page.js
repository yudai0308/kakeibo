import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyCalendar from "./Calendar";
import Overview from "./Overview";
import InputItemModal from "./Input-item-modal"
import { axios } from '../../axios';
import { networkInterfaces } from "os";

function AccountPage() {
  const [date, setDate] = useState(new Date());
  const onDateChange = date => setDate(date);
  const tileContent = (
    <>
      <br />
      <span></span>
    </>
  )

  const [isShown, setModalState] = useState(false);

  const [items, setItems] = useState(null);
  const fetchItems = async () => {
    if (!document.getElementsByClassName("react-calendar__navigation__label")) return null;
    const { year, month } = getYearAndMonth();
    const id = newItem.id;
    const url = `/api/account/${id}/items?year=${year}&month=${month}`;
    // TODO: エラーハンドリング
    const res = await axios.get(url);
    return res.data;
  }

  // 無理やりなやり方のため、年月の取得方法については要検討。
  const getYearAndMonth = () => {
    const elem = document.getElementsByClassName("react-calendar__navigation__label");
    let text = elem[0].innerText;
    text = text.replace("月", "");
    const [year, month] = text.split("年");
    return { year: year, month: month };
  }

  useEffect(() => {
    const setItemsState =　async () => setItems(await fetchItems());
    setItemsState();
  }, [])

  const getAccountId = () => {
    const div = document.getElementById("account-page");
    const id = div.getAttribute("data-account-id");
    return Number(id);
  }

  const [newItem, setNewItem] = useState({
    id: getAccountId(),
    name: "",
    ammount: 0,
    date: null,
    isIncome: 0,
  });

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <div className="mb-4 border-bottom">
            <p className="font-weight-bold">家計簿タイトル</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8" className="mb-4">
          <Overview items={items} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <MyCalendar
            date={date}
            onDateChange={onDateChange}
            tileContent={tileContent}
            showModal={() => setModalState(true)}
            newItem={newItem}
            setNewItem={setNewItem}
            items={items}
          />
          <InputItemModal
            isShown={isShown}
            closeModal={() => setModalState(false)}
            newItem={newItem}
            setNewItem={setNewItem}
          />
        </Col>
      </Row>
    </Container>
  )
}

if (document.getElementById("account-page")) {
  ReactDOM.render(
    <AccountPage />,
    document.getElementById("account-page")
  );
}
