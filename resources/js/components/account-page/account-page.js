import React from "react";
import ReactDOM from "react-dom";

function AccountPage() {

  return (
    <h1>家計簿ページ</h1>
  )
}

if (document.getElementById("account-page")) {
  ReactDOM.render(
    <AccountPage />,
    document.getElementById("account-page")
  );
}
