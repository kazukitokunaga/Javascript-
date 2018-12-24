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

/* 結果：
 * トクジロウ
 * ニンサブロウ
 *
 * 初回の関数呼び出しで引数省略した場合は、最初の成功コールバックが省略されて、
 * ２番めのthenメソッドで用意された失敗コールバックが呼び出されるので、
 * 結果は以下の通りとなる。
 *
 * 結果：
 * エラー：入力は空です
 *
 * 次に、２回目の関数実行の際に引数省略した場合は、以下の結果となる。
 *
 * 結果：
 * トクジロウ
 * エラー：入力は空です
 *
 */