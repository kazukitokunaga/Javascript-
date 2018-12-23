/*
 * モジュールに含まれる要素が1つだけであれば、デフォルトのエクスポートを宣言することもできる。
 * これには、いかのようにdefaultキーワードを付与する。
 * デフォルトエクスポートでは、クラス／関数などの名前は不要。
 */
export default class{
  static getTriangle(base, height){
    return base * height / 2;
  }
}