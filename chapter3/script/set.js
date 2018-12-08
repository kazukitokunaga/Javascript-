// Setオブジェクトに値を追加
let s = new Set();
s.add(10);
s.add(5);
s.add(100);
s.add(50);
// 同じ値は無視される
s.add(5);

//let s = new Set([10, 5, 100, 50, 5]);

console.log(s.has(100)); // 結果：true
console.log(s.size); // 結果：4

// 値を順に取得
for (let val of s.values()) {
  console.log(val); // 結果：10、5、100、50
}

// 値を順に取得（上と同じ意味）
for (let val of s) {
  console.log(val); // 結果：10、5、100、50
}

// 値100を破棄
s.delete(100);
console.log(s.size); // 結果：3

// 値をすべて破棄
s.clear();
console.log(s.size); // 結果：0