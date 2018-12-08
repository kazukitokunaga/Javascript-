// Mapオブジェクトに値を追加
let m = new Map();
m.set('dog', 'ワンワン');
m.set('cat', 'ニャー');
m.set('mouse', 'チュー');

console.log(m.size); // 結果：3
console.log(m.get('dog')); // 結果：ワンワン
console.log(m.has('cat')); // 結果：true

// キーを順に取得
for (let key of m.keys()){
  console.log(key);
}
// 値を順に取得
for (let value of m.values()){
  console.log(value);
}
// キー／値を順に取得
for (let[key, value] of m){
  console.log(value);
}
// キーdogを削除
m.delete('dog');
console.log(m.size); // 結果：2
// 全てのキー／値を破棄
m.clear();
console.log(m.size); // 結果：0