import React, { useState } from "react";
import { axios } from "../../../axios";
import { Form, Row, Col, Button } from "react-bootstrap";

function FixedCostForm({ items, yearMonth }) {
  const handleChange = e => {
    const id = e.target.id;
    const val = e.target.value;
    setFixedCosts({
      ...fixedCosts,
      [id]: Number(val),
    })
  }

  const handleSubmit = e => {
    e.preventDefault();
  }

  const baseForms = [
    { id: "rent", subCategoryId: 14, title: "居住費", defaultValue: null },
    { id: "electricityBill", subCategoryId: 15, title: "電気代", defaultValue: null },
    { id: "waterBill", subCategoryId: 16, title: "水道代", defaultValue: null },
    { id: "gasBill", subCategoryId: 17, title: "ガス代", defaultValue: null },
    { id: "cellphoneBill", subCategoryId: 18, title: "通信費", defaultValue: null },
  ]

  const findFixedCosts = items => {
    return items.filter(item => item.category_id === 12);
  }

  const makeFormHash = (items, baseForms) => {
    const fixedCosts = findFixedCosts(items);
    let formHash = baseForms;
    for (const item of fixedCosts) {
      const id = item.sub_category_id;
      const i = formHash.findIndex(form => form.subCategoryId === id);
      if (i >= 0) formHash[i].defaultValue = item.amount;
    }
    return formHash;
  }

  const findDefaultCost = id => {
    const formHash = makeFormHash(items, baseForms);
    for (const hash of formHash) {
      if (hash.id === id) return hash.defaultValue;
    }
    return null;
  }

  const [fixedCosts, setFixedCosts] = useState({
    rent: findDefaultCost("rent"),
    electricityBill: findDefaultCost("electricityBill"),
    waterBill: findDefaultCost("waterBill"),
    gasBill: findDefaultCost("gasBill"),
    cellphoneBill: findDefaultCost("cellphoneBill"),
  });

  console.log(fixedCosts)

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      {
        makeFormHash(items, baseForms).map((f, i) => {
          return (
            <Form.Group key={i} as={Row} controlId={f.id}>
              <Form.Label className="text-right" xs="4" column>{f.title}</Form.Label>
              <Col xs="8">
                <Row>
                  <Col xs="8">
                    <Form.Control
                      type="number"
                      defaultValue={f.defaultValue}
                      min={0}
                      onChange={e => handleChange(e)}
                    />
                  </Col>
                  <Col className="text-left" xs="4">円</Col>
                </Row>
              </Col>
            </Form.Group>
          )
        })
      }

      <div className="text-right">
        <Button variant="primary" type="submit">
          登録
        </Button>
      </div>
    </Form>
  );
}

export default FixedCostForm;
