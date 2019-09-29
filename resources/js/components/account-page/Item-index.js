import React from "react";
import moment from "moment";
import { separate } from "../libs";
import { ListGroup, ButtonToolbar, Button, Table } from "react-bootstrap";

function ItemIndex({ items, newItem, setShowItemForm }) {
  console.log(items)
  console.log(newItem)
  const getTrs = () => {
    const curDate = moment(newItem.date).format("YYYY-MM-DD");
    const dates = Object.keys(items);
    if (!dates.includes(curDate)) return null;
    const trs = items[curDate].map((item, i) => {
      if (item.isIncome) {
        return (
          <tr key={i}>
            <td>{item.name}</td>
            <td>{separate(item.amount)}</td>
            <td><button type="button" className="close">×</button></td>
          </tr>
        );
      } else {
        return (
          <tr key={i}>
            <td>{item.name}</td>
            <td className="text-danger">{separate(item.amount)}</td>
            <td><button type="button" className="close">×</button></td>
          </tr>
        );
      }
    });
    return trs;
  }

  const getTable = () => {
    const trs = getTrs();
    return (
      <Table responsive>
        <thead>
          <tr>
            <th>項目</th>
            <th>金額</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {trs}
        </tbody>
      </Table>
    );
  }

  return (
    <>
      <div className="d-flex justify-content-end mb-4">
        <ButtonToolbar>
          <Button
            variant="outline-primary"
            onClick={() => setShowItemForm(true)}
          >
            追加
          </Button>
        </ButtonToolbar>
      </div>
      {getTable()}
    </>
  )
}

export default ItemIndex;
