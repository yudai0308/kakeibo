import React from "react";
import {
  Form,
  Button,
} from 'react-bootstrap';

function ItemForm() {
  const handleChange = () => {
    return;
  }

  return (
    <Form onSubmit={e => handleSubmit(e, changeHandler)}>
      <Form.Group controlId="form-accout-name">
        <Form.Label>収支の入力</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="test"
          className="mb-2"
          onChange={handleChange}
          required
        />
      </Form.Group>

      <div className="text-right">
        <Button variant="primary" type="submit">完了</Button>
      </div>
    </Form>
  )
}

export default ItemForm;
