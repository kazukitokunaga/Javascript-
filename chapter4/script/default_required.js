/*
 + デフォルト値を持たない引数Xはundefinedとなるだけ。
 */
function show(x, y = 1){
  console.log('x = ' + x);
  console.log('y = ' + y);
}
show();

/*
 * 例外をスローするだけのrequired関数を準備しておき、
 * これを必須引数のデフォルト値として指定することで、
 * 引数が指定されな会った場合にrequired関数が実行（=例外がスロー）される。
 */
function required(){
  throw new Error('引数が不足しています');
}
function hoge(value = required()){
  return value;
}
hoge();