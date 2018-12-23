/*
 * extendsキーワードを利用すると、既存のクラス継承もシンプルに実装できる。
 */

class Member{
  // コンストラクター
  constructor(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
  }

  // メソッド
  getName(){
    return this.lastName + this.firstName;
  }
}

// Memberオブジェクトを継承したBusinessMemberクラスを定義
class BusinessMember extends Member {
  work(){
    return this.getName() + 'は働いています。';
  }
}

let bm = new BusinessMember('太郎', '山田');
console.log(bm.getName()); // 結果：山田太郎
console.log(bm.work()); // 結果：山田太郎は働いています。

