// Animalクラスと、これを継承したHamsterクラスを準備
var Animal = function () {};
var Hamster = function(){};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();

/*
 * プロトタイプ継承している場合、constructorプロパティが示すものは、継承元のクラスとなる。
 */

console.log(a.constructor === Animal); // 結果：true
console.log(h.constructor === Animal); // 結果：true
console.log(h.constructor === Hamster); // 結果：false

/*
 * Hamsterクラスのインスタンスであるかどうかを確認するためには、instanceofプロパティで確認する必要がある。
 */

console.log(h instanceof Animal); // 結果：true
console.log(h instanceof Hamster); // 結果：true

/*
 * オブジェクトが参照しているプロトタイプを確認するためには、isPrototypeOfプロパティを使う。
 */

 console.log(Hamster.prototype.isPrototypeOf(h)); // 結果：true
 console.log(Animal.prototype.isPrototypeOf(h)); // 結果：true

/*
 * その時点での特定のメンバーを利用できるかどうかをチェックするには、in演算子を使う。
 */

var obj = { hoge:function(){}, foo:function(){} };
console.log('hoge' in obj); // 結果：true
console.log('piyo' in obj); // 結果：false

