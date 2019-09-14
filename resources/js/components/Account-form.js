import React, {useState} from 'react';
import {Form, Button} from 'react-bootstrap';
import ShareForm from './Account-form-share';

function AccountForm () {
  return (
    <Form>
      <Form.Group controlId="formAccoutName">
        <Form.Label>家計簿に名前をつけましょう！</Form.Label>
        <Form.Control type="text" placeholder="○○家計簿" className="mb-2" />
        <Form.Text className="text-muted">
          家計簿は個人用だけでなく、複数人でシェアしながらご利用できます。<br/>
          最大３つまで作成することができますので、区別できるように名前をつけてください。
        </Form.Text>
      </Form.Group>

      {/* <Form.Group controlId="formAccountSharing">
        <Form.Label>共有する（任意）</Form.Label>
        <ShareForm />
      </Form.Group> */}
      <Button variant="primary" type="submit">
        作成
      </Button>
    </Form>
  );
}

export default AccountForm;
