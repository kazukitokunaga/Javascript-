/*
 * spliceメソッドは元の配列から除去された要素を戻り値として返す。
 */
var data = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh'];
console.log(data.splice(3, 2, 'Yamada', 'Suzuki')); // 結果：["Hio", "Saitoh"]
console.log(data); // 結果：["Sato", "Takae", "Osada", "Yamada", "Suzuki"]

// 以下のように要素を指定しない場合は、削除するという意味になる。
console.log(data.splice(3,2)); // 結果：["Yamada", "Suzuki"]
console.log(data); // 結果：["Sato", "Takae", "Osada"]

// 以下のように置き換えるべき要素数を0とした場合は、「引数indexで指定された位置に要素を挿入する」という意味になる。
console.log(data.splice(1, 0, 'Tanaka'));// 結果：[]
console.log(data) // 結果：["Sato", "Tanaka", "Takae", "Osada"]
