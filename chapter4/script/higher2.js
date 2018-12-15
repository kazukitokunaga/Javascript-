// 高階関数arrayWalkを定義
function arrayWalk(data, f){
  for (var key in data) {
    f(data[key], key);
  }
}

// 結果値を格納するためのグローバル変数
var result = 0;
// ユーザー定義関数は自由に差し替えられる。
function sumElement(value, key){
  // 与えられた配列要素で変数resultを加算
  result += value;
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(ary, sumElement);
console.log('合計値：' + result); // 結果：31