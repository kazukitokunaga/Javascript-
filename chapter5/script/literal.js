var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
};

Member.prototype.getName = function(){
  return this.lastName + '' + this.firstName;
};

Member.prototype.toString = function(){
  return this.lastName + '' + this.firstName;
};

// 上記のコードは以下のように書き換えることができる。
Member.prototype = {
  getName: function(){
    return this.lastName + '' + this.firstName;
  },
  toString: function(){
    return this.lastName + this.firstName;
  }
};

/*
 * 「Member.prototype.~」のような記述を最小限に抑えられる。
 * 結果、オブジェクト名に変更があった場合にも影響箇所を限定できる。
 * 同一オブジェクトのメンバー定義が1つのブロックに収められているため、コードの可読性が向上する。
 */