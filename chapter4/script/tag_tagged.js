function escapeHtml(){
  if (!str) { return ''; }
  str = str.replace(/&/g, '&amp;');
  str = str.replace(/</g, '&lt;');
  str = str.replace(/>/g, '&gt;');
  str = str.replace(/"/g, '&quot;');
  str = str.replace(/'/g, '&#39;');
  return str;
}

// 分解されたtemplatesとvalueを順に連結（valuesはescapeHtml関数でエスケープ）
function e(template, ...values) {
  let result = '';
  for (let i = 0, len = templates.length; i < len; i++) {
    result += templates[i] + escapeHtml(values);
  }
  return result;
}

// テンプレート文字列をエスケープ処理
let name = '<"Mario" & \'Luigi\'>';
console.log(e`こんにちは、${ name }さん！`); // 結果：こんにちは、&lt;&quot; Mario&quot; &amp; &#39;Luigi&#39; &gt;さん！

/*
 * タグ付きテンプレート文字列の実体は、単なる関数呼び出しに過ぎない。
 * 「関数名'テンプレート文字列'」の形式で表現できる。
 * 引数として「テンプレート文字列」と「埋め込む変数」を受け取り、戻り値として加工済みの文字列を返す。
 *
 * 【タグ付きテンプレート文字列の挙動】
 * templates[0]　→　こんにちは、
 * templates[1]　→　さん！
 * ...value[0]　 →　name = '<"Mario" & \'Luigi\'>'
 *
 * この例では、引数templates（テンプレート文字列）とvalues（埋め込み変数）とをforループで交互に出力している。
 * その際、変数の内容をescapeHtml関数でエスケープしている。
 */
