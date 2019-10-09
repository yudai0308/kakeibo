import React from "react";
import { Dropdown } from "react-bootstrap";
import { AccountContext } from "./AccountContext";

function AccountDropdown() {
  const completedCopy = (setModalContent, setShowModal) => {
    setModalContent({
      title: "URL のコピー",
      body: <p>URL をコピーしました！</p>
    });
    setShowModal(true);
  }

  const showUpdateModal = (setModalContent, setShowModal) => {
    setModalContent({
      title: "家計簿の編集",
      body: <p>test</p>
    });
    setShowModal(true);
  }

  const showDeleteDialog = (setModalContent, setShowModal) => {
    setModalContent({
      title: "家計簿の削除",
      body: <p>test</p>
    });
    setShowModal(true);
  }

  return (
    <AccountContext.Consumer>
      {
        ({ setModalContent, setShowModal }) => {
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
                  onClick={() => completedCopy(setModalContent, setShowModal)}
                >
                  URL をコピー
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => showUpdateModal(setModalContent, setShowModal)}
                >
                  設定
                </Dropdown.Item>
                <Dropdown.Item
                  onClick={() => showDeleteDialog(setModalContent, setShowModal)}
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
