import React from "react";
import { Col, Badge } from "react-bootstrap";
import AccountDropdown from "./account-card-dropdown";

function AccountCard(props) {
  const { account } = props;

  return (
    <Col md="4" className="mb-4 mb-md-0">
      <div className="card">
        <div className="position-absolute ml-1">
          {
            account.isPublic
              ? <Badge pill variant="info">公開</Badge>
              : <Badge pill variant="secondary">非公開</Badge>
          }
        </div>
        <AccountDropdown account={account} />
        <div className="text-center">
          <a className="text-dark text-decoration-none" href={props.account.url}>
            <div className="card-body">
              <img className="img-fluid" src="https://img.icons8.com/bubbles/100/000000/money-box.png" />
              <h5 className="card-title">{account.title}</h5>
            </div>
          </a>
        </div>
      </div>
      <input
        id={"account-url-" + account.id}
        type="text"
        value={account.url}
        style={{ display: "none" }}
        readOnly
      />
    </Col>
  );
}

export default AccountCard;
