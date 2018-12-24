/*
 * ノードウォーキング
 */

 // <select id="food">要素の配下に含まれる<option>要素を取り出し、そのvalue属性の値を列挙する例

// <select id="result">を取得
var s = document.getElementById('food');
// <select>要素配下の子ノードを取得
var opts = s.childNodes;
// 子ノードを順に取得
for(var i = 0, len = opts.length; i < len; i++){
  // 子ノードが要素ノード（type:1）である場合にのみ、その値をログ表示
  if (opt.nodeType === 1){
    console.log(opt.value);
  }
}
/* 結果：
 * ラーメン
 * 餃子
 * 焼き肉
 */