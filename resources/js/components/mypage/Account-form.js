import React, {useState} from 'react';
import {Form, Button, Alert} from 'react-bootstrap';
// import ShareForm from './Account-form-share';
import {axios} from '../../axios';
import GetUser from '../../User';

function AccountForm () {
  const [title, setTitle] = useState("");
  const [errorMsg, setErrorMsg] = useState("");
  const [created, setCreated] = useState(false);

  const handleChange = (e) => {
    const name = e.target.value;
    setTitle(name);
    return;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    // const user = await GetUser();
    axios.post("/account", {
      name: title,
    })
    .then(res => {
      if (!res.data.error) {
        setCreated(true);
      } else {
        setErrorMsg(res.data.error);
      }
    })
    .catch(err => {
      console.log(err)
    });
  }

  const body = () => {
    if (created) {
      return (
        <>
          <p>家計簿を作成しました！</p>
          <p>URL</p>
        </>
      )
    } else {
      //
    }
  }

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formAccoutName">
        <Form.Label>家計簿に名前をつけましょう！</Form.Label>
        <Form.Control
          type="text"
          placeholder="○○の家計簿"
          className="mb-2"
          onChange={handleChange}
          required
        />
        <Form.Text className="text-muted">
          家計簿は個人用だけでなく、複数人でシェアしながらご利用できます。<br/>
          最大３つまで作成することができますので、区別できるように名前をつけてください。
        </Form.Text>
      </Form.Group>
      { errorMsg ? <Alert variant="danger">{errorMsg}</Alert> : null }

      {/* <Form.Group controlId="formAccountSharing">
        <Form.Label>共有する（任意）</Form.Label>
        <ShareForm />
      </Form.Group> */}

      <div className="text-right">
        <Button variant="primary" type="submit">
          作成
        </Button>
      </div>
    </Form>
  );
}

export default AccountForm;
