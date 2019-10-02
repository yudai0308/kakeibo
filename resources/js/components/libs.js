export const separate = num => {
  let isPlus = true;
  if (num < 0) {
    isPlus = false;
    num = Math.abs(num);
  }
  num = String(num);
  let len = num.length;
  let val;
  if (len > 3) {
    val = separate(num.substring(0, len - 3)) + ',' + num.substring(len - 3);
  } else {
    val = num;
  }
  return isPlus ? val : `- ${val}`;
}
