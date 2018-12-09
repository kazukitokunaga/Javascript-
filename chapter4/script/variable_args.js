// argumentsオブジェクトは、可変長引数の関数（引数の個数が予め決まっていない関数）という重要な機能がある。
function sum(){
  var result = 0;
  // 与えられた引数を順番に取り出し、順に加算処理
  for (var i = 0, len = arguments.length; i < len; i++){
    var tmp = arguments[i];
    if (typeof tmp !== 'number'){
      // 与えられた引数が数値でない場合はErrorオブジェクトを呼び出し元にスローして処理を中断。
      throw new Error('引数が数値ではありません：' + tmp);
    }
    result += tmp;
  }
  return result;
}

try {
  console.log(sum(1,3,5,7,9)); // 結果：25
} catch(e) {
  window.alert(e.message);
}