const separate = num => {
  num = String(num);
  var len = num.length;
  if (len > 3) {
    return separate(num.substring(0, len - 3)) + ',' + num.substring(len - 3);
  } else {
    return num;
  }
}
