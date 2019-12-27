import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { axios } from "../../axios";
import { Container, Row, Col } from "react-bootstrap";
import AccountForm from "./account-forms/account-form-create-modal";
import AccountDeck from "./account-deck/account-deck";
import MyModal from "./mymodal";
import { AccountContext } from "./account-context";

function Mypage() {
  const [accounts, setAccounts] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState({title: "", body: ""});

  const fetchAccounts = async () => {
    let res = await axios.get("/api/user/accounts")
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
              setModalContent: setModalContent,
              fetchAccounts,
            }}
          >
            <AccountForm />
            <AccountDeck />
            <MyModal title={modalContent.title} body={modalContent.body}/>
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
