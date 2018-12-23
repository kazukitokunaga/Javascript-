/*
 * モジュールは1つのファイルとして定義するのが基本。
 * モジュールとして外部からアクセスできるメンバーにはexportキーワードを付与する。
 * モジュール内のメンバーはデフォルトで非公開になる。
 */

const AUTHOR = 'YAMADA, Yoshihiro';

export class Member{
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

export class Area{
  static getTriangle(base, height){
    return base * height / 2;
  }
}