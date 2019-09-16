import React, { useState, useEffect, useContext } from 'react';
import { Row } from 'react-bootstrap';
import AccountCard from './Account-card';
import User from '../../User.js';

// (props) ではなく ({accounts}) とすることで、props 内部の欲しい値を直接受け取れる。
function AccountDeck() {
  const { Consumer } = useContext(AccountContext);
  const getCards = (accounts) => {
    return (accounts)
      ? accounts.map((account, i) => <AccountCard account={account} key={i} />)
      : <p className="m-0 text-center">まずは新しい家計簿を作成しましょう！</p>
    ;
  }

  return (
    <div className="bg-light rounded p-4">
      <Row>
        <Consumer>
          {accounts => getCards(accounts)}
        </Consumer>
      </Row>
    </div>
  );
}

export default AccountDeck;
