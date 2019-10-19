import React from "react";
import { Row, Alert } from "react-bootstrap";
import { AccountContext } from "../AccountContext";
import AccountCard from "./Account-card";

function AccountDeck() {
  const getCards = (accounts) => {
    return (accounts)
      ? accounts.map((account, i) => <AccountCard account={account} key={i} />)
      : <Alert variant="info" className="text-center">
          まずは新しい家計簿を作成しましょう！
        </Alert>
      ;
  }

  return (
    <div className="rounded p-4">
      <Row>
        <AccountContext.Consumer>
          {({ accounts }) => getCards(accounts)}
        </AccountContext.Consumer>
      </Row>
    </div>
  );
}

export default AccountDeck;
