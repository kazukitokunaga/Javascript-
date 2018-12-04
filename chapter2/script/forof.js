var data = ['apple', 'orange', 'banana'];
Array.prototype.hoge = function(){}
for(var value of data){
  console.log(value);
} // 結果：「apple」「orange」「banana」を順に出力

/* for...in命令では、オブジェクトと配列は違う書き方をしなければならなかったが、
 * for...of命令を使うと、配列もオブジェクトのような書き方ができる。
 */