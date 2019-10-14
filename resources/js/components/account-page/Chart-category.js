import React from 'react';
import {
  PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer,
} from 'recharts';

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

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];
  const data = aggregateDataBy("sub_category");

  return (
    <ResponsiveContainer width="100%" height={400}>
      <PieChart>
        <Pie
          dataKey="value"
          data={data}
          outerRadius={120}
          fill="#8884d8"
          label
        >
          {
            data.map((entry, index) => {
              return <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
            })
          }
        </Pie>
        <Tooltip />
      </PieChart>
    </ResponsiveContainer>
  );
}

export default CategoryChart;
