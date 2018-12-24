/*
 * ストレージに保存できる型は、文字列が前提。
 * オブジェクトを保存してもエラーにはならないが、
 * 内部的にはtoStringメソッドで文字列化されてしまうので、
 * あとからオブジェクトとして復元することは出来ない。
 *
 * そこで、オブジェクトをストレージに保存する場合には、「復元可能な文字列に変換しなければならない。」
 */

var storage = localStorage;
var apple = { name: 'りんご', price: 150, made: '青森' };
// オブジェクトを復元可能な文字列に変換するのは、JSON.stringfyメソッドの役割。
storage.setItem('apple', JSON.stringify(apple));

// データを取り出す際は、文字列をJSON.parseメソッドに渡すことで、オブジェクトとして復元できる。
var data = JSON.parse(storage.getItem('apple'));
console.log(data.name);
