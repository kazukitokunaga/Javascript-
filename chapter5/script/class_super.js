/*
 * 基底クラスで定義されたメソッド／コンストラクターは、サブクラスで上書きすることもできる。
 * これをメソッドのオーバーライドという。
 * オーバーライドとは、「基底クラスで定義された機能を派生クラスで再定義すること」。
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
  // 引数にclazz（役職）を追加
  constructor(firstName, lastName, clazz) {
    // superキーワードで基底クラスのメソッド／コンストラクターを参照。ただし、superキーワードは先頭の文でなければならない。
    super(firstName, lastName);
    this.clazz = clazz;
  }

  // 役職込みの名前を返すように修正
  getName(){
    return super.getName() + '／役職：' + this.clazz;
  }
}

let bm = new BusinessMember('太郎','山田','課長');
console.log(bm.getName()); // 結果：山田太郎／役職：課長
