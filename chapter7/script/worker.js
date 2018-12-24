/*
 * ワーカーとは、バックグラウンドで動作するJavaScriptのコードのこと。
 * ワーカーはメインのJavaScriptコードとは別の.jsファイルとして準備する。
 */
// messageイベントは、メインスレッドからメッセージを受け取った（＝ワーカーを起動した）タイミングで発生する。
self.addEventListener('message', function (e) {
  var count = 0;
  // eのdataプロパティ経由で、メインスレッドからのパラメーターを受け取れる。
  for(var i = 1, len = e.data.target; i < len; i++){
    // ここでは、targetの範囲内で受け取ったデータのxの倍数がいくつあるかをカウントしている。
    if (i % e.data.x === 0){ count++ }
  }
  // 最後にpostMessageメソッドでメインスレッドに応答する
  postMessage(count);
});