// 配列の要素を削除した場合、該当する要素が削除されるだけで、後ろの要素が繰り上がるわけではない。（インデックス番号は変わらない。）
var array = ['JavaScript', 'Ajax', 'ASP.NET'];
console.log(delete ary[0]); // 結果：true
console.log(ary); // 結果：[1: "Ajax", 2: "ASP.NET"]


// プロパティを削除した場合も、プロパティそのものが削除されるだけで、プロパティが参照するオブジェクトが削除されるわけではない。
var obj = {x:1, y:2};
console.log(delete obj.x); // 結果：ture
console.log(obj.x); // 結果：undefined

var obj2 = {x:obj, y:2};
console.log(delete obj2.x); // 結果：true
console.log(obj); // 結果：{y:2}


// 明示的に宣言された変数を削除する事はできない。
var data1 = 1;
console.log(delete data1); // 結果：false
console.log(data1); // 結果：1

data2 = 10;
console.log(delete data2); // 結果：true
console.log(data2); // 結果：エラー（data2は存在しない）


