console.log('3.14E2' == 314); // 指数表現と解釈されtrue
console.log('0x10' == 16); // 16進数表現と解釈されtrue
console.log('1' == 1); // true

// ===演算子はデータ型を変換しない
console.log('3.14E2' == 314); // false
console.log('0x10' == 16); // false
console.log('1' == 1); // false

// ==と===の関係は、!=と!==の関係と同じ。
// 大規模な開発では、より厳密な===を使うことが望ましい。