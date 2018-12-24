// ストレージからすべてのデータを取り出す
var storage = localStorage;
for (var i = 0, len = strage.length; i < len; i++)
{
  var k = storage.key(i);
  var v = storage[k];
  console.log(k + ':' + v);
}
/* 結果：
 * fruit1:りんご
 * fruit2:みかん
 * fruit3:ぶどう
 */