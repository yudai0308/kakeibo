import React, { useState } from "react";
import {
  Form, FormControl, InputGroup,
  Button, Alert, OverlayTrigger, Tooltip,
} from "react-bootstrap";
import { AccountContext } from "../account-context";
// import ShareForm from "./Account-form-share";
import { axios } from "../../../axios";

function AccountForm() {
  const [newAccount, setNewAccount] = useState({ title: "", isPublic: false });
  const [errorMsg, setErrorMsg] = useState("");
  const [createdAccount, setCreatedAccount] = useState(null);

  const handleChange = (e) => {
    const key = e.target.name;
    const val = (key === "isPublic") ? e.target.checked : e.target.value;
    let setVals = newAccount;
    setVals[key] = val;
    setNewAccount(setVals);
  }

  const handleSubmit = (e, callback) => {
    e.preventDefault();
    axios.post("/account", newAccount)
      .then(res => {
        if (!res.data.error) {
          setCreatedAccount(res.data);
          callback();
        } else {
          setErrorMsg(res.data.error);
        }
      }).catch(err => {
        // TODO: エラーハンドリング
      });
  }

  const copyURL = () => {
    const textarea = document.getElementById("new-account-url");
    textarea.select();
    document.execCommand("copy");
  }

  const getBody = () => {
    if (createdAccount) {
      return (
        <>
          <p>家計簿を作成しました！</p>
          <InputGroup className="mb-3">
            <FormControl id="new-account-url" readOnly defaultValue={createdAccount.url} />
            <InputGroup.Append>
              <OverlayTrigger placement="top" overlay={<Tooltip>コピー</Tooltip>}>
                <Button variant="outline-secondary" onClick={copyURL}>
                  <i className="far fa-copy"></i>
                </Button>
              </OverlayTrigger>
            </InputGroup.Append>
          </InputGroup>
          <Alert variant="success">
            {createdAccount.isPublic &&
              <small>URL を知っていれば誰でもアクセスできます。<br/>共有したい相手に URL を知らせましょう！</small>}
            {!createdAccount.isPublic && <small>自分以外はアクセスできないように設定されました。</small>}
          </Alert>
        </>
      )
    } else {
      return (
        <AccountContext.Consumer>
          {({ changeHandler }) => {
            return (
              <Form onSubmit={e => handleSubmit(e, changeHandler)}>
                <Form.Group controlId="form-accout-name">
                  <Form.Label>家計簿に名前をつけましょう！</Form.Label>
                  <Form.Control
                    type="text"
                    name="title"
                    placeholder="○○の家計簿"
                    className="mb-2"
                    onChange={handleChange}
                    required
                  />
                  <Form.Text className="text-muted mb-2">
                    家計簿は個人用だけでなく、複数人でシェアしながらご利用できます。<br />
                    最大３つまで作成することができますので、区別できるように名前をつけてください。
                  </Form.Text>
                </Form.Group>
                <Form.Group controlId="form-accout-isPublic">
                  <Form.Check
                    type="checkbox"
                    name="isPublic"
                    label="家計簿を共有する"
                    onChange={handleChange}
                  />
                  <Form.Text className="text-muted mb-2">
                    家計簿はを共有したい場合はチェックしてください。
                  </Form.Text>
                </Form.Group>

                {errorMsg ? <Alert variant="danger">{errorMsg}</Alert> : null}

                {/* <Form.Group controlId="formAccountSharing">
                <Form.Label>共有する（任意）</Form.Label>
                <ShareForm />
                </Form.Group> */}

                <div className="text-right">
                  <Button variant="primary" type="submit">作成</Button>
                </div>
              </Form>
            )
          }}
        </AccountContext.Consumer>
      )
    }
  }

  return getBody();
}

export default AccountForm;
