console.log(Number.MAX_SAFE_INTEGER); // 結果：9007199254740991
console.log(Number.MAX_SAFE_INTEGER + 1); // 結果：9007199254740992
console.log(Number.MAX_SAFE_INTEGER + 2); // 結果：9007199254740992（不正）

/*
 * MAX_SAFE_INTEGER/MIN_SAFE_INTEGERは、JavaScriptで安全に演算できる範囲の整数値の上限/下限を表す。
 * 上限/下限を超えた演算は、結果も保証されない。
 */