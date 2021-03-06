import React, { useEffect } from "react";
import {
  Form, Button, Col, ButtonToolbar,
  ToggleButtonGroup, ToggleButton,
} from "react-bootstrap";
import { axios } from "../../../axios";

function ItemForm(props) {
  const {
    newItem, setNewItem, closeModal,
    fetchItems, setShowItemForm, subCate,
  } = props;

  const handleNewItemChange = (key, val) => {
    setNewItem(newItem => ({ ...newItem, [key]: val }));
  }

  const handleIsIncomeChange = isIncome => {
    handleNewItemChange("subCateId", isIncome ? 1 : 4);
    handleNewItemChange("isIncome", isIncome);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowItemForm(false)
    axios.post("/api/item", newItem)
      .then(res => {
        fetchItems();
        // callBack();
      });
  }

  const getOptions = isIncome => {
    const options = subCate.map(cate => {
      // カテゴリーID 10 以下は収入、11 は生活費
      const isTarget = isIncome
        ? cate.category_id <= 10
        : cate.category_id === 11;
      if (isTarget) {
        return (
          <option key={cate.id} value={cate.id}>
            {cate.name}
          </option>
        )
      }
    })
    return options;
  }

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <Form.Group controlId="form-item-isIncome">
        <ButtonToolbar>
          <ToggleButtonGroup type="radio" name="isIncome" defaultValue={newItem.isIncome}>
            <ToggleButton
              value={0}
              variant="info"
              variant="outline-info"
              onClick={() => handleIsIncomeChange(0)}
            >
              支出
            </ToggleButton>
            <ToggleButton
              value={1}
              variant="info"
              variant="outline-info"
              onClick={() => handleIsIncomeChange(1)}
            >
              収入
            </ToggleButton>
          </ToggleButtonGroup>
        </ButtonToolbar>
      </Form.Group>
      <Form.Row>
        <Col md={4}>
          <Form.Group controlId="form-item-subcategory">
            <Form.Label>カテゴリー</Form.Label>
            <Form.Control
              as="select"
              onChange={e => handleNewItemChange("subCateId", e.target.value)}
            >
              {getOptions(newItem.isIncome)}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col md={8}>
          <Form.Group controlId="form-item-name">
            <Form.Label>備考</Form.Label>
            <Form.Control
              type="text"
              name="memo"
              placeholder="○○スーパー"
              className="mb-2"
              onChange={e => handleNewItemChange("memo", e.target.value)}
            />
          </Form.Group>
        </Col>
      </Form.Row>
      <Form.Group controlId="form-item-amount">
        <Form.Label>金額（円）</Form.Label>
        <Form.Control
          type="number"
          name="amount"
          placeholder="半角数字のみ"
          className="mb-2"
          min={1}
          required
          onChange={e => handleNewItemChange("amount", e.target.value)}
        />
      </Form.Group>

      <div className="text-right">
        <Button
          variant="secondary"
          className="mr-2"
          onClick={() => setShowItemForm(false)}
        >
          戻る
        </Button>
        <Button
          variant="primary"
          type="submit"
        >
          完了
        </Button>
      </div>
    </Form>
  )
}

export default ItemForm;
