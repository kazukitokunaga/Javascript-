document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function () {
    // ワーカーを呼び出すには、Workerオブジェクトを利用する。
    var worker = new Worker('script/worker.js')

    // あとは、ワーカーにメッセージを送信するだけで、マルチスレッド処理ができる。
    worker.postMessage({
      'target': document.getElementById('target').value,
      'x': document.getElementById('x').value
    });
    document.getElementById('result').textContent = '計算中...';

    // messageイベントでワーカーからの結果を処理する。戻り値はdataプロパティでアクセスできる。
    worker.addEventListener('message', function (e) {
      document.getElementById('result').textContent = e.data;
    }, false);

    // ワーカーのエラー処理
    worker.addEventListener('error', function (e) {
      document.getElementById('result').textContent = e.message;
    }, false);
  }, false);
}, false);