/*
 * アスタリスクでモジュール内の全ての要素をインポートできる。
 * この場合、as句でモジュールの別名を指定しておく必要がある。
 */

// Utilモジュールに別名appを付与
import * as app from './lib/Util'

var m = new app.Member('太郎', '山田');
console.log(m.getName()); // 結果：山田太郎
