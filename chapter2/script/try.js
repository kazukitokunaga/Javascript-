var i = 1;
try{
  i = i * j; // 例外発生
} catch(e) {
  console.log(e.message);
} finally {
  console.log('処理は完了しました。');
}

/*
 * tryブロックで発生した例外は、処理はそのままcatchブロックに引き継がれ、後続のfinalyブロックも実行される。
 * finalyブロックは、不要な場合は省略しても構わない。
 * なお、エラーはthrow new Errorで自分で発生させることもできる。
 * 「例外をスローする」とも言う。
 */