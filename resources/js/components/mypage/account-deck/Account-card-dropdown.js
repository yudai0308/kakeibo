import React from "react";
import { Form, Dropdown } from "react-bootstrap";
import { AccountContext } from "../AccountContext";
import UpdateForm from "../account-forms/Account-form-update";
// import showDeleteModal from "../account-forms/Account-form-delete";

function AccountDropdown({ account }) {
  const copyUrl = (setModalContent, setShowModal) => {
    const body = (
      <>
        <p>URL をコピーしました！</p>
        <Form.Control type="text" value={account.url} disabled />
      </>
    )
    setModalContent({
      title: "URL コピー",
      body: body,
    });
    const elem = document.getElementById("account-url-" + account.id);
    elem.select();
    document.execCommand("Copy");
    setShowModal(true);
  }

  const showUpdateModal = (
    account, setModalContent, setShowModal, fetchAccounts
  ) => {
    const body = (
      <UpdateForm
        account={account}
        setShowModal={setShowModal}
        fetchAccounts={fetchAccounts}
      />
    )
    setModalContent({
      title: "家計簿の編集",
      body: body,
    });
    setShowModal(true);
  }

  // const showDeleteDialog = (setModalContent, setShowModal) => {
  //   setModalContent({
  //     title: "家計簿の削除",
  //     body: <p>test</p>
  //   });
  //   setShowModal(true);
  // }

  return (
    <AccountContext.Consumer>
      {
        ({ setModalContent, setShowModal, fetchAccounts }) => {
          return (
            <Dropdown
              className="text-right"
              style={{ right: "35px" }}
            >
              <Dropdown.Toggle
                variant="secondary"
                style={{ backgroundColor: "rgb(0,0,0,0)" }}
                className="position-absolute text-secondary border-0 rounded-circle"
              >
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item
                  onClick={() => copyUrl(setModalContent, setShowModal)}
                >
                  URL をコピー
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => {
                    showUpdateModal(account, setModalContent, setShowModal, fetchAccounts)
                  }}
                >
                  設定
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => showDeleteModal(account, setModalContent, setShowModal)}
                >
                  削除
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          );
        }
      }
    </AccountContext.Consumer>
  );
}

export default AccountDropdown;
