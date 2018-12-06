var ary1 = ['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh','Sato'];
var ary2 = ['Yabuki', 'Aoki', 'Moriyama', 'Yamada'];
// 配列のサイズ
console.log(ary1.length); // 結果：6
// 指定したオブジェクトが配列であるか
console.log(Array.isArray(ary1)); // 結果：true
// 「要素, 要素, ...」の形式で文字列に変換
console.log(ary1.toString()); // 結果：Sato, Takae, Osada, Hio, Saitoh, Sato
// 指定した要素に合致した最初の要素のキーを取得
console.log(ary1.indexOf('Sato')); // 結果：0
// 指定した要素に合致した最後の要素のキーを取得
console.log(ary1.lastIndexOf('Sato')); // 結果：5
// 指定配列を現在の配列に連結
console.log(ary1.concat(ary2)); // 結果：['Sato', 'Takae', 'Osada', 'Hio', 'Saitoh','Sato', 'Yabuki', 'Aoki', 'Moriyama', 'Yamada']
// 配列内の要素を区切り文字「／」で連結
console.log(ary1.join('／')); // 結果：Sato／Takae／Osada／Hio／Saitoh／Sato
// start + 1 ~end番目の要素の抜き出し
console.log(ary1.slice(1)); // 結果：['Takae', 'Osada', 'Hio', 'Saitoh','Sato']
console.log(ary1.slice(1, 2)); // 結果：['Takae']
// 配列内のstart + 1 ~start + cnt番目の要素をrep,...で置き換え
console.log(ary1.splice(1, 2, 'Kakeya', 'Yamaguchi')); // 結果：['Takae', 'Osada']（置き換え対象の要素を取得）
console.log(ary1); // 結果：['Sato', 'Kakeya', 'Yamaguchi', 'Hio', 'Saitoh','Sato']
// 可変長引数を配列に変換
console.log(Array.of(20,40,60)); // 結果：[20,40,60]
// start + 1 ~end番目の要素をtarget + 1番目からの位置にコピー（要素数は元と変わらない）
console.log(ary1.copyWithin(1, 3, 5)); // 結果：['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Sato']（4〜5番目の要素を2〜3番目の位置へコピー）
console.log(ary1); // 結果：['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Sato']（コピー後の配列）
// 配列内のstart + 1 ~end番目の要素をvalで置き換え
console.log(ary2.fill('Suzuki', 1, 3)); // 結果：['Yabuki', 'Suzuki', 'Suzuki', 'Yamada']（2〜3番目の要素を'Suzuki'で置換）
console.log(ary2); // 結果：['Yabuki', 'Suzuki', 'Suzuki', 'Yamada']（置換後の配列）
// 配列末尾の要素を取得し、削除
console.log(ary1.pop()); // 結果：Sato（削除した要素）
console.log(ary1); // 結果：['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh']（削除後の配列）
// 配列末尾に要素を追加
console.log(ary1.push('Kondo')); // 結果：6（追加後の要素数）
console.log(ary1); // 結果：['Sato', 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']（追加後の配列）
// 配列先頭の要素を取得し、削除
console.log(ary1.shift()); // 結果：Sato（削除した要素）
console.log(ary1); // 結果：['Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']（削除後の配列）
// 配列先頭に指定要素を追加
console.log(ary1.unshift('Ozawa', 'Kuge')); // 結果：7（追加後の要素数）
console.log(ary1); // 結果：['Ozawa', 'Kuge, 'Hio', 'Saitoh', 'Hio', 'Saitoh', 'Kondo']（追加後の配列）
// 逆順に並べ替え
console.log(ary1.reverse()); // 結果：['Kondo', 'Saitoh', 'Hio', 'Saitoh', 'Hio', 'Kuge', 'Ozawa']（反転後の配列）
console.log(ary1); // 結果：['Kondo', 'Saitoh', 'Hio', 'Saitoh', 'Hio', 'Kuge', 'Ozawa']（反転後の配列）
// 要素を昇順に並べ替え
console.log(ary1.sort()); // 結果：['Hio', 'Hio', 'Kondo', 'Kuge', 'Ozawa', 'Saitoh', 'Saitoh']（ソート後の配列）
console.log(ary1); // 結果：['Hio', 'Hio', 'Kondo', 'Kuge', 'Ozawa', 'Saitoh', 'Saitoh']（ソート後の配列）
