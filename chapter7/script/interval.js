document.addEventListener('DOMContentLoaded', function () {
  // タイマーを設置
  var timer = window.setInterval(
    // 現在の時刻を<div id='result'>要素に表示（5000ミリ秒ごとに更新）
    function () {
      var dat = new Date();
      document.getElementById('result').textContent = dat.toLocaleTimeString();
    }, 5000);

  // ボタンクリック時にタイマー処理を中止
  document.getElementById('btn').addEventListener('click', function () {
    window.clearInterval(timer);
  }, false);
}, false);

/*
 * setInterval：決められた時間間隔で繰り返し処理を実行する
 * setTimeout：指定された時間が経過したところで1回だけ処理を実行する
 *
 * 注意点：
 * １．引数funcに文字列を使わない。
 * ２．指定した時間（間隔）で実行される訳ではない。（キューに処理を登録するにすぎない。）
 * ３．引数durがゼロの場合（下記参照）
 */

function hoge() {
  console.log('あいうえお');
  setTimeout(function () {
    console.log('かきくけこ');
  }, 0)
  console.log('さしすせそ');
}
/*
 * 結果：
 * あいうえお
 * さしすせそ
 * かきくけこ
 *
 * 「さしすせそ」が「かきくけこ」より先に実行される。
 * これは、setTimeoutメソッドが与えられた処理をタイマーに引き渡している間に、
 * JavaScriptは後続のコードを実行するため。
 * このような処理を非同期処理という。
 */