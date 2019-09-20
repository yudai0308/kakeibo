import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import MyCalendar from "./Calendar";
import Overview from "./Overview";

function AccountPage() {
  const [date, setDate] = useState(new Date());
  const onDateChange = date => setDate(date);
  const onClickDay = () => {
    window.alert("test")
  }
  const tileContent = (
    <>
      <br />
      <span></span>
    </>
  )

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
            onClickDay={onClickDay}
            tileContent={tileContent}
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
