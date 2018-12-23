let member = {
  name: '山田太郎',
  birth: new Date(1970, 5, 25),
  // ES2015では、関数リテラルの構文もシンプルになった。
  toString(){
    return this.name + '／誕生日：' + this.birth.toLocaleDateString()
  }
};