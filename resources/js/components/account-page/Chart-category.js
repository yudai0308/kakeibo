import React from 'react';
import {
  PieChart, Pie, Cell, Label, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';
import { separate } from "../libs";

function CategoryChart({ items }) {
  // グループ化されている items を配列に戻す
  const alignItems = (items, key) => {
    let alignedItems = [];
    for (const k in items) {
      const itemHashes = items[k]
      for (let hash of itemHashes) {
        hash[key] = k;
        alignedItems.push(hash);
      }
    }
    return alignedItems;
  }
  // 指定された key でグルーピングする
  const groupBy = (items, key) => {
    let groupedHash = {};
    for (let itemHash of items) {
      const group = itemHash[key];
      const groups = Object.keys(groupedHash);
      if (groups.includes(group)) {
        groupedHash[group].push(itemHash);
      } else {
        groupedHash[group] = [itemHash];
      }
    }
    return groupedHash;
  }
  // 指定したキーの値を合計する
  const sumUpByKey = (items, key) => {
    let sum = 0;
    for (const item of items) {
      sum += item[key];
    }
    return sum;
  }
  const aggregateDataBy = key => {
    const itemsArr = alignItems(items, "date");
    const groupedItems = groupBy(itemsArr, key);
    const aggregationData = [];
    for (const groupName in groupedItems) {
      const groupedItemsArr = groupedItems[groupName];
      if (groupedItemsArr[0].isIncome) continue;
      const sum = sumUpByKey(groupedItemsArr, "amount");
      const data = {
        name: groupName,
        value: sum,
      }
      aggregationData.push(data);
    }
    return aggregationData;
  }
  const sumUpExpenses = items => {
    const itemsArr = alignItems(items);
    let sum = 0;
    for (let item of itemsArr) {
      if (item.isIncome) continue;
      sum += item.amount;
    }
    return sum;
  }
  const displayExpensesTotal = items => {
    const sum = sumUpExpenses(items);
    const separated = separate(sum);
    return `¥ ${separated}`;
  }

  const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042", "#9b59b6"];
  const data = aggregateDataBy("sub_category");

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          innerRadius={90}
          outerRadius={120}
          paddingAngle={3}
          fill="#8884d8"
          label
        >
          {
            data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            })
          }
          <Label value={displayExpensesTotal(items)} position="center" fill="#6c757d" />
        </Pie>
        <Legend />
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CategoryChart;
