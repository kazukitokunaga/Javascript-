var scope = 'Global Variable';
function getValue(){
  console.log(scope); // 結果：Undefined
  var scope = 'Local Variable';
}
/*
 * ローカル変数は「関数全体で有効」なので、上記のconsole.logを行った時点ですでにローカル変数（scope）が有効になっている。
 * つまり、ローカル変数が確保されているだけで、var命令は実行されていないことから、ローカル変数scopeの中身は未定義（Undefined）となる。
 * このような挙動を、変数の巻き上げ（hoisting）という。
 * このようなコードは思わぬ不具合の原因になるので、ローカル変数は関数の先頭で宣言するべき。
 */