var count = 0;
var result = document.getElementById('result');

// カウントアップボタンをクリックした時に履歴を追加
document.getElementById('btn').addEventListener('click', function () {
  result.textContent = ++count;
  history.pushState(count, null, '/js/chapter7/count/' + count);
});

// 戻るボタンでページの状態を前に戻す
window.addEventListener('popstate', function (e) {
  count = e.state;
  result.textContent = count;
})