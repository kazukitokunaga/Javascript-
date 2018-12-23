/*
 * プロトタイプチェーンの挙動
 * 「インスタンスが生成された時点で固定され、その後の変更にかかわらず保存される」
 */

var Animal = function () {};
Animal.prototype = {
  walk: function () {
    console.log('トコトコ...');
  }
};

var SuperAnimal = function () {};
SuperAnimal.prototype = {
  walk: function () {
    console.log('ダダダダダ！');
  }
};

var Dog = function(){};
Dog.prototype = new Animal(); // アニマルオブジェクトを継承

var d1 = new Dog();
d1.walk(); // 結果：トコトコ...

Dog.prototype = new SuperAnimal(); // SuperAnimalオブジェクトを継承

var d2 = new Dog();
d2.walk(); // 結果：ダダダダダ！

d1.walk(); // 結果：トコトコ...

/*
 * この結果からいえるのは、JavaScriptのプロトタイプチェーンは、
 * 「インスタンスが生成された時点で固定され、その後の変更にかかわらず保存される」
 * これは、「JavaScriptが動的な性質を持っている」と理解している人ほど間違えやすいポイント。
 */