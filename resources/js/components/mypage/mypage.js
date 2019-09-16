import React, { useState, useEffect, createContext } from 'react';
import ReactDOM from 'react-dom';
import { axios } from "../../axios";
import { Container, Row, Col } from 'react-bootstrap';
import AccountForm from './Account-form-modal';
import AccountDeck from './Account-deck';

export const AccountContext = createContext();

function Mypage() {
  const [accounts, setAccounts] = useState(null);
  const fetchAccounts = async () => {
    let res = await axios.get(`/api/user/accounts`)
    const accounts = res.data;
    setAccounts(accounts);
  }

  useEffect(() => {
    fetchAccounts();
  }, [setAccounts]);

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <div className="mb-4 border-bottom">
            <p className="font-weight-bold">あなたが作成した家計簿</p>
          </div>
          <AccountContext.Provider value={accounts}>
            <AccountForm />
            <AccountDeck />
          </AccountContext.Provider>
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
