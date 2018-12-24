document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('btn').addEventListener('click', function () {
    var result = document.getElementById('result');
    // 非同期通信を管理するのは、XMLHttpRequestオブジェクトの役割
    var xhr = new XMLHttpRequest();
    // onreadystatechangeプロパティは、通信の状態が変化したタイミングで呼び出されるイベントハンドラー。
    xhr.onreadystatechange = function () {
      /*
       * readyStateプロパティの戻り値
       * 0：未初期化（openメソッドが呼び出されていない）
       * 1：ロード中（openメソッドは呼び出されたが、sendメソッドは呼び出されていない）
       * 2：ロード済（sendメソッドは呼び出されたが、応答ステータス／ヘッダーは未取得）
       * 3：一部の応答を取得（応答ステータス／ヘッダーのみ取得、本体は未取得）
       * 4：すべての応答データを取得済み
       */
      if(xhr.readyState === 4){ // 通信が完了した時
        /*
         * statusプロパティの戻り値
         * 200：OK（処理成功）
         * 401：Unauthorized（認証が必要）
         * 403：Forbidden（アクセスを拒否された）
         * 404：Not Found（リクエストされたリソースが存在しない）
         * 500：Internal Server Error（内部サーバーエラー）
         * 503：Service Unavaliable（要求したサーバーが利用不可）
         */
        if(xhr.status === 200){ // 通信が成功した時
          result.textContent = xhr.responseText;
        }else{ // 通信が失敗した時
          result.textContent = 'サーバーエラーが発生しました。'
        }
      }else{ // 通信が完了する前
        result.textContent = '通信中...';
      }
    };
    // サーバーとの非同期通信を開始
    /*
     * openメソッド
     * xhr.open(method, url[,async [,user [,passwd]]])
     *  xhr：XMLHttpRequestオブジェクト
     *  method：HTTPメソッド（GET／POST／PUT／DELETEなど）
     *  url：アクセス先のURL
     *  async：非同期通信か（デフォルトはtrue）
     *  user：認証時のユーザー名
     *  passwd：認証時のパスワード
     */
    xhr.open('GET', 'hello_ajax.php?name=' + encodeURIComponent(document.getElementById('name').value), true);
    // sendメソッドは、GETリクエストの場合はnull。POSTリクエストの場合にのみ、要求本体を指定できる。
    xhr.send(null);
  }, false);
}, false);