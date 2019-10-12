import React from "react";
import { Modal } from "react-bootstrap";
import { AccountContext } from "./AccountContext";

function MyModal(props) {
  const { title, body } = props;

  return (
    <AccountContext.Consumer>
      {
        ({ showModal, setShowModal }) => {
          return (
            <Modal
              show={showModal}
              onHide={() => setShowModal(false)}
              centered
            >
              <Modal.Header closeButton>
                <Modal.Title className="text-muted">{title}</Modal.Title>
              </Modal.Header>
              <Modal.Body className="text-muted">
                {/* <AccountForm /> */}
                {body}
              </Modal.Body>
            </Modal>
          );
        }
      }
    </AccountContext.Consumer>
  );
}

export default MyModal;
