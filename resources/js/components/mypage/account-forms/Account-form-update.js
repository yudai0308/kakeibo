import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { axios } from "../../../axios";

function AccountUpdataForm({ account, setShowModal, fetchAccounts }) {
  const [updateAccount, setUpdateAccount] = useState({
    title: account.title,
    isPublic: account.isPublic,
  });

  const handleSubmit = async e => {
    e.preventDefault();
    const url = `api/account/${account.id}`;
    const res = await axios.put(url, updateAccount);
    fetchAccounts();
    setShowModal(false);
  }

  const handleChange = e => {
    let setVals = updateAccount;
    const key = e.target.name;
    const val = (key === "isPublic") ? e.target.checked : e.target.value;
    setVals[key] = val;
    setUpdateAccount(setVals);
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="form-accout-name">
        <Form.Label>家計簿の名前を変更します。</Form.Label>
        <Form.Control
          type="text"
          name="title"
          defaultValue={account.title}
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
          defaultChecked={account.isPublic === 1 ? true : false}
        />
        <Form.Text className="text-muted mb-2">
          家計簿はを共有したい場合はチェックしてください。
                  </Form.Text>
      </Form.Group>

      {/* {errorMsg ? <Alert variant="danger">{errorMsg}</Alert> : null} */}

      <div className="text-right">
        <Button variant="primary" type="submit">更新</Button>
      </div>
    </Form>
  );
}

export default AccountUpdataForm;
