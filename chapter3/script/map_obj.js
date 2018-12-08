// オブジェクトの比較には要注意
var m = new Map();
m.set({}, 'hoge');
console.log(m.get({})); // 結果：undefined

/*
 * オブジェクトのような参照型を比較した場合には、参照での比較となるため、
 * 見た目が同じでも異なる場所で生成されたオブジェクトであれば異なるものとみなされる。
 * よって、上記のようなコードはundefinedとなる。
 */

 // なお、以下はオッケー
var key = {};
var m = new Map();
m.set(key, 'hoge');
console.log(m.get(key)); // 結果：hoge