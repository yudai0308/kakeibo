import React, { useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import ReactDOM from 'react-dom';
import AccountForm from './Account-form';

function AccountFormModal() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <div className="mb-4">
        <Button variant="primary" onClick={handleShow}>
          <i className="text-right fas fa-plus-circle">
          </i> 新しい家計簿
                </Button>
      </div>

      <Modal show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>新しい家計簿を作る</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <AccountForm />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default AccountFormModal;
