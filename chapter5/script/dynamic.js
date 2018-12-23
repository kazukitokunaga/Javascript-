var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('太郎', '山田');
mem.getName = function(){
  return this.lastName + this.firstName;
}

console.log(mem.getName()); // 結果：山田　太郎

/*
 * なお、以下のように、新たに生成したインスタンスmem2から、動的に追加したgetNameメソッドを呼び出そうとするとエラーになる。
 * これは、memでは、「生成されたインスタンスに対してメソッドが追加されている」ということで、
 * 同一のクラスを元に生成されたインスタンスであっても、
 * それぞれが持つメンバーは同一であるとは限らないということ。
 */
var mem2 = new Member('奈美', '掛谷');
console.log(mem2.getName()); // 結果；エラー（mem2.getName is not a function）
