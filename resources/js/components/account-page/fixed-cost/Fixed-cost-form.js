import React from "react";
import { Form, Row, Col, Button } from "react-bootstrap";

function FixedCostForm() {
  const forms = [
    { id: "rent-form", title: "居住費" },
    { id: "electricity-bill-form", title: "電気代" },
    { id: "water-bill-form", title: "水道代" },
    { id: "gas-bill-form", title: "ガス代" },
    { id: "cell-phone-bill", title: "通信費" },
  ]
  return (
    <Form>
      {
        forms.map((f, i) => {
          return (
            <Form.Group key={i} as={Row} controlId={f.id}>
              <Form.Label className="text-right" xs="4" column>{f.title}</Form.Label>
              <Col xs="8">
                <Row>
                  <Col xs="8">
                    <Form.Control
                      type="number"
                      min={0}
                      step={1000}
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
