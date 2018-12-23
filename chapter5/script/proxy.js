/*
 * Proxyは、たとえば、プロパティの設定／取得／削除、for...of／for...in命令による列挙といった、
 * オブジェクトの基本的な動作を、アプリ独自の動作に差し替えるためのオブジェクト。
 * Proxyを利用することで、たとえば「オブジェクトを操作したタイミングでログを出力する」
 * 「プロパティ値の設定／取得に際して、値検証／変換などの付随処理を実装する」といった処理を、
 * 既存のオブジェクトに手を加えずに実装できる。
 *
 * 具体例として、以下は存在しないプロパティに対してデフォルト値として「？」を返す例。
 */
let data = { red: '赤色', yellow: '黄色' };
var proxy = new Proxy(data, {
  // getメソッドを実装して、ターゲット（target）のプロパティ（prop）が存在していればその値（target[prop]）を、
  // そうでなければ、デフォルト値として？を返す。
  get(target, prop){
    return prop in target ? target[prop] : '?';
  }
});

console.log(proxy.red); // 結果：赤色
console.log(proxy.nothing); // 結果： ?

/*
 * Proxyコンストラクターの構文は以下の通り。
 *
 * new Proxy(target, handler)
 *  target: 操作を差し挟む対象となるオブジェクト（ターゲット）
 *  handler: ターゲットの操作を定義するためのオブジェクト（ハンドラー）
 *
 * Proxyオブジェクトの世界では、操作を差し挟むオブジェクトをターゲット、
 * ターゲットに対する操作を表すオブジェクトをハンドラーという。
 * ハンドラーメソッドのことをトラップともいう。
 */

// プロキシーに対する操作は、ターゲットにもそのまま反映される。
proxy.red = 'レッド';
console.log(data.red); // 結果：レッド
console.log(proxy.red); // 結果：レッド

