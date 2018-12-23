var current = new Date();
// getElementByIdメソッドは、指定されたidを持つ要素をElementオブジェクトとして返す。
var result = document.getElementById('result');
// 取得した要素（Elementオブジェクト）にテキストを埋め込むには、textContentというプロパティを利用する。
result.textContent = current.toLocaleString();