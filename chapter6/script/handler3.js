/*
 * イベントハンドラーは、同一の要素／同一のイベントに対して、複数のイベントハンドラーを紐付けられない
 * そこで、イベントリスナーを使うと「同一要素の同一イベントに対して複数紐付けられる。
 */
// ページロード時に実行されるイベントリスナー
document.addEventListener('DOMContentLoaded', function () {
  // ボタン（btn）クリック時に実行されるイベントリスナーを登録
  document.getElementById('btn').addEventListener('click', function () {
    window.alert('ボタンがクリックされました。');
  }, false);
}, false);