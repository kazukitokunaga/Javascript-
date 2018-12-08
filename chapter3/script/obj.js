// 名前を持たないオブジェクト（匿名オブジェクト）
var obj = { x:1, y:2, z:3 };

// new演算子で明示的にObjectオブジェクトをインスタンス化して個々にプロパティを追加しても同じ意味となる。
var obj2 = new Object();
obj2.x = 1;
obj2.y = 2;
obj2.z = 3;

// 第１引数にObject.prototypeを渡しているのは、「Objectオブジェクトの機能を引き継いだオブジェクトを生成しなさい」という意味。
// Object.create(null);とすると、完全にからのオブジェクトを生成することもできる。
var obj3 = Object.create(Object.prototype, {
  x: { value: 1, writable: true, configurable: true, enumerable: true},
  y: { value: 2, writable: true, configurable: true, enumerable: true},
  z: { value: 3, writable: true, configurable: true, enumerable: true}
  }
);

for (var prop in obj3) {
   console.log(prop)
}