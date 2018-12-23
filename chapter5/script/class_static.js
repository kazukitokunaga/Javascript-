/*
 * static修飾子をメソッドの頭に付与することで、静的メソッドを定義することもできる。
 */
class Area{
  static getTriangle(base, height){
    return base * height / 2;
  }
}

console.log(Area.getTriangle(10, 5)); // 結果：25