import React, { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import { AccountContext } from "./AccountContext";
import AccountForm from "./Account-form";
import MyModal from "./MyModal";

function AccountFormModal() {
  return (
    <AccountContext.Consumer>
      {
        ({ setShowModal }) => {
          return (
            <div className="mb-4">
              <Button
                variant="primary"
                onClick={() => setShowModal(true)}
              >
                <i className="text-right fas fa-plus-circle"></i> 新しい家計簿
              </Button>
              <MyModal
                title="新しい家計簿を作る"
                body={<AccountForm />}
              />
            </div>
          )
        }
      }
    </AccountContext.Consumer>
  );
}

export default AccountFormModal;
