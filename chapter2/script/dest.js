// 分割代入
let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, x3, x4, x5, x6, x7] = data;

console.log(x0); // 結果：56
console.log(x7); // 結果：99


// ...を利用することで、個々の変数に分解されなかった残りの要素を配列として切り出すことができる
let data = [56, 40, 26, 82, 19, 17, 73, 99];
let [x0, x1, x2, ...other] = data;

console.log(x0); // 結果：56
console.log(x1); // 結果：40
console.log(x2); // 結果：26
console.log(other); // 結果：[82, 19, 17, 73, 99]


// 変数の入れ替え
let x = 1;
let y = 2;
[x, y] = [y, x];

console.log(x, y); // 結果：2、1