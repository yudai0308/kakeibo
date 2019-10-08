import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { axios } from "../../axios";
import { Container, Row, Col } from "react-bootstrap";
import AccountForm from "./Account-form-modal";
import AccountDeck from "./Account-deck";
import { AccountContext } from "./AccountContext";

function Mypage() {
  const [accounts, setAccounts] = useState(null);
  const [showModal, setShowModal] = useState(false);

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
          <AccountContext.Provider
            value={{
              accounts: accounts,
              changeHandler: fetchAccounts,
              showModal: showModal,
              setShowModal: setShowModal,
            }}
          >
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
