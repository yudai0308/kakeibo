import React from "react";
import { Row, Alert } from "react-bootstrap";
import { AccountContext } from "../account-context";
import AccountCard from "./account-card";

function AccountDeck() {
  const getCards = (accounts) => {
    return (accounts && accounts.length > 0)
      ? accounts.map((account, i) => <AccountCard account={account} key={i} />)
      : <Alert variant="info" className="text-center" style={{width: "100%"}}>
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
