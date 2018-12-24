/*
 * 特定の要素ノードに属するすべての属性を取得したい場合には、
 * attributesプロパティを使用する。
 */
document.addEventListener('DOMContentLoaded', function () {
  // <img id="logo">を取得
  var logo = document.getElementById('logo');
  // <img>要素に含まれる属性リストを取得
  var attrs = logo.attributes;
  // 属性リストから順に属性を取り出し、その名前／値のセットを出力
  for (var i = 0, len = attrs.length; i < len; i++){
    var attr = attrs.item(i);
    console.log(attr.name + ':' + attr.value);
  }
}, false)
/* 結果：
 * id:logo
 * src:http://www.wings.msn.to/image/wings.jpg
 * height:67
 * width:215
 * border:0
 * alt:WINGS (Www INtegrated Guide on Server-architecture)
 */