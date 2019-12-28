// 家計簿作成時に他ユーザーのメルアドを登録させることで招待、共有できる仕組み（未実装）
import React, {useState} from "react";
import {
  Button,
  InputGroup,
  FormControl,
  ListGroup,
} from "react-bootstrap";

function ShareForm () {
  const [emails, setEmail] = useState();
  const [input, setInput] = useState();

  const clickHandler = (e) => {
    if (emails) {
      setEmail(emails.concat(input));
    } else {
      setEmail([input]);
    }
    return;
  }

  const changeHandler = (e) => {
    const newEmail = e.target.value;
    setInput(newEmail);
    return;
  }

  const renderEmails = () => {
    const emailsList = emails.map((email, i) => {
      return (<ListGroup.Item key={i}>{email}</ListGroup.Item>)
    })
    return (<ListGroup variant="flush">{emailsList}</ListGroup>)
  }

  return (
    <>
      <InputGroup className="mb-3">
        <InputGroup.Prepend>
          <Button variant="outline-secondary" onClick={clickHandler}>追加</Button>
        </InputGroup.Prepend>
        <FormControl
          type="email"
          aria-describedby="basic-addon1"
          onChange={e => changeHandler(e)}
        />
      </InputGroup>
      { emails ? renderEmails() : null }
    </>
  );
}

export default ShareForm;
