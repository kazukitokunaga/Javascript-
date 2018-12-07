/*
 * sortメソッドは、デフォルトで配列を文字列として辞書順にソートする。
 * このルールを変更するには、引数として、以下のような関数を定義する。
 * ・引数は2つ（比較する配列要素）
 * ・第1引数が第2引数より小さい場合は負数、大きい場合は正数を返す。
 */

 var ary = [5,25,10];
 console.log(ary.sort()); // 結果：[10,25,5]（文字列としてsort）
 console.log(ary.sort(function(x,y){
   return x - y;
 })); // 結果：[5,10,25]（数値としてソート）

/*
 * また、以下のように、membersのclazzプロパティをキーに、あらかじめ用意しておいた配列classesを検索し、その登場位置で大小比較する。
 * このように、数値以外の値であっても大小比較できる形に変換できればソートは可能。
 */
 var classes = ['部長','課長','主任','担当'];
 var members = [
   {name: '鈴木清子', clazz: '主任'},
   {name: '山口久雄', clazz: '部長'},
   {name: '井上太郎', clazz: '担当'},
   {name: '和田知美', clazz: '課長'},
   {name: '小森雄太', clazz: '担当'},
 ];
 console.log(members.sort(function(x,y){
   return classes.indexOf(x.clazz) - classes.indexOf(y.clazz);
 }))
// 結果：
// [
//   {name: '山口久雄', clazz: '部長'},
//   {name: '和田知美', clazz: '課長'},
//   {name: '鈴木清子', clazz: '主任'},
//   {name: '井上太郎', clazz: '担当'},
//   {name: '小森雄太', clazz: '担当'},
// ]