var value = [1,2,4,8,16];
function deleteElement(value){
  value.pop(); // 末尾の要素を削除
  return value;
}

console.log(deleteElement(value)); // 結果：[1,2,4,8]
console.log(value); // 結果：[1,2,4,8]

/*
 * グローバル変数valueと、deleteElementの仮引数（ローカル変数）は、変数としては別だが、
 * 実引数としてvalueを渡していることから、参照しているメモリ上の場所が等しくなるため、
 * deleteElement内の操作した結果はグローバル変数のvalueにも反映される。
 */