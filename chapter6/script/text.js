/*
 * 要素配下のテキストを取得／設定するには、innerHTML／textContentというプロパティを利用する。
 * 以下は、指定されたテキスト（アンカータグ）を埋め込む例。
 */
document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('result_text').textContent = '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
  document.getElementById('result_html').innerHTML = '<a href="http://www.wings.msn.to/">WINGSプロジェクト</a>';
}, false)

/*
 * まず、いずれのプロパティにも共通している点は、「配下の子要素／テキストを完全に置き換える」という点。
 * 一方、決定的に異なる点は、「与えられたテキストをHTMLとして認識するかどうか」という点。
 * innerHTMLプロパティはHTMLとしてテキストを埋め込むので、リンクが有効になっているが、
 * 一方で、textContentプロパティはプレーンテキストとして埋め込むので、タグ文字列がそのまま表示されていることが確認できる。
 *
 * 一般的に、HTML文字列を埋め込むのでなければ、まずはtextContentプロパティを優先して利用するのがおすすめ。
 * テキスト解析が不要であるぶん高速で、かつ、セキュリティ上の問題も発生しにくいから。
 */