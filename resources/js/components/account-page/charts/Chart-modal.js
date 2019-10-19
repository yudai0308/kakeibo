import React from "react";
import CategoryChart from "./chart-category";
import MemberChart from "./chart-member";
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
        onHide={() => setShowChart({...showChart, switch: false})}
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
