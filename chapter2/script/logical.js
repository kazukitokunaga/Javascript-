// 論理演算子
var x = 1;
var y = 2;

console.log(x === 1 && y === 1); // 結果：false
console.log(x === 1 || y === 1); // 結果：true

/*
 * 暗黙的なfalse
 * ・空文字列（""）
 * ・数値の0、NaN（Not a Number）
 * ・null、undefined
 */