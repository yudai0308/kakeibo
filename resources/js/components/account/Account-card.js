import React from 'react';
import {Col} from 'react-bootstrap';

function AccountCard(props) {
    return (
        <Col md="4">
            <div className="card text-center">
                <a className="text-dark text-decoration-none" href="#">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        <img className="img-fluid" src="https://img.icons8.com/bubbles/100/000000/money.png" />
                    </div>
                </a>
            </div>
        </Col>
    );
}

export default AccountCard;
