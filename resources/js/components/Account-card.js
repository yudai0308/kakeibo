import React from 'react';
import ReactDOM from 'react-dom';

function AccountCard(props) {
    // console.log(props)
    return (
        <div className="card text-center">
            <a className="text-dark text-decoration-none" href="#">
                <div className="card-body">
                    <h5 className="card-title">{props.title}</h5>
                    <img className="img-fluid" src="https://img.icons8.com/bubbles/100/000000/money.png" />
                </div>
            </a>
        </div>
    );
}

export default AccountCard;
