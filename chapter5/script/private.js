function Triangle() {
  /*
  * プライベートメンバーはコンストラクター関数で定義する。
  * プライベートメンバーは、var命令で宣言する。
  */

  // プライベートプロパティの定義（底辺／高さを保持）
  var _base;
  var _height;
  // プライベートメソッドの定義（引数が正の数値であるかをチェック）
  var _checkArgs = function (val) {
    return (typeof val === 'number' && val > 0);
  }

  /*
   * プライベートメンバーにアクセスできるメソッドのことを特権メソッド（プリビレッジメソッド）という。
   * 特権メソッドは、コンストラクターの中で入れ子に定義された関数、つまり、クロージャとなっている。
   */

  // プライベートメンバーにアクセスするためのメソッドを定義
  this.setBase = function (base) {
    if (_checkArgs(base)) { _base = base; }
  }
  this.getBase = function(){ return _base; }

  this.setHeight = function (height) {
    if (_checkArgs(height)) { _height = height; }
  }
  this.getHeight = function () { return _height; }
}

// プライベートメンバーにアクセスしない普通のメソッドを定義
Triangle.prototype.getArea = function () {
  return this.getBase() * this.getHeight() / 2;
}

/*
 * プライベートメンバーに外部から直接アクセスしようとしても、値がセットできていないことが確認できる。
 */
var t = new Triangle();
t._base = 10;
t._height = 2;
console.log('三角形の面積：' + t.getArea()); // 結果：NaN

t.setBase(10);
t.setHeight(2);
console.log('三角形の底辺：' + t.getBase()); // 結果：10
console.log('三角形の高さ：' + t.getHeight()); // 結果：2
console.log('三角形の面積：' + t.getArea()); // 結果：10