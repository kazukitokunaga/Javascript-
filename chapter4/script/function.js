// 呼び出し元から指定された値を受け取るための変数を、カンマ区切りで指定する。
function getTriangle(base, height){
  // 戻り値（返り値）は、return命令で指定する。戻り値がない場合は省略可能。デフォルトではundefinedを返す。
  return base * height / 2;
}

console.log('三角形の面積：' + getTriangle(5,2)); // 結果：5