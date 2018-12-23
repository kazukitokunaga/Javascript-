/*
 * 継承のしくみをJavaScriptの世界で実現するのはプロトタイプチェーン
 */
var Animal = function(){};

Animal.prototype = {
  walk: function(){
    console.log('トコトコ...');
  }
};

var Dog = function(){
  // 「Animalコンストラクターを現在のthisで呼び出しなさい」という意味。
  Animal.call(this);
};
// Dogオブジェクトのプロトタイプとして、Animalオブジェクトのインスタンスをセットしている。
Dog.prototype = new Animal();
Dog.prototype.bark = function () {
  console.log('ワンワン！');
}

var d = new Dog();
d.walk(); // 結果：トコトコ...
d.bark(); // 結果：ワンワン！