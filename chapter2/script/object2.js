// 入れ子となったオブジェクトを分解する
let book = { title:'Javaポケットリファレンス', publish: '技術評論社', price: 2680, other:{ keywd: 'Java SE8', logo:'logo.jpg' } };
let { title, other, other:{ keywd } } = book;

console.log(title); // Javaポケットリファレンス
console.log(other); // { keywd: 'Java SE8', logo:'logo.jpg' }
console.log(keywd); // Java SE8

 /*
 * 単にotherとした場合は、otherプロパティの内容（オブジェクト）がまとめて格納される。
 * other: { keywd }とした場合は、other-keywdプロパティの値が格納される。
 */