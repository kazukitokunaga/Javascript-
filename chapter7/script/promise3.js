/*
 * 複数の非同期処理を並行して実施する。
 */

// すべての非同期処理が成功した場合にコールバックするallメソッド
Promise.all([
  asyncProcess('トクジロウ'),
  asyncProcess('ニンザブロウ'),
  asyncProcess('リンリン')
]).then(
  response => {
    console.log(resuponse);
  },
  error => {
    console.log('エラー： ${error}');
  }
); // 結果：["入力値:トクジロウ", "入力値:ニンザブロウ", "入力値:リンリン"]