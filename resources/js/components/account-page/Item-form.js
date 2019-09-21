import React, { useEffect } from "react";
import {
  Form, Button, ButtonToolbar,
  ToggleButtonGroup, ToggleButton,
} from 'react-bootstrap';
import { axios } from '../../axios';

function ItemForm(props) {
  const { newItem, setNewItem } = props;
  const handleNewItemChange = (key, val) => {
    setNewItem(newItem => ({ ...newItem, [key]: val }));
  }
  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post("/api/item", newItem)
      .then(res => {
        // callBack();
      });
  }

  // 項目名をボタンで入力した場合に input の中身も state と同じ値にする。
  useEffect(() => {
    const newItemNameEle = document.getElementById("form-item-name");
    if (newItem.name !== newItemNameEle.value) {
      newItemNameEle.value = newItem.name
    }
  })

  const nameTemplates = ["食費", "外食費", "日用品", "交際費"];

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group controlId="form-item-name">
        <Form.Label>項目</Form.Label>
        <Form.Control
          type="text"
          name="title"
          placeholder="食費、外食費、日用品 etc"
          className="mb-2"
          required
          onChange={e => handleNewItemChange("name", e.target.value)}
        />
        <ButtonToolbar>
          {nameTemplates.map((name, i) => {
            return (
              <Button
                variant="secondary" size="sm" className="mr-2" key={i}
                onClick={e => handleNewItemChange("name", e.target.innerText)}
              >
                {name}
              </Button>
            )
          })}
        </ButtonToolbar>
      </Form.Group>
      <Form.Group controlId="form-item-amount">
        <Form.Label>金額（円）</Form.Label>
        <Form.Control
          type="number"
          name="amount"
          placeholder="半角数字のみ"
          className="mb-2"
          min="1"
          required
          onChange={e => handleNewItemChange("amount", e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="form-item-isIncome">
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="isIncome" defaultValue={newItem.isIncome}>
            <ToggleButton value={0} variant="info" onClick={() => handleNewItemChange("isIncome", 0)}>費用</ToggleButton>
            <ToggleButton value={1} variant="info" onClick={() => handleNewItemChange("isIncome", 1)}>収入</ToggleButton>
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
