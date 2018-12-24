/*
 * innerHTMLプロパティでは、コンテンツを文字列として操作する必要があるため、以下の問題がある。
 * ・コンテンツが複雑になった場合に、コードの見通しが悪くなる。
 * ・ユーザーからの入力値に基づいてコンテンツを作成した場合、任意のスクリプトを実行されてしまう可能性がある。
 *
 * 一方、下記の方法なら、これらの問題を解消できる。
 * ・オブジェクトツリーとして操作できるので、対象となるコンテンツが複雑になった場合にも、コードの可読性が劣化しにくい。
 * ・要素／属性とテキストとを区別して扱えるので、ユーザーからの入力によってスクリプトが混入するような危険は回避しやすい。
 */

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('cllick', function () {
    // テキストボックスを取得
    var name = document.getElementById('name');
    var url = document.getElementById('url');

    // <a>要素を生成
    var anchor = document.createElement('a');
    // <a>要素のhref属性を指定
    anchor.href = url.value;
    // テキストノードを生成し、<a>要素の直下に追加
    var text = document.createTextNode(name.value);
    // appendChildは現在の要素の最後の子要素として追加する。
    anchor.appendChild(text);
    // <br>要素を生成
    var br = document.createElement('br');
    // <div id="list">を取得
    var list = document.getElementById('list');
    // <div>要素の直下に<a>／<br>要素の順で追加
    list.appendChild(anchor);
    list.appendChild(br);
  }, false);
}, false);

/*
 * なお、属性ノードを追加するには、createAttributeNodeメソッドやsetAttributeメソッドを使う。
 * 子ノードを置き換えるのは、replaceChildメソッドを使う。
 *    elem.replaceChild(after, before)
 * ノードを削除するのは、removeChildメソッドを使う。
 * また、属性ノードを削除するには、removeAttributeメソッドを使う。
 */