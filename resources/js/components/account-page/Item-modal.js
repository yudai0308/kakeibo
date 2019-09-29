import React from "react";
import { Modal } from "react-bootstrap";
import ItemForm from "./Item-form";
import ItemIndex from "./Item-index"

function ItemModal(props) {
  const {
    isShown, closeModal, showItemForm, setShowItemForm,
    items, newItem, setNewItem, fetchItems,
  } = props;

  return (
    <>
      <Modal show={isShown} onHide={closeModal} centered>
        <Modal.Header closeButton>
          <Modal.Title>項目一覧</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            !showItemForm &&
            <ItemIndex
              items={items}
              newItem={newItem}
              setShowItemForm={setShowItemForm}
            />
          }
          {
            showItemForm &&
            <ItemForm
              newItem={newItem}
              setNewItem={setNewItem}
              closeModal={closeModal}
              fetchItems={fetchItems}
              setShowItemForm={setShowItemForm}
            />
          }
          {/* <ItemIndex
            items={items}
            newItem={newItem}
            setModalTitle={setModalTitle}
          />
          <ItemForm
            newItem={newItem}
            setNewItem={setNewItem}
            closeModal={closeModal}
            fetchItems={fetchItems}
          /> */}
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemModal;
