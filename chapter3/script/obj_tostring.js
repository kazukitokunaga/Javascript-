/*
 * toStringメソッドは、文字列を返す。
 * valueOfメソッドは、文字列以外の基本型の値が返されることを期待して使われる。
 */
var obj = new Object();
console.log(obj.toString()); // 結果： [object Object]
console.log(obj.valueOf()); // 結果： {}

var dat = new Date();
console.log(dat.toString()); // 結果：Sat Dec 08 2018 17:18:19 GMT+0900 (日本標準時)
console.log(dat.valueOf()); // 結果：1544257099137

var ary = ['prototype.js', 'jQuery', 'Yahoo! UI'];
console.log(ary.toString()); // 結果：prototype.js,jQuery,Yahoo! UI
console.log(ary.valueOf()); // 結果：(3) ["prototype.js", "jQuery", "Yahoo! UI"]

var num = 10;
console.log(num.toString()); // 結果：10
console.log(num.valueOf()); // 結果：10

var reg = /[0-9]{3}-[0-9]{4}/g;
console.log(reg.toString()); // 結果：/[0-9]{3}-[0-9]{4}/g
console.log(reg.valueOf()); // 結果：/[0-9]{3}-[0-9]{4}/g