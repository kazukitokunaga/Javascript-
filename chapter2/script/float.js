console.log(0.2 * 3); // 結果：0.600000000000001
// JavaScriptでは、2進数で計算しており、無限循環小数となるため、誤差が出る。

console.log(0.2 * 3 === 0.6); // 結果：false

console.log(((0.2 * 10) * 3) / 10); // 結果：0.6
console.log((0.2 * 10) * 3 === 0.6 * 10); // 結果：true

/*
 * 小数点を含む演算で厳密に結果を得る必要がある場合は、
 * １．値をいったん整数にしてから演算する。
 * ２．１．の結果を再び少数に戻す。
 *
 */
