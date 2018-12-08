/*
 * キューとは、先入れ先出し（FIFO）と呼ばれるデータ構造。
 * push/shiftメソッドで実装できる。
 */
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data.shift()); // 結果：１
console.log(data.shift()); // 結果：２
console.log(data.shift()); // 結果：３