import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import ReactDOM from 'react-dom';
import AccountForm from './Account-form';

function AccountFormModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                <i className="text-right fas fa-plus-circle">
                </i> 新しい家計簿
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>新しい家計簿を作る</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <AccountForm />
                </Modal.Body>
            </Modal>
        </div>
    );
}

// render(<Example />);

if (document.getElementById('account-form')) {
    ReactDOM.render(
        <AccountFormModal />,
        document.getElementById('account-form')
    );
}
