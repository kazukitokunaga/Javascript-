var Member = function(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
};

var mem = new Member('太郎', '山田');

// インスタンス化の後にメソッドを追加
Member.prototype.getName = function () {
  return this.lastName + '' + this.firstName;
};

console.log(mem.getName()); // 結果：山田 太郎
