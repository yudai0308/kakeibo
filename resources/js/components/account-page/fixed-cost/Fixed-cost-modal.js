import React from "react";
import { Modal, Button } from "react-bootstrap";
import FixedCostForm from "./Fixed-cost-form";

function FixedCostModal(props) {
  const {
    showFixedCost,
    setShowFixedCost,
    yearMonth,
    newItem,
    items,
    fetchItems,
  } = props;

  return (
    <>
      <Modal
        show={showFixedCost}
        onHide={() => setShowFixedCost(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            固定費の入力
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <FixedCostForm
            items={items}
            newItem={newItem}
            yearMonth={yearMonth}
            fetchItems={fetchItems}
          />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FixedCostModal;
