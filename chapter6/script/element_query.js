/*
 * querySelectAllメソッドは、
 * より複雑な条件での検索を可能にするのが、querySelector／querySelectorAllメソッド。
 * これらのメソッドを利用することで、セレクター式で文書を検索し、合致した要素を取得できる。
 */

// 「id="list"」である要素の配下から、「class="external"」であるアンカータグを取り出し、そのリンク先を列挙する。
var list = document.querySelectorAll('#list.external');
for (var i = 0, len = list.length; i < len; i++){
  console.log(list.item(i).href);
}
/* 結果：
 * http://www.buildinsider.net/web/jqueryref
 * http://www.buildinsider.net/web/angularjstips
 */
