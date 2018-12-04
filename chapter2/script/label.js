kuku:
for(var i = 1; i < 10; i++){
  for(var j = 1; j< 10; j++){
    var k = i * j;
    if (k > 30){ break kuku; }
    document.write(k + '&nbsp');
  }
  document.write('<br />');
}

// 「kuku」のように、脱出先のループに戦闘にラベルを指定する。
// ラベルには、任意の名前を付けることができる。