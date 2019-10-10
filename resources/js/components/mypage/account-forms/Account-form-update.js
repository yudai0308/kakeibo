import React from "react";
import { Form } from "react-bootstrap";

function AccountUpdataForm(setModalContent, setShowModal) {
  const showUpdateModal = (setModalContent, setShowModal) => {
    setModalContent({
      title: "家計簿の編集",
      body: <p>test</p>
    });
    setShowModal(true);
  }
  showUpdateModal(setModalContent, setShowModal);
}

export default AccountUpdataForm;
