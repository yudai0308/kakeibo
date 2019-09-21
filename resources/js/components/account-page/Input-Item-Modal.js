import React from 'react';
import { Modal } from 'react-bootstrap';
import ItemForm from './Item-form';

function InputItemModal(props) {
  const {
    isShown, closeModal,
    newItem, setNewItem,
  } = props;

  return (
    <>
      <Modal show={isShown} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>収支の入力</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <ItemForm
            newItem={newItem}
            setNewItem={setNewItem}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default InputItemModal;
