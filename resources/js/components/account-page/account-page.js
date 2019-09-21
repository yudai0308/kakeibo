import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyCalendar from "./Calendar";
import Overview from "./Overview";
import InputItemModal from "./Input-item-modal"
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
    // Items を取得
  }
  useEffect(() => {
    fetchItems();
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
          <Overview />
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
