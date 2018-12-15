/*
 * JavaScriptでは、引数のデフォルト値を表現するための構文は無いので、
 * 引数の内容をチェックし、undefinedであった場合に、それぞれ値をセットしている。
 */
function getTriangle(base, height){
  if (base === undefined) { base = 1; }
  if (height === undefined) { height = 1; }
  return base * height / 2;
}

console.log(getTriangle(5)); // 結果：2.5