var result = 0;
for (var i =1; i < 100; i++){
  // カウンター変数が偶数（2で割って余りが0）の場合のみ処理をスキップ
  if(i % 2 === 0){ continue }
  result += i;
}
console.log('合計；' + result);
// 結果：2500

// continue命令は、現在のループをスキップして次のループを継続して実行する。