// 引数start/endに負の値を指定した場合
var str = 'WINGSプロジェクト';
console.log(str.substring(5,-2)); // 結果：WINGS（1〜5文字目を抽出）
console.log(str.slice(5,-2)); // 結果：プロジェクト（プロジェクト（6〜9文字目を抽出））

/*
 * substringメソッドは無条件に0とみなすが、
 * sliceメソッドは「文字列末尾からの文字数」とみなす
 */