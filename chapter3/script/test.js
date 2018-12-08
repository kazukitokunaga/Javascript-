// testメソッド
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく！';
// testメソッドは、与えられた文字列を検索し、その結果を真偽値で返す。
console.log(p.test(str1));
console.log(p.test(str2));

// serchメソッド
var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str1 = 'サポートサイトはhttp://www.wings.msn.to/です。';
var str2 = 'サポートサイト「サーバサイド技術の学び舎」をよろしく！';
// serchメソッドは、マッチした文字列が存在した場合に、戻り値として-1を返す。
console.log(str1.search(p));
console.log(str2.search(p));
