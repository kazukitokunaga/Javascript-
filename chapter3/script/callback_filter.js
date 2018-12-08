var data = [4,9,16,25];
var result = data.filter(function(value, index, array){
  return value % 2 === 1;
});
console.log(result); // 結果：[9,25]

/*
 * filterメソッドは、指定された関数で個々の要素を判定し、条件に合致した要素だけを取り出す。
 * 上記は、2で除して余りが1であれば奇数という考えで、関数callbackがtrueを返した場合だけ、
 * その時の要素を結果配列に書き戻すのがfilterメソッドの役割。
 */