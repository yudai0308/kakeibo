import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyCalendar from "./calendar";
import Overview from "./overview";
import FixedCostModal from "./fixed-cost/fixed-cost-modal"
import ChartModal from "./charts/chart-modal";
import ItemModal from "./items/item-modal"
import { axios } from "../../axios";
import { networkInterfaces } from "os";

function AccountPage() {
  const [isShown, setModalState] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);
  const [showFixedCost, setShowFixedCost] = useState(false);
  const [showChart, setShowChart] = useState({swith: false, type: 1});
  const [items, setItems] = useState(null);
  const [sumThisMonth, setSumThisMonth] = useState(null);
  const [subCate, setSubCate] = useState(null);
  const [yearMonth, setYearMonth] = useState({
    year: (new Date()).getFullYear(),
    month: (new Date()).getMonth() + 1,
  })

  const getAccountId = () => {
    const div = document.getElementById("account-page");
    const id = div.getAttribute("data-account-id");
    return Number(id);
  }

  // FIXME: カスタムデータ属性を書き換えた状態で再レンダーすると表示が変わってしまう。
  const getAccountTitle = () => {
    const div = document.getElementById("account-page");
    const title = div.getAttribute("data-account-title");
    return title;
  }

  const [newItem, setNewItem] = useState({
    id: getAccountId(),
    memo: "",
    amount: 0,
    date: null,
    isIncome: 0,
    subCateId: 4, // 「食費」が初期値
  });
  const resetNewItem = () => {
    setNewItem({
      ...newItem,
      memo: "",
      amount: 0,
      isIncome: 0,
      subCateId: 4, // 「食費」が初期値
    });
  }

  const fetchItems = async (base = "") => {
    const id = newItem.id;
    const url = `/api/account/${id}/items?year=${yearMonth.year}&month=${yearMonth.month}&base=${base}`;
    // TODO: エラーハンドリング
    const res = await axios.get(url);
    setItems(res.data);
  }

  // FIXME: 無理やりなやり方のため、年月の取得方法については要検討。
  const updateYearMonth = () => {
    if (!isMonthView()) return;
    const elem = document.getElementsByClassName("react-calendar__navigation__label");
    let text = elem[0].innerText;
    text = text.replace("月", "");
    const [year, month] = text.split("年");
    if (Number(year) !== yearMonth.year || Number(month) !== yearMonth.month) {
      setYearMonth({ year: Number(year), month: Number(month) });
    }
  }

  const isMonthView = () => {
    const elem = document.getElementsByClassName("react-calendar__navigation__label");
    if (!elem[0]) return false;
    let text = elem[0].innerText;
    const pattern = /^\d{4}年\d{1,2}月$/;
    return pattern.test(text);
  }

  const getSumThisMonth = () => {
    if (items !== null) {
      let sum = 0;
      for (const item of items) {
        sum += item.isIncome ? item.amount : item.amount * (-1);
      }
      setSumThisMonth(sum);
    } else {
      setSumThisMonth(null);
    }
  }

  const excludeFixedCost = items => {
    return items.filter(item => item.category_id !== 12);
  }
  const excludedItems = items ? excludeFixedCost(items) : null;

  useEffect(() => {
    fetchItems();
  }, [setItems, yearMonth])

  useEffect(() => {
    getSumThisMonth();
  }, [items])

  useEffect(() => {
    const fetchSubCategories = async () => {
      const url = "/api/sub_category";
      const res = await axios.get(url);
      setSubCate(res.data);
    }
    fetchSubCategories();
  }, [setSubCate])

  return (
    <Container>
      <Row className="justify-content-center">
        <Col md="8">
          <div className="mb-4 border-bottom">
            <p className="font-weight-bold">{getAccountTitle()}</p>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8" className="mb-4">
          <Overview
            sumThisMonth={sumThisMonth}
            yearMonth={yearMonth}
            showFixedCost={showFixedCost}
            setShowFixedCost={setShowFixedCost}
            showChart={showChart}
            setShowChart={setShowChart}
          />
          <FixedCostModal
            showFixedCost={showFixedCost}
            setShowFixedCost={setShowFixedCost}
            yearMonth={yearMonth}
            newItem={newItem}
            items={items}
            fetchItems={fetchItems}
          />
          <ChartModal
            items={items}
            showChart={showChart}
            setShowChart={setShowChart}
          />
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
            items={excludedItems}
            setItems={setItems}
            yearMonth={yearMonth}
            setYearMonth={setYearMonth}
            setShowItemForm={setShowItemForm}
            isMonthView={isMonthView}
          />
          <ItemModal
            isShown={isShown}
            showItemForm={showItemForm}
            setShowItemForm={setShowItemForm}
            closeModal={() => setModalState(false)}
            items={excludedItems}
            newItem={newItem}
            setNewItem={setNewItem}
            resetNewItem={resetNewItem}
            fetchItems={fetchItems}
            subCate={subCate}
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
