import React from "react";
import { Col, Dropdown } from "react-bootstrap";
import MyModal from "./MyModal";
import { AccountContext } from "./AccountContext";

function AccountCard(props) {
  const { account } = props;
  const showDeleteDialog = (setShowModal) => {
    setShowModal(true);
  }
  const showUpdateModal = (setShowModal) => {
    setShowModal(true);
  }

  return (
    <AccountContext.Consumer>
      {
        ({ setShowModal }) => {
          return (
            <Col md="4" className="mb-4 mb-md-0">
              <div className="card">
                <div className="position-absolute m-1">
                  {account.isPublic ? "公開" : "非公開"}
                </div>
                <Dropdown
                  className="text-right"
                  style={{ right: "35px" }}
                >
                  <Dropdown.Toggle
                    variant="secondary"
                    style={{ backgroundColor: "rgb(0,0,0,0)" }}
                    className="position-absolute text-secondary border-0 rounded-circle"
                  >
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item onClick={() => showUpdateModal(setShowModal)}>設定</Dropdown.Item>
                    <Dropdown.Item onClick={() => setDelteDialog(setShowModal)}>削除</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                <div className="text-center">
                  <a className="text-dark text-decoration-none" href={props.account.url}>
                    <div className="card-body">
                      <img className="img-fluid" src="https://img.icons8.com/bubbles/100/000000/money-box.png" />
                      <h5 className="card-title">{account.title}</h5>
                    </div>
                  </a>
                </div>
              </div>
            </Col>
          );
        }
      }
    </AccountContext.Consumer>
  );
}

export default AccountCard;
