import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyCalendar from "./Calendar";
import Overview from "./Overview";
import ItemModal from "./Item-modal"
import { axios } from "../../axios";
import { networkInterfaces } from "os";

function AccountPage() {
  const [isShown, setModalState] = useState(false);
  // const [modalTitle, setModalTitle] = useState("収支一覧");
  const [showItemForm, setShowItemForm] = useState(false);
  const [items, setItems] = useState(null);
  const [yearMonth, setYearMonth] = useState({
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth() + 1,
  })
  const getAccountId = () => {
    const div = document.getElementById("account-page");
    const id = div.getAttribute("data-account-id");
    return Number(id);
  }

  const [newItem, setNewItem] = useState({
    id: getAccountId(),
    name: "",
    ammount: 0,
    date: null,
    isIncome: 0,
  });

  const fetchItems = async () => {
    const id = newItem.id;
    const url = `/api/account/${id}/items?year=${yearMonth.year}&month=${yearMonth.month}`;
    // TODO: エラーハンドリング
    const res = await axios.get(url);
    setItems(res.data);
  }

  // FIXME: 無理やりなやり方のため、年月の取得方法については要検討。
  const updateYearMonth = () => {
    console.log("update")
    const elem = document.getElementsByClassName("react-calendar__navigation__label");
    if (!elem[0]) return null;
    let text = elem[0].innerText;
    if (!isYearMonth(text)) return null; // view = "month" が確認できるなら不要？
    text = text.replace("月", "");
    const [year, month] = text.split("年");
    if (year !== yearMonth.year || month !== yearMonth.month) {
      setYearMonth({ year: year, month: month });
    }
  }

  const isYearMonth = text => {
    const pattern = /^\d{4}年\d{1,2}月$/;
    return pattern.test(text);
  }

  useEffect(() => {
    fetchItems();
  }, [setItems])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <div className="mb-4 border-bottom">
            <p className="font-weight-bold">家計簿タイトル</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8" className="mb-4">
          <Overview items={items} />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          <MyCalendar
            showModal={() => setModalState(true)}
            fetchItems={fetchItems}
            updateYearMonth={updateYearMonth}
            newItem={newItem}
            setNewItem={setNewItem}
            items={items}
          />
          <ItemModal
            isShown={isShown}
            showItemForm={showItemForm}
            setShowItemForm={setShowItemForm}
            closeModal={() => setModalState(false)}
            items={items}
            newItem={newItem}
            setNewItem={setNewItem}
            fetchItems={fetchItems}
          />
        </Col>
      </Row>
    </Container>
  )
}

if (document.getElementById("account-page")) {
  ReactDOM.render(
    <AccountPage />,
    document.getElementById("account-page")
  );
}
