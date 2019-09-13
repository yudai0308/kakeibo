import React, {useState} from 'react';
import {Button, Modal} from 'react-bootstrap';
import ReactDOM from 'react-dom';

function AccountFormModal() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Button variant="primary" onClick={handleShow}>
                <i class="text-right fas fa-plus-circle">
                </i> NEW KAKE-BO!
            </Button>

            <Modal show={show} onHide={handleClose} centered>
                <Modal.Header closeButton>
                    <Modal.Title>新しい KAKE-BO を作る</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    ここにフォームを作ります。
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        閉じる
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        作成
                    </Button>
                </Modal.Footer>
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
