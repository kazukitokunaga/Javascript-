var y = 'Global';
function outerFunc(){
  var y = 'Local Outer';

  function innerFunc(){
    var z = 'Local Inner';
    console.log(z); // 結果：Local Inner
    console.log(y); // 結果：Local Outer
    console.log(x); // 結果：エラー（未定義）
  }
}

/*
 * ローカル変数は、Activation Object（通称、Callオブジェクト）のプロパティ
 * グローバル変数は、Globalオブジェクトのプロパティ
 *
 * これらを、生成の順に連結したものを「スコープチェーン」という。
 * この例では、チェーンの先頭（最内側の関数）である内部のCallオブジェクト、外部のCallオブジェクト、グローバルオブジェクトという順で呼び出される。
 */