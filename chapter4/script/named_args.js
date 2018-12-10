/*
 * 名前付き引数
 * getTriangle({ base:5, height:4 })
 * ・引数が多くなっても、コードの意味が分かりやすい
 * ・省略可能な引数をスマートに表現できる
 * ・引数の順番を自由に変更できる
 */

function getTriangle(args){
  if (args.base === undefined){ args.base = 1; }
  if (args.height === undefined){ args.height = 1; }
  return args.base * args.height / 2;
}

console.log(getTriangle({ base:5, height:4 }));
// 結果：10

/*
 * 名前付き引数といってもなんら難しいものではなく、引数をオブジェクトリテラル（ここでは仮引数args）で受け取っているだけ。
 * そして、予備脱脂のタイミングでも引数を「{...}」と表現しているのは、オブジェクトリテラルを表しているため。
 */