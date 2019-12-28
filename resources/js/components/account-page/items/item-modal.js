import React from "react";
import { Modal } from "react-bootstrap";
import ItemForm from "./item-form";
import ItemIndex from "./item-index"

function ItemModal(props) {
  const {
    isShown, closeModal, showItemForm, setShowItemForm,
    items, newItem, setNewItem, resetNewItem, fetchItems, subCate,
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
              resetNewItem={resetNewItem}
              fetchItems={fetchItems}
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
              subCate={subCate}
            />
          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ItemModal;
