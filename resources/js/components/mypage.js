import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import {Container, Row, Col} from 'react-bootstrap';
import AccountForm from './account/Account-form-modal';
import AccountDeck from './account/Account-deck';

function Mypage () {
  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <div className="mb-4 border-bottom">
            <p className="font-weight-bold">あなたとシェアされている家計簿</p>
          </div>
          <AccountForm/>
          <AccountDeck/>
        </Col>
      </Row>
    </Container>
  );
}

if (document.getElementById("mypage")) {
  ReactDOM.render(
      <Mypage />,
      document.getElementById("mypage")
  );
}
