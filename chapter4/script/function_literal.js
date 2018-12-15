/*
 * 関数リテラルとして定義すると、
 * リテラルとして表現できるし、関数リテラルを変数に代入したり、有る関数の引数として渡したり、
 * はたまた、戻り値として関数を返すことすら可能。
 */
var getTriangle = function(base, height){
  return base * height / 2;
};

console.log('三角形の面積：' + getTriangle(5,2)); // 結果：5

/*
 * function命令によく似ているが、以下の違いがある。
 * ・function命令は関数getTriangleを直接定義している。
 * ・関数リテラルは「function(base,height){...}」と名前の無い関数を定義した上で、変数getTriangleに格納している。
 *
 * このように、関数リテラルは宣言した時点では、名前を持たないことから匿名関数、または無名関数と呼ばれることもある。
 */