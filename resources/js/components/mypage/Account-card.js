import React from "react";
import { Col, Dropdown } from "react-bootstrap";
import AccountDropdown from "./Account-card-dropdown";
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
        ({ setModalContent, setShowModal }) => {
          return (
            <Col md="4" className="mb-4 mb-md-0">
              <div className="card">
                <div className="position-absolute m-1">
                  {account.isPublic ? "公開" : "非公開"}
                </div>
                <AccountDropdown />
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
