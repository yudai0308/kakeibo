import React, { useState } from "react";
import { axios } from "../../../axios";
import { Form, Row, Col, Button } from "react-bootstrap";

function FixedCostForm({ items, newItem, yearMonth }) {
  const handleChange = e => {
    const id = e.target.id;
    const val = e.target.value;
    setFixedCosts({
      ...fixedCosts,
      [id]: Number(val),
    })
  }

  const handleSubmit = async e => {
    e.preventDefault();
    const url = "/api/item_fixed_cost";
    const accountId = newItem.id;
    const data = {
      id: accountId,
      date: `${yearMonth.year}-${yearMonth.month}-1`,
      fixedCosts: fixedCosts,
    }
    const res = await axios.post(url, data);
    console.log(res.data)
  }

  const baseForms = [
    { id: 14, title: "居住費", amount: null },
    { id: 15, title: "電気代", amount: null },
    { id: 16, title: "水道代", amount: null },
    { id: 17, title: "ガス代", amount: null },
    { id: 18, title: "通信費", amount: null },
  ]

  const findFixedCosts = items => {
    return items.filter(item => item.category_id === 12);
  }

  const makeFormHash = (items, baseForms) => {
    const fixedCosts = findFixedCosts(items);
    let formHash = baseForms;
    for (const item of fixedCosts) {
      const id = item.sub_category_id;
      const i = formHash.findIndex(form => form.id === id);
      if (i >= 0) formHash[i].amount = item.amount;
    }
    return formHash;
  }

  const findDefaultCost = id => {
    const formHash = makeFormHash(items, baseForms);
    for (const hash of formHash) {
      if (hash.id === id) return hash.amount;
    }
    return null;
  }

  const [fixedCosts, setFixedCosts] = useState({
    14: findDefaultCost(14),
    15: findDefaultCost(15),
    16: findDefaultCost(16),
    17: findDefaultCost(17),
    18: findDefaultCost(18),
  });

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      {
        makeFormHash(items, baseForms).map((f, i) => {
          return (
            <Form.Group key={i} as={Row} controlId={f.subCategoryId}>
              <Form.Label className="text-right" xs="4" column>{f.title}</Form.Label>
              <Col xs="8">
                <Row>
                  <Col xs="8">
                    <Form.Control
                      className="pr-0"
                      type="number"
                      defaultValue={f.amount}
                      min={0}
                      onChange={e => handleChange(e)}
                    />
                  </Col>
                  <Col className="text-left" xs="2">
                    <Button size="sm" variant="outline-primary" type="submit" className="rounded-pill">
                      OK
                    </Button>
                  </Col>
                </Row>
              </Col>
            </Form.Group>
          )
        })
      }

      {/* <div className="text-right">
        <Button variant="primary" type="submit">
          登録
        </Button>
      </div> */}
    </Form>
  );
}

export default FixedCostForm;
