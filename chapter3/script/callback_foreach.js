var data = [2,3,4,5];
data.forEach(function(value,index,array){
  console.log(value * value); // 結果：４，９，16、25
});

/*
 * forEachメソッドでは、配列の要素を順番に取り出して、ユーザー定義関数callbackに渡していく
 * 渡された値を関数callbackが処理する。
 * 配列の情報を受け取れるように、以下の引数を指定しておく必要がある。
 * 第1引数value：要素の値
 * 第2引数index：インデックス番号
 * 第3引数array：元の配列
 *
 * ※上記では、引数indexとarrayは使用していないので省略しても構わない。
 */