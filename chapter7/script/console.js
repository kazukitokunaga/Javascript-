console.log('ログ');
console.info('情報');
console.warn('警告');
console.error('エラー');

// groupを呼び出してからgroupEndを呼び出すまでのログをグループ化する
console.group('上位グループ');
for (var i = 0; i < 3; i++) {
  console.group('下位グループ' + i);
  for (var j = 0; j < 3; j++) {
    console.log(i, j);
  }
  console.groupEnd();
}
console.groupEnd();

// traceメソッドでスタックトレース（そこに至るまでに経てきたメソッドの呼び出し階層を表す情報）を出力できる。
function call1() {
  call2();
}
function call2() {
  call3();
}
function call3() {
  console.trace();
}
call1();

// 以下は、ダイアログが表示してから閉じるまでのスクリプトの実行時間を計測。
console.time('MyTimer');
window.alert('確認してください。');
console.timeEnd('MyTimer');

// 指定した条件式がfalseの場合のみログを出力する
function circle(radius) {
  console.assert(typeof radius === 'number' && radius > 0,
    '引数radiusは正数でなければいけません。');
  return radius * radius * Math.PI;
}
console.log(circle(-5));
