// asyncProcess関数は戻り値としてPromiseを返す
function asyncProcess(value){
  // Promiseは、非同期処理の状態を監視するためのオブジェクトで、コンストラクターには実行すべき非同期処理を関数リテラル、またはアロー関数として記述する。
  /*
   * Promiseオブジェクト
   * new Promise((resolve, reject) => { statements })
   *  resolve：処理の成功を通知するための関数
   *  reject：処理の失敗を通知するための関数
   *  statements：処理本体
   */
  return new Promise((resolve, reject) =>{
    // この例ではsetTimeoutメソッドを使っているが、非同期処理を行うならXMLHttpRequestオブジェクトを呼び出すことになる。
    setTimeout(() => {
      // 引数valueが未定義であるかどうかによって成否を判定
      if(value){
        // 引数がundefinedでなければresolve関数を返す
        resolve('入力値： ${value}');
      }else{
        // 引数がundefinedの場合はreject関数を返す
        reject('入力は空です');
      }
    }, 500);
  });
}

/*
 * thenメソッド
 * promise.then(success, failure)
 *  promise：Promiseオブジェクト
 *  success：成功コールバック関数（resolve関数によって呼び出し）
 *  failure：失敗コールバック関数（reject関数によって呼び出し）
 */
asyncxProcess('トウジロウ').then(
  // 成功した時に実行される処理（Promiseのresolve関数で指定された引数を受け取る）
  response => {
    console.log(response);
  },
  // 失敗した時に実行される処理（Promiseのreject関数で指定された引数を受け取る）
  error => {
    console.log('エラー： ${error}');
  }
); // 結果：入力値：トウジロウ