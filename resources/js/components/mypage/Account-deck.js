import React, { useState, useEffect, useContext } from 'react';
import { Row } from 'react-bootstrap';
import { AccountContext } from './mypage';
import AccountCard from './Account-card';
import User from '../../User.js';

function AccountDeck() {
  const getCards = (accounts) => {
    return (accounts)
      ? accounts.map((account, i) => <AccountCard account={account} key={i} />)
      : <p className="m-0 text-center">まずは新しい家計簿を作成しましょう！</p>
      ;
  }

  return (
    <div className="bg-light rounded p-4">
      <Row>
        <AccountContext.Consumer>
          {accounts => getCards(accounts)}
        </AccountContext.Consumer>
      </Row>
    </div>
  );
}

export default AccountDeck;
