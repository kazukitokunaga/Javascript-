var data = [2,3,4,5];
var result = data.map(function(value, indedx, array){
  return value * value;
});
console.log(result); // 結果：[4,9,16,25]

/*
 * 上記は、配列内の要素を2乗した結果を新たな配列として取得している。
 * 加工した結果をコールバック関数の戻り値として返している。
 * mapメソッドでは、関数callbackからの戻り値をまとめて新たな配列を作成している。
 */