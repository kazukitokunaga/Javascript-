/*
 * 再帰関数（Recursive Function）とは、ある関数が自分自身を呼び出すこと、または、そのような関数のこと。
 */
function factorial(n) {
  if (n != 0){ return n * factorial(n - 1); }
  return 1;
}
console.log(factorial(5)); // 結果：120

/*
 * 階乗とは、自然数nに対する1〜nの総積のこと（数学的には「n!」）
 * 自然数5の階乗は5×4×3×2×1で、自然数nの階乗が「n×(n-1)!」で求められることに着目している。
 */

// factorial(5) → 5 * 24 = 120
// factorial(4) → 4 * 6 = 24
// factorial(3) → 3 * 2 = 6
// factorial(2) → 2 * 1 = 2
// factorial(1) → 1 * 1 = 1
// factorial(0) → 1