// 引数start>引数endである場合
var str = 'WINGSプロジェクト';
console.log(str.substring(8,5)); // 結果：プロジ（6〜8文字目を抽出）
console.log(str.slice(8,5)); // 結果：空文字列

/*
 * substring/sliceメソッドは、開始位置〜終了位置の範囲で抽出箇所を指定するという意味では同じだが、
 * substringメソッドは引数startとendの関係を入れ替えてend+1〜start文字目までを抽出する。
 * sliceメソッドは、こうした入れ替えはせずに、そのまま空文字列を返す。
 *
 * そのため、上記のようにsliceメソッドでは、空文字列が返される。
 */