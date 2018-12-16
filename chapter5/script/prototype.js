/*
 * コンストラクターによるメソッドの追加には、「メソッド数に比例して、無駄なメモリを消費する」という問題が有る。
 * そこで、JavaScriptでは、オブジェクトにメンバーを追加するために、prototypeというプロパティを用意している。
 * そして、このprototypeプロパティに格納されたメンバーは、インスタンス化された先のオブジェクトに引き継がれる、
 * もっといえば、そのクラス（コンストラクター）を元に生成されたすべてのインスタンスから利用できる。
 *
 * もう少し専門的な言い方をすると、
 * 「オブジェクトをインスタンス化した場合、インスタンスは元となるオブジェクトに属するprototypeオブジェクトに対して、暗黙的な参照を持つ」ことになる。
 */
var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function(){
  return this.lastName + '' + this.firstName;
};

var mem = new Member('太郎', '山田');
console.log(mem.getName()); // 結果：山田 太郎
