var Mumber = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

var m = Member('権兵衛', '佐藤');
console.log(m); // 結果：undefined
console.log(firstName); // 結果：権兵衛
console.log(m.firstName); // 結果：エラー（Cannot read property 'firstName of undefined'）

/*
 * この場合、Memberオブジェクトは生成されずに、代わりにグローバル変数としてfirstName/lastNameが生成されてしまう。
 * （thisがグローバルオブジェクトを示すから。）
 * 以下のようにすると、コンストラクターの関数呼び出しを防ぐことができる。
 */
var Mumber = function(firstName, lastName){
  // コンストラクターが普通に関数として呼び出された場合（thisはMemberオブジェクトではなく、グローバルオブジェクトを示すはず）
  if(!(this instanceof Member)){
    return new Member(firstName, lastName);
  }
  this.firstName = firstName;
  this.lastName = lastName;
};
