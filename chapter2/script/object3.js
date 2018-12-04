// 変数の別名を指定する
let book = { title: 'Javaポケットリファレンス', publish: '技術評論社' };
let { title: name, publish: company } = book;

console.log(name); // 結果：ポケットリファレンス
console.log(company); // 結果：技術評論社

/*
 * 「変数名：別名」の形式で、プロパティとは異なる名前の変数に値を割り当てることができる。
 */