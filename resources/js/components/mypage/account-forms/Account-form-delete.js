import React from "react";
import { Form } from "react-bootstrap";

function AccountDeleteForm(setModalContent, setShowModal) {
  const showDeleteModal = (setModalContent, setShowModal) => {
    setModalContent({
      title: "家計簿の削除",
      body: <p>test</p>
    });
    setShowModal(true);
  }
  showDeleteModal(setModalContent, setShowModal);
}

export default AccountDeleteForm;
