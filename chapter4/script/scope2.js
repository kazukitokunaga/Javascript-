scope = 'Global Variable';
function getValue(){
  scope = 'Local Variable';
  return scope;
}
console.log(getValue()); // 結果：Local Variable
console.log(scope); // 結果：Local Variable

/*
 * var命令を使わずに宣言された変数はすべてグローバル変数とみなされる。
 * よって、上記では、ともに「Local Variable」が出力された。
 * つまり、ローカル変数を定義するには、必ずvar命令を使用する。
 */