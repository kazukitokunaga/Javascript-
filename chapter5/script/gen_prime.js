// 素数を求めるためのジェネレーター
function* genPrimes(){
  let num = 2; // 素数の開始値
  // 2から順に素数判定し、素数の場合にだけyield（無限ループ）
  while(true){
    if (isPrime(num)){ yield num; }
    num++;
  }
}

// 引数valueが素数かどうかを判定
function isPrime(value){
  let prime = true; // 素数かどうかを表すフラグ
  // 2~Math.sqrt(value)で、valueを割り切れる値があるかを判定
  for (let i = 2; i <= Math.floor(Math.sqrt(value)); i++){
    if(value % i === 0){
      prime = false; // 割り切れたら素数でない
      break;
    }
  }
  return prime;
}

for(let value of genPrimes()){
  // 素数が101以上になったら終了（これがないと無限ループになるので注意）
  if(value > 100){ break; }
  console.log(value);
} // 結果：2,3,5,7,11,13,17,19,23,29,31.....97

/*
 * 素数の判定には「エラトステネスのふるい」（2から順にすべての正数の倍数をふるい落としていく方法）が有名だが、
 * ここではシンプルに、2から順に約数が存在するかを判定している。
 */

/*
 * forの上限は、Math.sqrt(value)
 * for命令の上限は、判定の対象となる値（value）そのものではなく、その平方根で十分。
 * 例えば、対象の値が24であれば、その約数は１、２、３、４、６、８、１２、２４となる。
 * 約数は、４×６、３×８、２×１２のように互いにかけ合わせることで元の数になる組み合わせがある。
 * 平方根（この例では、4.89...）は、その組み合わせの折返しとなるポイントなので、
 * 折り返し点より前の値さえチェックすれば、それ以降には約数がないことを確認できる。
 *
 * なお、Math.sqrt(value)メソッドは、引数の平方根を返すメソッド。
 */