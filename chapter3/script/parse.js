// parseXxxxメソッドは、数値として解析できる部分を数値として取り込む。
// Number関数はこのような文字列混在の数値を解析できずNaNを返す。
var n = '123xxx';
console.log(Number(n)); // 結果：NaN
console.log(Number.parseFloat(n)); // 結果：123
console.log(Number.parseInt(n)); // 結果：123

// Dateオブジェクトが渡された場合、parseXxxxメソッドはこれを解析できずにNaNを返す。
// Number関数だけは「Dateオブジェクトを経過ミリ秒に換算した値」を数値として返す。
var n = Date();
console.log(Number(n)); // 結果：1465888682473
console.log(Number.parseFloat(n)); // 結果：NaN
console.log(Number.parseInt(n)); // 結果：NaN

// 16進数の整数リテラル「0x10」を解析した場合、parseIntメソッドとNumber 関数はこれを16進数とみなして「16」を返す。
// parseFloatメソッドでは、数値文字列混在の文字列とみなして、xより前の「0」を返す。
var n = '0x10';
console.log(Number(n)); // 結果：16
console.log(Number.parseFloat(n)); // 結果：0
console.log(Number.parseInt(n)); // 結果：16

// ただし、ES2015で導入された2進数、8進数は、現状Number関数以外では正しく認識できない。
var n = '0b11';
console.log(Number(n)); // 結果：3
console.log(Number.parseFloat(n)); // 結果：0
console.log(Number.parseInt(n)); // 結果：0

// 浮動小数点の指数表現「1.01e+2」を解析した場合、parseFloatメソッド/Number関数はこれを正しく解析するが、
// parseIntメソッドは末尾の文字列「e+2」をサプレス（削除）し、さらに小数点以下を切り捨てた「１」を返す。
var n = '1.01e+2';
console.log(Number(n)); // 結果：101
console.log(Number.parseFloat(n)); // 結果：101
console.log(Number.parseInt(n)); // 結果：1