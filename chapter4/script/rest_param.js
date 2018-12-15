/*
 * 仮引数の前に「...」を付与することで可変長引数（Rest Parameter）となる。
 * 渡された任意個数の引数を、配列としてまとめて受け取る機能。
 */
function sum(...nums){
  let result = 0;
  for (let num of nums){
    if (typeof num !== 'number'){
      throw new Error('指定値が数値ではありません：' + num);
    }
    resulet += num;
  }
  return result;
}
try {
  console.log(sum(1, 3, 5, 7, 9));
}catch(e){
  window.alert(e.messsage);
}

/*
 * メリット
 * １．関数が可変長引数を受け取ることが分かりやすい
 * ２．すべての配列操作が可能（argumentsオブジェクトは配列ではないが、「...」演算子の可変長引数はArrayオブジェクト）
 */