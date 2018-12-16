function hoge(){
  var args = Array.prototype.slice.call(arguments);
  console.log(args.join('/'));
}

hoge('Angular', 'React', 'Backbone'); // 結果：Angular/React/Backbone

/*
 * この例であれば、「atgumentsオブジェクトをthisとして、Array.sliceオブジェクトを呼び出しなさい」という意味になる。
 * なお、prototypeは「Arrayオブジェクト配下のメンバーを示すためのプロパティ」。
 * sliceメソッドは、引数を指定しない場合は元の配列をそのまま帰すため、argumentsオブジェクトの内容が配列として得られる。
 * callメソッドは、関数オブジェクト配下のthisが示すオブジェクトを切り替えることができる。
 */