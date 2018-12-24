/*
 * getElementsByClassNameメソッドを利用すれば、class属性をキーに要素郡（HTMLCollection）を取得する事もできる。
 */

// 「class="my"」である要素を取得
var list = document.getElementsByClassName('my');
// リストから順にアンカータグを取得し、そのhref属性をログに出力
for (var i = 0, len = list.length; i < len; i++){
  console.log(list.item(i).href);
}
/* 結果：
 * http://www.wings.msn.to/
 * http://www.web-deli.com/
 */