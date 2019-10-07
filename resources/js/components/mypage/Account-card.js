import React from "react";
import { Col, Dropdown, ModalDialog } from "react-bootstrap";

function AccountCard(props) {
  return (
    <Col md="4" className="mb-4 mb-md-0">
      <div className="card">
        <div className="text-right">
          <Dropdown>
            <Dropdown.Toggle
              variant="secondary"
              style={{ right: "0", backgroundColor: "rgb(0,0,0,0)" }}
              className="position-absolute text-secondary border-0 rounded-circle">
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item onClick={()=>alert("設定")}>設定</Dropdown.Item>
              <Dropdown.Item onClick={()=>dialog("削除")}>削除</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
        <div className="text-center">
          {/* <a
            onClick={test}
            className="edit-account text-secondary position-absolute"
            style={{ top: 2, right: 2, width: 24, height: 24, cursor: "pointer" }}
          >
            <i className="fas fa-ellipsis-v position-absolute" style={{ top: 4, right: 9 }}></i>
          </a> */}
          <a className="text-dark text-decoration-none" href={props.account.url}>
            <div className="card-body">
              <img className="img-fluid" src="https://img.icons8.com/bubbles/100/000000/money-box.png" />
              <h5 className="card-title">{props.account.title}</h5>
            </div>
          </a>
        </div>
      </div>
    </Col>
  );
}

export default AccountCard;
