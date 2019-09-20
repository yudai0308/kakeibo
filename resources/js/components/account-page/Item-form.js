import React from "react";
import {
  Form, Button, ButtonToolbar,
  ToggleButtonGroup, ToggleButton,
} from 'react-bootstrap';

function ItemForm() {
  const handleChange = () => {
    return;
  }

  return (
    <Form onSubmit={e => handleSubmit(e, changeHandler)}>
      <Form.Group controlId="form-item-name">
        <Form.Label>項目</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="食費、日用品、交際費 etc"
          className="mb-2"
          required
        />
      </Form.Group>
      <Form.Group controlId="form-item-amount">
        <Form.Label>金額（円）</Form.Label>
        <Form.Control
          type="number"
          name="title"
          placeholder="半角数字のみ"
          className="mb-2"
          min="1"
          required
        />
      </Form.Group>
      <Form.Group controlId="form-item-isIncome">
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="isIncome" defaultValue={1}>
            <ToggleButton value={1} variant="info">費用</ToggleButton>
            <ToggleButton value={2} variant="info">収入</ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </Form.Group>

      <div className="text-right">
        <Button variant="primary" type="submit">完了</Button>
      </div>
    </Form>
  )
}

export default ItemForm;
