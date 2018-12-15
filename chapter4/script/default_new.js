// 引数のデフォルト値を宣言するためには、「仮引数＝デフォルト値」の形式で仮引数を宣言するだけ。
function detTriangle(base = 1, height = 1){
  return base * height / 2;
}
console.log(getTriangle(5));


// 関数ブロックの先頭にif命令文がなくなり、関数の宣言部分にデフォルト値までまとまったことでコードがシンプルになった。
// デフォルト値にはリテラルだけではなく、ほかの引数、関数（式）の結果などを指定することもできる。
function multi(a, b = a){
  return a * b;
}
console.log(multi(10, 5)); // 結果：50
console.log(multi(3)); // 結果：9（引数bはaと同じ3）


// ただし、他の引数をデフォルト値とする場合、参照できるのは、自身より前に定義されたものだけである点に注意する。
function multi(a = b, b = 5){
  return a * b;
}
console.log(multi()); // 結果：ReferenceError: b is not defined

