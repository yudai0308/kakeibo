import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AccountContext } from "../account-context";
import AccountForm from "./account-form-create-body";

function AccountFormModal() {
  const showCreateModal = (setModalContent, setShowModal) => {
    setModalContent({
      title: "新しい家計簿を作る",
      body: <AccountForm />,
    });
    setShowModal(true);
  }

  return (
    <AccountContext.Consumer>
      {
        ({ setModalContent, setShowModal }) => {
          return (
            <div className="mb-4">
              <Button
                size="sm"
                variant="primary"
                className="rounded-pill"
                onClick={() => showCreateModal(setModalContent, setShowModal)}
              >
                <i className="text-right fas fa-plus-circle"></i> 新しい家計簿
              </Button>
            </div>
          )
        }
      }
    </AccountContext.Consumer>
  );
}

export default AccountFormModal;
