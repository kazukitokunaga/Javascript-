/*
 * 不変オブジェクトとは、最初にインスタンスを生成したあと、一切の状態（値）を変更できないオブジェクトのこと
 */
'use strict';

var pet = { type: 'スノーホワイトハムスター', name: 'キラ' };

// 以下をそれぞれコメントインして動作を確認
// Object.preventExtensions(pet); // エラー(weightプロパティを追加できない)：freeze.js:15 Uncaught TypeError: Cannot add property weight, object is not extensible
// Object.seal(pet); // エラー（typeプロパティを削除できない）：freeze.js:14 Uncaught TypeError: Cannot delete property 'type' of #<Object>
// Object.freeze(pet); // エラー（nameプロパティは読み取り専用）：freeze.js:13 Uncaught TypeError: Cannot assign to read only property 'name' of object '#<Object>'

pet.name = '山田きら';
delete pet.type;
pet.weight = 42;

console.log(pet);
