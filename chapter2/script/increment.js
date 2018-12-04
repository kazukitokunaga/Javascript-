/* 演算子（= , - 等）
 * 演算子によって処理される変数/リテラルのことを「オペランド（被演算子）」と呼ぶ。
 *
 * インクリメント/デクリメント演算子は、オペランドに対して１を加算/減算する。
 */
var x = 3;
var y = x++;
console.log(x); // ①結果：４
console.log(y); // ①結果：３
// ①では、変数xを変数yに代入してから、変数xをインクリメントする。（＝前置演算（Pre Increment））

var x = 3;
var y = ++x;
console.log(x); // ②結果：4
console.log(y); // ③結果：4
// ②では、変数xをインクリメントしてから、その結果を変数yに代入している。（=後置演算（Post Increment））