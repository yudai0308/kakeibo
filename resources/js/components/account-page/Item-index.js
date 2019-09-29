import React from "react";
import moment from "moment";
import { axios } from "../../axios";
import { separate } from "../libs";
import {
  ButtonToolbar,
  Button,
  Table,
  Alert,
} from "react-bootstrap";

function ItemIndex(props) {
  const {
    items, newItem, fetchItems, setShowItemForm
  } = props;

  const deleteItem = async item => {
    console.log(item)
    const params = {
      accountId: newItem.id,
      itemId: item.id
    };
    const url = "/api/item";
    const res = await axios.delete(url, { data: params });
    fetchItems();
    console.log(res.data)
  }

  const getTrs = () => {
    const curDate = moment(newItem.date).format("YYYY-MM-DD");
    const dates = Object.keys(items);
    if (!dates.includes(curDate)) return null;
    const trs = items[curDate].map((item, i) => {
      return (
        <tr key={item.id}>
          <td>{item.name}</td>
          <td className={item.isIncome ? "" : "text-danger"}>
            {separate(item.amount)}
          </td>
          <td>
            <button
              type="button"
              className="close"
              onClick={() => deleteItem(item)}
            >
              ×
            </button>
          </td>
        </tr>
      )
    });
    return trs;
  }

  const getTable = () => {
    const trs = getTrs();
    let component;
    if (trs !== null) {
      component = (
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
      )
    } else {
      component = (
        <Alert variant="info" className="text-center">
          「追加」ボタンから項目を追加できます。
        </Alert>
      )
    }
    return component;
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h6 className="mt-2">{moment(newItem.date).format("YYYY年MM月DD日")}</h6>
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
