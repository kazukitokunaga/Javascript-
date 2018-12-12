/*
 * 匿名関数は、高階関数と密接な関係を持っている
 * というのは、高階関数は、引数として与えられる関数が「その場限り」でしか利用されないことがよくあるから。
 * このような「使い捨て関数」は、あえて名前付きの関数として定義するよりも、
 * 匿名関数（関数リテラル）として記述した方がコードがシンプルになる。
 */

// 高階関数arrayWalkを定義
function arrayWalk(data, f){
  for (var key in data){
      f(data[key], key);
  }
}

var ary = [1, 2, 4, 8, 16];
arrayWalk(
  ary,
  function (value, key){
    console.log(key + ':' + value);
  }
);
// higher.jsでは、arrayWalk(ary, showElement)として、showElementという名前付き関数を宣言していた。

