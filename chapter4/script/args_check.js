/*
 * 「実際に与えられた引数の数と要求する引数の数を比較し、異なる場合にはエラーを返す」
 * lengthはargumentsオブジェクトのプロパティの1つで、実際に関数に渡された引数の個数を返す。
 */
function showMessage(value){
  if (arguments.length !== 1){
    // throwで例外を投げる
    throw new Error('引数の数が間違っています：' + arguments.length);
  }
  console.log(value);
}

try {
  showMessage('山田', '鈴木');
} catch(e) {
  // 例外が発生した場合はアラート表示
  window.alert(e.message);
}