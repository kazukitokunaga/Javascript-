/*
 * getElementByTagNameメソッドの戻り値は、HTMLCollectionオブジェクト（要素の集合）。
 * 「要素ノード.属性」でアクセスできる。
 */

// ページ内の全てのアンカータグを取得
var list = document.getElementsByName('a');

// リスト（HTMLCollectionオブジェクト）から順にアンカータグを取り出し、そのhref属性をログに出力
for (var i = 0, len = list.length; i < len; i++) {
  console.log(list.item(i).href);
}
/* 結果：
 * http://www.wings.msn.to/
 * http://www.web-deli.com/
 * http://www.buildinsider.net/web/jqueryref
 */
