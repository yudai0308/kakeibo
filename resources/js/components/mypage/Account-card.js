import React from 'react';
import { Col } from 'react-bootstrap';

function AccountCard(props) {
  const test = () => {
    window.alert("編集、削除、URL表示機能を追加予定")
  }
  return (
    <Col md="4">
      <div className="card text-center mb-4 mb-md-0">
        <a href="#" onClick={test} className="edit-account text-secondary position-absolute" style={{ top: 2, right: 2, width: 24, height: 24 }}>
          <i className="fas fa-ellipsis-v position-absolute" style={{ top: 4, right: 9 }}></i>
        </a>
        <a className="text-dark text-decoration-none" href="#">
          <div className="card-body">
            <h5 className="card-title">{props.account.title}</h5>
            <img className="img-fluid" src="https://img.icons8.com/bubbles/100/000000/money.png" />
          </div>
        </a>
      </div>
    </Col>
  );
}

export default AccountCard;
