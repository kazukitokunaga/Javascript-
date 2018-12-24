document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('fm').addEventListener('submit', function (e) {
    /* confirmメソッドは押されたボタンに応じて以下の戻り値を返す
     * OKボタン：true、キャンセルボタン：false
     */
    if(!window.confirm('ページを送信しても良いですか？')){
      // キャンセルボタンが押された時に、preventDefaultメソッドを呼び出して、本来のサブミットイベントをキャンセルしている。
      e.preventDefault();
    }
  }, false)
}, false);