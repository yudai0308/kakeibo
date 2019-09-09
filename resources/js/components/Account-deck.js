import React from 'react';
import ReactDOM from 'react-dom';
import AccountCard from './Account-card';

function AccountDeck() {
    return (
        <div className="card-deck">
            <AccountCard />
            <AccountCard />
            <AccountCard />
        </div>
    );
}

export default AccountCard;

if (document.getElementById('account-deck')) {
    ReactDOM.render(
        <AccountDeck />,
        document.getElementById('account-deck')
    );
}
