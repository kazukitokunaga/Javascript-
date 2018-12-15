// 関数から複数の値を返すには、配列/オブジェクトとして値を1つにまとめて返す必要がある。
function getMaxMin(...nums) {
  return [Math.max(...nums), Math.min(...nums)];
}
let result = getMaxMin(10, 35, -5, 78, 0);
console.log(result); // 結果：[78, -5]

let[max, min] = getMaxMin(10, 35, -5, 78, 0);
console.log(max); // 結果：78
console.log(min); // 結果：-5

// もし片方の値が不要な場合は、以下のようにすると値が切り捨てられる。
let[, min] = getMaxMin(10, 35, -5, 78, 0);
console.log(min); // 結果：-5