/*
 * ローカル変数を参照している関数内関数のことを「クロージャ」という。
 */
function closure(init){
  var counter = init;

  return function(){
    return ++counter;
  }
}

var myClosure = closure(1);
console.log(myClosure); // 結果：2
console.log(myClosure); // 結果：3
console.log(myClosure); // 結果：4

/*
 * 一見すると「初期値として引数initを受け取り、それをインクリメントした結果を戻り値として返している」ように見える。
 * しかし、よく見ると、戻り値は（数値ではなく）「数値をインクリメントするための匿名関数である」ことが分かる。
 * このように、引数や戻り値が関数である関数のことを「高階関数」という（ここまでは復習）。
 *
 * さて、このように関数の中で入れ子になった関数が戻り値として返されると、どのようなことが起こるのか、ここからがクロージャの仕組み。
 *
 * 通常、関数の中で使われたローカル変数（ここでは、変数counter）は、関数の処理が終了した時点で破棄されるはず。
 * しかし、このケースでは、closure関数から返された「匿名関数がローカル関数counterを参照し続けている」ので、closure関数の終了後もローカル変数counterは保持され続ける。
 *
 * つまり、変数myClosureは、ローカル関数counterをインクリメントする匿名関数が格納されており、
 * ローカル変数counterも一緒に引っ張ってくるため、データの保存場所（記憶域）を持った関数となる。
 */


// クロージャをくくっている親関数（=コンストラクター）
function closure(init){
  // クロージャから参照されるローカル変数（=プロパティ）
  var counter = init;

  // クロージャ（メソッド）
  return function(){
    return ++counter;
  }
}

// 関数呼び出し（=インスタンス化）、myClosure1（=インスタンス）
var myClosure1 = closure(1);
var myClosure2 = closure(100);
console.log(myClosure1); // 結果：2
console.log(myClosure2); // 結果：101
console.log(myClosure1); // 結果：3
console.log(myClosure2); // 結果：102