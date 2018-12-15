var value = 10;

// 関数の仮引数は基本的にはローカル変数として処理される
function decrementValue(value){
  value--;
  return value;
}

console.log(decrementValue(100)); // 結果：99
console.log(value); // 結果：10