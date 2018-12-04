var result = 0;
for (var i = 1; i <= 100; i++){
  result += i;
  if (result > 1000){ break; }
}
console.log('合計値が1000を超えるのは' + i);
 // 結果：45

// このように、break命令は条件分岐命令と合わせて使用するのが一般的。