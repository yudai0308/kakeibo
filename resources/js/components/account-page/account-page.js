import React, { useState } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col } from "react-bootstrap";
import MyCalendar from "./calendar";

function AccountPage() {
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
        <Col md="8">
          <MyCalendar />
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
