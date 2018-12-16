/*
 * thisキーワードの参照先は、以下の条件で変化する。
 * トップレベル（関数の外）：グローバルオブジェクト
 * 関数：グローバルオブジェクト（Strictモードではundefined）
 * call/applyメソッド：引数で指定されたオブジェクト
 * イベントリスナー；イベントの発生元
 * コンストラクター；生成したインスタンス
 * メソッド：呼び出し元のオブジェクト（=レシーバーオブジェクト）
 *
 * ここでは、call/applyメソッドについて取り扱う。
 */

/*
 * call/applyメソッドは、いずれも関数（Functionオブジェクト）が提供するメンバーで、その関数を呼び出す。
 * 違いは、実行すべき関数funcに渡す引数の指定方法だけ。
 * callメソッドは個々の値で指定するのに対して、applyメソッドは配列として渡す。
 *
 * func.call(that [,arg1 [,arg2 [,...]]])
 * func.apply(that [,args])
 *
 * func：関数オブジェクト
 * that：関数の中でthisキーワードが示すもの
 * arg1arg2...：関数に渡す引数
 * args：関数に渡す引数（配列）
 */

var data = 'Global data';
var obj1 = { data: 'obj1 data' };
var obj2 = { data: 'obj2 data' };

function hoge(){
  console.log(this.data);
}

hoge.call(null); // 結果：Global data
hoge.call(obj1); // 結果：obj1 data
hoge.call(obj2); // 結果：obj2 data

/*
 * 引数thatにそれぞれ異なるオブジェクトを渡すことで、hoge関数配下のthisの内容（ここでは出力されるthis.xの値）が変化していることが確認できる。
 * なお、引数thatにnullを渡した場合は、暗黙的にグローバルオブジェクトが渡されたものとみなされる。
 */