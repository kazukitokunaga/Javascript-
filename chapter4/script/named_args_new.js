function getTriangle({ base = 1, height = 1 }) {
  return base * height / 2;
}
console.log(getTriangle({ base: 5, height: 4 })); // 結果：10
/*
 * 実引数（名前付き引数）をオブジェクトリテラル({...})で渡す点は変わらない。
 * 変化したのは仮引数で、このように（{プロパティ名 = デフォルト値, ...}）宣言することで、
 * オブジェクトとして渡された引数を分解して、関数の配下では個別の引数としてアクセスできる。
 */