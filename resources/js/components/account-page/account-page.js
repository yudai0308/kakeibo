import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { Container, Row, Col, Modal } from "react-bootstrap";
import MyCalendar from "./Calendar";
import Overview from "./Overview";
import FixedCostForm from "./fixed-cost/Fixed-cost-form"
import FixedCostModal from "./fixed-cost/Fixed-cost-modal"
import CategoryChart from "./charts/Chart-category";
import MemberChart from "./charts/Chart-member";
import ItemModal from "./items/Item-modal"
import { axios } from "../../axios";
import { networkInterfaces } from "os";

function AccountPage() {
  const [viewType, setViewType] = useState(1);
  const [isShown, setModalState] = useState(false);
  const [showItemForm, setShowItemForm] = useState(false);
  const [showFixedCost, setShowFixedCost] = useState(false);
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
      for (const date in items) {
        for (const index in items[date]) {
          const item = items[date][index];
          if (item.isIncome) {
            sum += item.amount;
          } else {
            sum -= item.amount;
          }
        }
      }
      setSumThisMonth(sum);
    } else {
      setSumThisMonth(null);
    }
  }

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
            viewType={viewType}
            setViewType={setViewType}
            sumThisMonth={sumThisMonth}
            yearMonth={yearMonth}
            showFixedCost={showFixedCost}
            setShowFixedCost={setShowFixedCost}
          />
          <FixedCostModal
            showFixedCost={showFixedCost}
            setShowFixedCost={setShowFixedCost}
          />
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col md="8">
          {
            viewType === 1 &&
            <MyCalendar
              showModal={() => setModalState(true)}
              fetchItems={fetchItems}
              updateYearMonth={updateYearMonth}
              newItem={newItem}
              setNewItem={setNewItem}
              items={items}
              setItems={setItems}
              yearMonth={yearMonth}
              setYearMonth={setYearMonth}
              setShowItemForm={setShowItemForm}
              isMonthView={isMonthView}
            />
          }
          {
            viewType === 2 &&
            <FixedCostForm />
          }
          {
            viewType === 3 &&
            <CategoryChart items={items} />
          }
          {
            viewType === 4 &&
            <MemberChart />
          }
          <ItemModal
            isShown={isShown}
            showItemForm={showItemForm}
            setShowItemForm={setShowItemForm}
            closeModal={() => setModalState(false)}
            items={items}
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
