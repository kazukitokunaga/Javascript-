let sym1 = Symbol('sym');
let sym2 = Symbol('sym');

console.log(typeof sym1); // 結果：symbol
console.log(sym1.toString()); // 結果：Symbol(sym)
console.log(sym1 === sym2); // 結果：false