var data = ['JavaScript', ['jQuery', 'prototype.js'], 'ASP.NET'];
console.log(data[1][0]);
// 結果：jQuery（2番めの要素の中の1番目の要素を取得）
// 入れ子の配列では、「配列名[インデックス番号][インデックス番号]」のように要素にアクセスする。