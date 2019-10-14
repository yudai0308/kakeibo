import { separate } from "./libs";

/**
 * グループ化されている items を配列に戻す
 */
export const alignItems = (items, key) => {
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

/**
 * 指定された key でグルーピングする
 */
export const groupBy = (items, key) => {
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

/**
 * 指定したキーの値を合計する
 */
export const sumUpByKey = (items, key) => {
  let sum = 0;
  for (const item of items) {
    sum += item[key];
  }
  return sum;
}

/**
 * 指定したキーの値を合計してグラフ表示用にフォーマットする
 */
export const aggregateDataBy = (items, key) => {
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

/**
 * 費用を合計する
 */
export const sumUpExpenses = items => {
  const itemsArr = alignItems(items);
  let sum = 0;
  for (let item of itemsArr) {
    if (item.isIncome) continue;
    sum += item.amount;
  }
  return sum;
}

/**
 * 金額を表示用にフォーマットする
 */
export const displayExpensesTotal = items => {
  const sum = sumUpExpenses(items);
  const separated = separate(sum);
  return `¥ ${separated}`;
}
