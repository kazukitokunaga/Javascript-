/* execメソッドは、グローバル検索が有効であるかどうかにかかわらず、一度の実行で１つの実行結果しか返さない。
*/

var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！'
var result = p.exec(str);
for (var i = 0, len = result.length; i < len; i++) {
  console.log(result[i]);
}

/* execメソッドでmatchメソッドと同じ結果を得るためには以下のようにする。
 * execメソッドは次の検索結果がない場合にnullを返すので、
 * nullになるまでwhileループを繰り返せば良い。
*/

var p = /http(s)?:\/\/([\w-]+\.)+[\w-]+(\/[\w- .\/?%&=]*)?/gi;
var str = 'サポートサイトはhttp://www.wings.msn.to/です。';
str += 'サンプル紹介サイトHTTP://www.web-deli.com/もよろしく！'
while((result = p.exec(str)) !== null) {
  console.log(result[0]);
}
