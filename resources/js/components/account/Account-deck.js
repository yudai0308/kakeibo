import React, {useState, useEffect} from 'react';
import {Row} from 'react-bootstrap';
import AccountCard from './Account-card';
import User from '../../User.js';

function AccountDeck (props) {
  const accounts = props.accounts;
  const cards = (accounts)
    ? accounts.map((account, i) => <AccountCard account={account} key={i} />)
    : <p className="m-0 text-center">まずは新しい家計簿を作成しましょう！</p>
  ;

  return (
    <div className="bg-light rounded p-4">
      <Row>
        {cards}
      </Row>
    </div>
  );
}

export default AccountDeck;
