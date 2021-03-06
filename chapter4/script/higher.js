/* 「JavaScriptの関数はデータ型の一種」で、関数そのものもまた、
 *  ほかの数値型や文字列型などと同様、関数の引数として引き渡したり、戻り値として返したりすることができる。
 *  そのように、「関数を引数、戻り値として扱う関数」のことを高階関数と呼ぶ。
 */

 // 高階関数arrayWalkを定義
function arrayWalk(data, f){
  for (var key in data){
    f(data[key], key);
  }
}

// 配列を処理するためのユーザー定義関数
function showElement(value, key){
  console.log(key + ':' + value);
}

var ary = [1, 2, 4, 8, 16];
// 下記のshowElementのように、呼び出し先の関数の中で呼び出される関数のことをコールバック関数（後で呼び出される（＝コールバックされる）という意味）という。
arrayWalk(ary, showElement);

// 0:1
// 1:2
// 2:4
// 3:8
// 4:16

/*
 * ユーザー定義関数fは、引数として配列の値（仮引数value）、キー名（仮引数key）を受け取り、
 * 与えられた配列要素に対して任意の処理を行うものとする。
 * ここで引数fに渡されているのは、showElement関数で、与えられた引数に基づいて「キー：値」のような形式でログを出力する。
 * 結果としてarrayWalk関数はそれ全体として、配列内のキー名と値をリスト形式で出力することになる。
 */