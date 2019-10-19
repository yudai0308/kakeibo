import React from "react";
import CategoryChart from "./Chart-category";
import { Modal } from "react-bootstrap";

function ChartModal(props) {
  const { items, showChart, setShowChart } = props;

  return (
    <>
      <Modal
        show={showChart}
        onHide={() => setShowChart(false)}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            支出集計（カテゴリー別）
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <CategoryChart items={items} />
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChartModal;
