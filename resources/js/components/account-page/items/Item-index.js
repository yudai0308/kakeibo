import React from "react";
import moment from "moment";
import { axios } from "../../../axios";
import { separate } from "../../libs";
import {
  ButtonToolbar,
  Button,
  Table,
  Alert,
} from "react-bootstrap";

function ItemIndex(props) {
  const {
    items, newItem, fetchItems,
    setShowItemForm, resetNewItem
  } = props;

  const deleteItem = async item => {
    const params = {
      accountId: newItem.id,
      itemId: item.id
    };
    const url = "/api/item";
    const res = await axios.delete(url, { data: params });
    fetchItems();
  }

  const getTrs = () => {
    const curDate = moment(newItem.date).format("YYYY-MM-DD");
    const dates = Object.keys(items);
    if (!dates.includes(curDate)) return null;
    const trs = items[curDate].map((item, i) => {
      return (
        <tr key={item.id}>
          <td>{item.sub_category}</td>
          <td style={item.isIncome ? null : { color: "#b33e5c" }}>
            ¥{separate(item.amount)}
          </td>
          <td>
            {item.memo}
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
        <Table responsive hover>
          <thead>
            <tr className="bg-light">
              <th>カテゴリー</th>
              <th>金額</th>
              <th>備考</th>
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

  const handleAddButton = () => {
    resetNewItem();
    setShowItemForm(true);
  }

  return (
    <>
      <div className="d-flex justify-content-between mb-4">
        <h6 className="mt-2">{moment(newItem.date).format("YYYY年MM月DD日")}</h6>
        <ButtonToolbar>
          <Button
            variant="outline-primary"
            onClick={handleAddButton}
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
