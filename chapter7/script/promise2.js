/*
 * Promiseオブジェクトが真価を発揮するのは、複数の非同期処理を連結するような場合。
 */

// 初回のasyncProcess関数呼び出し
asyncProcess('トクジロウ')
.then(
  respons => {
    console.log(response);
    // 初回の実行に成功したら、２回目のasyncProcess関数を実行
    return asyncProcess('ニンサブロウ');
  }
)
.then(
  respons => {
    console.log(response);
  },
  error => {
    console.log('エラー： ${error}');
  }
);