// Animalクラスと、これを継承したHamsterクラスを準備
var Animal = function () {};
var Hamster = function(){};
Hamster.prototype = new Animal();

var a = new Animal();
var h = new Hamster();
console.log(a.constructor === Animal); // 結果：true
console.log(h.constructor === Animal); // 結果：true
console.log(h.constructor === Hamster); // 結果：false

/*
 * プロトタイプ継承している場合、constructorプロパティが示すものは、継承元のクラスとなる。
 * よって、Hamsterクラスのインスタンスであるかどうかを確認するためには、instanceofプロパティで確認する必要がある。
 */