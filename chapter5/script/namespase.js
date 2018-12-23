/* 名前空間（パッケージ）とは、クラスをまとめるための箱のようなもの。
 * JavaやC#のような言語では、このような名前空間（パッケージ）のしくみを標準で備えているが、残念ながらJavaScriptにはない。
 * そこで、JavaScriptでは、空のオブジェクトを利用して擬似的に「名前空間のようなもの」を作成する。
 */

// 名前空間を定義するためには、ただ単に「空のオブジェクトを生成する」だけ。
var Wings = Wings || {};

// 名前空間は以下のクラス（コンストラクター）を定義する。
Wings.Member = function (firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

Wings.Member.prototype = {
  getName : function () {
    return this.lastName + ' ' + this.firstName;
  }
};

// 名前空間は以下のクラスをインスタンス化する場合には、名前空間も含んだ名前（完全修飾名）としてクラス名を指定する必要がある。
var mem = Wings.Member('太郎', '山田');
console.log(mem.getName); // 結果：山田 太郎