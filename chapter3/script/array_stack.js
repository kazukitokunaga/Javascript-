/*
 * スタックとは後入れ先出し（LIFO）、または、先入れ後出し（FILO）と呼ばれるデータ構造。
 * push/popメソッドで実装できる。
 */
var data = [];
data.push(1);
data.push(2);
data.push(3);
console.log(data.pop()); // 結果：3
console.log(data.pop()); // 結果：2
console.log(data.pop()); // 結果：1