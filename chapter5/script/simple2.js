var Member = function(firstName, lastName){
  this.firstName = firstName;
  this.lastName = lastName;
  this.getName = function(){
    return this.lastName + '' + this.firstName;
  }
};

var mem = new Member('太郎', '山田');
console.log(mem.getName()); // 結果：山田　太郎

/*
 * thisキーワードはコンストラクターによって生成されるインスタンス（つまり自分自身）を表すもの。
 * なお、コンストラクター関数は戻り値を返してはいけない。
 * オブジェクトを生成すると言うと戻り値としてオブジェクトを返したくなるかもしれないが、
 * あくまでコンストラクターの役割は、「これから生成するオブジェクトを初期化する」のが目的なので、戻り値自体は不要。
 */