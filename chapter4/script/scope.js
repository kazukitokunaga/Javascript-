// 関数の外で定義しした変数は、グローバル変数となり、関数の中で宣言した変数は、ローカル変数となる。
var scope = 'Global Variable';

function getValue(){
  var scope = 'Local Variable';
  return scope;
};

console.log(getValue); // 結果：Local Variable
console.log(scope); // 結果：Global Variable