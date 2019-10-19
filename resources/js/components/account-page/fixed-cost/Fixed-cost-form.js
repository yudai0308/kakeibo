import React, { useState } from "react";
import { axios } from "../../../axios";
import { Form, Row, Col, Button } from "react-bootstrap";

function FixedCostForm(props) {
  const {
    items, newItem,
    yearMonth, fetchItems
  } = props;

  const handleChange = (e, hash) => {
    const id = hash.id;
    const val = e.target.value;
    setFixedCosts({
      ...fixedCosts,
      [id]: Number(val),
    })
  }

  const sleep = ms => new Promise(res => setTimeout(res, ms));
  const handleSubmit = async (e, hash) => {
    e.preventDefault();
    const url = "/api/item_fixed_cost";
    const accountId = newItem.id;
    const data = {
      accountId: accountId,
      subCategoryId: hash.id,
      date: `${yearMonth.year}-${yearMonth.month}-1`,
      cost: fixedCosts[hash.id],
    }
    setSuccess({ ...success, [hash.id]: true });
    await axios.post(url, data);
    fetchItems();
    await sleep(1500);
    setSuccess({ ...success, [hash.id]: false });
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
    14: findDefaultCost(14), 15: findDefaultCost(15),
    16: findDefaultCost(16), 17: findDefaultCost(17),
    18: findDefaultCost(18),
  });

  const [success, setSuccess] = useState({
    14: false, 15: false, 16: false, 17: false, 18: false,
  })

  return (
    makeFormHash(items, baseForms).map((hash, i) => {
      return (
        <Form key={hash.id} onSubmit={e => handleSubmit(e, hash)}>
          <Form.Group as={Row} controlId={hash.subCategoryId}>
            <Form.Label className="text-right" xs="4" column>{hash.title}</Form.Label>
            <Col xs="8">
              <Row>
                <Col xs="8">
                  <Form.Control
                    className="pr-0"
                    type="number"
                    defaultValue={hash.amount}
                    min={1}
                    onChange={e => handleChange(e, hash)}
                  />
                </Col>
                <Col className="text-left p-1" xs="2">
                  {
                    !success[hash.id]
                    ?
                      <Button
                        size="sm"
                        type="submit"
                        variant="outline-primary"
                        className="rounded-pill"
                      >
                        登録
                      </Button>
                    :
                      <Button
                        size="sm"
                        variant="success"
                        className="rounded-pill"
                      >
                        完了
                      </Button>
                  }
                </Col>
              </Row>
            </Col>
          </Form.Group>
        </Form>
      )
    })
  );
}

export default FixedCostForm;
