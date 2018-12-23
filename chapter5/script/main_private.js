import MyApp from './lib/MyApp';

let app = MyApp('secret string');

// for...in命令でも列挙できない
for (let key in app){
  console.log(key);
} // 結果：hoge、foo

// JSON文字列に変換してもプロパティは見えない
console.log(JSON.stringify(app)); // 結果： {"hoge":"hoge", "foo":"foo"}

// メソッド経由ではSECRET_VALUEプロパティにアクセスできる
console.log(app.checkValue('secret string')); // 結果：true

/*
 * シンボルで定義されたプロパティが完全に隠蔽できるわけではない。
 * Object.getOwnPropertySymbolsメソッドを使用すれば、シンボルプロパティにアクセスすることは可能。
 */