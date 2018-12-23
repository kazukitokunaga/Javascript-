/*
 * Object.defineProperty(obj, prop, desc)
 *    obj：プロパティを定義するオブジェクト
 *    prop：プロパティ名
 *    desc：プロパティの構成情報
 *
 * definePropertyメソッドでは、引数descに対してget／setパラメータを指定することで、
 * ゲッター／セッターを定義できる。
 */
function Triangle() {
  // プライベート変数を宣言
  var _base;
  var _height;

  // baseプロパティを定義
  Object.defineProperty(
    this,
    'base',
    {
      get: function () {
        return _base;
      },
      set: function (base) {
        if(typeof tmp === 'number' && base > 0){
          _base = base;
        }
      }
    }
  );

  // heightプロパティを定義
  Object.defineProperty(
    this,
    'height',
    {
      get: function () {
        return _height;
      },
      set: function (height) {
        if(typeof height === 'number' && height > 0){
          _height = height;
        }
      }
    }
  );
};

Triangle.prototype.getArea = function () {
  return this.base * this.height / 2;
};

var t = new Triangle();
t.base = 10;
t.height = 2;
console.log('三角形の底辺：' + t.base); // 結果：10
console.log('三角形の高さ：' + t.height); // 結果：2
console.log('三角形の面積：' + t.getArea()); // 結果：10

/*
 * このように、Object.definePropertyメソッドを利用することで、
 * ゲッター／セッターをひとまとめのブロックで宣言できる。
 */