import React from "react";
import CategoryChart from "./Chart-category";
import MemberChart from "./Chart-member";
import { Modal } from "react-bootstrap";

function ChartModal(props) {
  const { items, showChart, setShowChart } = props;
  let title = "";
  switch (showChart.type) {
    case 1:
      title = "支出集計（カテゴリー別）";
      break;
    case 2:
      title = "支出集計（メンバー別）";
      break;
    default:
      break;
  }

  return (
    <>
      <Modal
        show={showChart.switch}
        onHide={() => setShowChart({ switch: false, type: 1 })}
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title>
            {title}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          {
            showChart.type === 1 &&
            <CategoryChart items={items} />

          }
          {
            showChart.type === 2 &&
            <MemberChart items={items} />

          }
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ChartModal;
