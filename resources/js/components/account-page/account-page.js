import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyCalendar from "./Calendar";
import Overview from "./Overview";
import InputItemModal from "./Input-item-modal"

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
          />
          <InputItemModal
            isShown={isShown}
            closeModal={() => setModalState(false)}
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
