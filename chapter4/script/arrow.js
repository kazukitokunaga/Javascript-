/*
 * アロー関数（Arrow Function）を利用することで、
 * 関数リテラルをよりシンプルに記述することができる。
 */
let getTriangle = (base, height) => {
  return base * height / 2;
}

console.log('三角形の面積：' + getTriangle(5,2)); // 結果：５

/*
 * 本体が１文である場合は、ブロックを表す｛｝は省略できる。
 * また、文の戻り値がそのまま戻り値とみなされるので、return命令も省略できる。
 */
let getTriangle = (base, height) => base * height / 2;

/*
 * さらに、引数が１個の場合は、引数をくくるカッコも省略できる。
 */
let getCircle = radius => radius * radius * Math.PI;

/*
 * ただし、引数がない場合は、カッコを省略することが出来ない。
 */
let show = () => console.log;

/*
 * なお、上記のような構文の違いのほか、アロー関数では（関数リテラルにはない）「thisの固定」という機能がある。
 */